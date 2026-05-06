import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/project.js";
import Footer from "../components/Footer.jsx";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ProjectCard from "../components/ProjectCard.jsx";
import { Helmet } from "react-helmet-async";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8 text-red-500">Project not found.</div>;
  }

  const url = `https://chanreykorn.com/projects/${project.slug}`;

  return (
    <>
      <Helmet>
        {/* BASIC SEO */}
        <title>{project.title}</title>
        <meta name="title" content={project.title}></meta>
        <meta name="description" content={project.description} />

        {/* 🔥 OPEN GRAPH (Facebook, LinkedIn, Google) */}
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        {/* 🔥 EXTRA (Better preview control) */}
        <meta property="og:site_name" content="CHANREY KORN" />

        {/* 🔥 TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.image} />

        {/* 🔥 CANONICAL URL (Very important for Google) */}
        <link rel="canonical" href={url} />
      </Helmet>

      {/* <Nav /> */}
      <div className="w-full h-auto px-[6%] pb-[2%] sm:px-[15%] md:px-[10%] lg:px-[15%] mt-[80px]">
        <h1 className="text-3xl font-bold mb-2 uppercase">{project.title}</h1>
        <div className="flex items-center text-gray-600 gap-2 mt-[10px]">
          <CalendarMonthIcon fontSize="100" />
          <p className="text-[12px] lg:text-[13px]">25-May-2025</p>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto md:h-auto lg:h-[75vh] object-cover rounded-xl mt-[20px]"
        />
        <div className="flex justify-end items-center mt-2">
          {/* <div className="text-gray-500 bg-gray-200 text-[8px] px-1.5 py-0.5">
            Label: {project.label}
          </div> */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#0f4a43] text-[8px] lg:text-[12px] px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-full text-[#d1d5dc]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-[14px] lg:text-[16px] my-5 leading-relaxed transition-all duration-500">
          {project.description}
        </p>
        <h2 className="text-2xl font-bold mt-6 md:text-3xl">Our Projects</h2>
        <ProjectCard />
      </div>
      <Footer />
    </>
  );
}
