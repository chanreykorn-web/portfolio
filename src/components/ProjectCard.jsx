import React from "react";
import projects from "../data/project.js";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ProjectCard() {
  const navigate = useNavigate();

  return (
    <>
      {projects.map((project, index) => (
        <div
          className="group w-[100%] h-auto rounded-2xl overflow-hidden mt-[20px] active:scale-95 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] md:w-[320px] cursor-pointer"
          key={index}
          onClick={() => navigate(`/projects/detail/${project.slug}`)}
        >
          {/* Image Section */}

          <div className="relative h-[220px] overflow-hidden">
            <img
              src={project.image}
              alt="project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />

            {/* Label */}
            <div className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {project.label}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 transition-all duration-500">
            <h2 className="text-lg font-semibold uppercase text-gray-900 mb-2 transition-transform duration-300 group-hover:translate-x-0">
              {project.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
              {project.description}
            </p>
            <p className="text-gray-500 text-[14px] mt-4">{project.date}</p>
            <div className="flex justify-end items-center">
              <div className="flex flex-wrap gap-2">
                {project.technologies?.length > 0 &&
                  project.technologies.map((tech, idx) => (
                    <p className="text-gray-400 text-[10px] mt-2" key={idx}>
                      {tech}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function Helmets() {
  const url = `https://chanreykorn.com/projects/detail/1555066931-4365d14bab8c`;
  return (
    <>
      <Helmet>
        {/* BASIC SEO */}
        <title>Our Projects | Web Development & IT Solutions</title>
        <meta
          name="title"
          content="Our Projects | Web Development & IT Solutions"
        ></meta>
        <meta
          name="description"
          content="Explore our latest web development and IT projects including system design, network setup, and modern applications in Cambodia."
        />

        {/* 🔥 OPEN GRAPH (Facebook, LinkedIn, Google) */}
        <meta property="og:title" content="Our Projects | Portfolio" />
        <meta
          property="og:description"
          content="Check out our professional web development and IT support projects."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        {/* 🔥 EXTRA (Better preview control) */}
        <meta property="og:site_name" content="CHANREY KORN" />

        {/* 🔥 TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Portfolio" />
        <meta
          name="twitter:description"
          content="Check out our professional web development and IT support projects."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        />

        {/* 🔥 CANONICAL URL (Very important for Google) */}
        <link rel="canonical" href={url} />
      </Helmet>
    </>
  );
}
