import React from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import BannerTamplate from "../components/BannerTamplate";
import { Helmet } from "react-helmet-async";

export default function ProjectPage() {
  const url = "https://chanreykorn.com/projects";
  return (
    <>
      {/* <Helmet>
        <title>Our Projects | Web Development & IT Solutions</title>

        <meta
          name="description"
          content="Explore our latest web development and IT projects including system design, network setup, and modern applications in Cambodia."
        />

        
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
        <meta property="og:type" content="website" />

        
        <link rel="canonical" href={url} />
      </Helmet> */}

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
        <meta property="og:type" content="website" />

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

      <BannerTamplate
        title={"Our Projects"}
        description={""}
        urlImage={
          "../../public/image/about-us-word-with-wooden-cubes-photo.webp"
        }
      />
      <div className="w-full h-auto px-[6%] pb-[2%] sm:px-[15%] md:px-[10%] lg:px-[15%] z-50">
        <h2 className="text-2xl font-bold mt-6 md:text-3xl">Our Projects</h2>
        <ProjectCard />
      </div>
      <Footer />
    </>
  );
}
