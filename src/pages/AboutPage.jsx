import React, { useEffect, useRef, useState } from "react";
import { Globe, Share2, AtSign } from "lucide-react";
import imageAboute from "../../public/image/photo_2026-04-20_19-01-51.webp";
import BannerTamplate from "../components/BannerTamplate";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

// Hook
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

export default function AboutPage() {
  const url = `https://chanreykorn.com/about`;
  return (
    <>
      <Helmet>
        <title>About Us | Web Development Cambodia</title>

        <meta name="description" content="Learn about our team..." />

        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us | Web Development Cambodia"
        />
        <meta property="og:description" content="Learn about our team..." />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://chanreykorn.com/photo-1555066931-4365d14bab8c.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Web Development Cambodia"
        />
        <meta name="twitter:description" content="Learn about our team..." />
        <meta
          name="twitter:image"
          content="https://chanreykorn.com/photo-1555066931-4365d14bab8c.jpg"
        />
      </Helmet>
      <BannerTamplate
        title={"About Us"}
        description={"lorem10"}
        urlImage={
          "../../public/image/about-us-word-with-wooden-cubes-photo.webp"
        }
      />
      <SectionAboutPages />
      <Footer />
    </>
  );
}

export function SectionAboutPages() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="mt-[60px] overflow-hidden z-50 w-full h-auto px-[6%] pb-[5%] sm:px-[15%] md:px-[10%] lg:px-[15%]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-[120%]"
          }`}
        >
          <p
            className={`class="uppercase text-gray-400 text-[10px] md:text-[12px] tracking-widest mb-2 transition-all duration-700 delay-100"${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Page
          </p>

          <h2
            className={`text-lg md:text-3xl font-bold text-gray-700 mb-4 uppercase transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            About Us
          </h2>

          <h4
            className={`text-sm md:text-xl font-semibold text-gray-500 mb-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Discover Our Team's Story
          </h4>

          <p
            className={`text-gray-600 text-[12px] md:text-[15px] leading-relaxed mb-6 transition-all duration-400 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            We are a team of passionate individuals who deliver high-quality IT
            solutions and modern digital experiences.
          </p>

          {/* ICONS */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <button className="w-10 h-10 flex items-center justify-center bg-[#0f4a43] text-white rounded-full hover:bg-[#0f4a43] hover:scale-110 transition">
              <Globe size={18} />
            </button>

            <button className="w-10 h-10 flex items-center justify-center bg-[#0f4a43] text-white rounded-full hover:bg-[#0f4a43] hover:scale-110 transition">
              <Share2 size={18} />
            </button>

            <button className="w-10 h-10 flex items-center justify-center bg-[#0f4a43] text-white rounded-full hover:bg-[#0f4a43] hover:scale-110 transition">
              <AtSign size={18} />
            </button>
          </div>

          <button
            className={`px-6 py-3 bg-[#0f4a43] text-white rounded-md shadow-md hover:bg-[#0f4a43] hover:scale-105 transition duration-500 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            LEARN MORE
          </button>
        </div>

        {/* IMAGE */}
        <div
          className={`transition-all duration-1200 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[120%]"
          }`}
        >
          <img
            src={imageAboute}
            alt="team"
            className="w-full h-[320px] md:h-[480px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-700"
          />
        </div>
      </div>
    </section>
  );
}
