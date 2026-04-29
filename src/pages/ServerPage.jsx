import React, { useEffect, useRef, useState } from "react";

export default function ServerPage() {
  return <ServiceSection />;
}

// 🔥 Hook for scroll animation
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

const data = [
  {
    id: 1,
    title: "Configurations & Installations",
    subtitle: "Tailored IT Solutions for Your Business",
    desc: "We specialize in configuring and installing a wide range of IT solutions, including FortiGate firewalls, CCTV systems, Mikrotik routers, and comprehensive website development services. Our expert team ensures that each solution is customized to meet your specific business needs, providing you with secure, efficient, and scalable technology infrastructure.",
    img: "../../public/image/microsoftteams-image--35--7da695e7ad2245ffa42277d70c2897d7.webp",
  },
  {
    id: 2,
    title: "INSTALL CAMERA & CCTV SUPPORT",
    subtitle: "Secure Your Property with Professional CCTV Solutions",
    desc: "Our IT consultancy and support services are designed to help your business navigate the complex world of technology. We provide expert guidance on IT strategy, infrastructure planning, and ongoing support to ensure your systems run smoothly and efficiently. Whether you need help with network security, system optimization, or troubleshooting, our team is here to provide reliable and effective solutions.",
    img: "../../public/image/technician-installing-cctv-camera-for-security-ai-generative-photo.webp",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    subtitle: "Building Dynamic and Responsive Websites",
    desc: "We offer comprehensive full-stack web development services to create dynamic and responsive websites that meet your business needs. Our team of expert developers utilizes the latest technologies to deliver high-quality web solutions that are both visually appealing and functionally robust.",
    img: "../../public/image/net.webp",
  },
];

export function ServiceSection() {
  return (
    <div className="mt-20 overflow-hidden z-50 space-y-24 w-full h-auto px-[6%] pb-[5%] sm:px-[15%] md:px-[10%] lg:px-[15%]">
      {data.map((item, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ref, isVisible] = useInView({ threshold: 0.2 });

        // Animation directions
        // Even: image left->center, text right->center
        // Odd: image right->center, text left->center
        const imageInitial =
          index % 2 === 0 ? "-translate-x-[120%]" : "translate-x-[120%]";
        const textInitial =
          index % 2 === 0 ? "translate-x-[120%]" : "-translate-x-[120%]";

        return (
          <div
            ref={ref}
            key={item.id}
            className={`flex flex-col md:flex-row items-center gap-12  ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div
              className={`w-full md:w-1/2 group relative overflow-hidden rounded-3xl shadow-2xl  hover:scale-105 transition duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${imageInitial}`
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition"></div>

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* Text */}
            <div
              className={`w-full md:w-1/2 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${textInitial}`
              }`}
            >
              <p className="uppercase text-gray-400 text-[10px] md:text-[12px] tracking-widest mb-2 transition-all duration-700 delay-100">
                Service
              </p>

              <h2 className="text-lg md:text-3xl font-bold text-gray-700 mb-4 uppercase transition-all duration-700 delay-200">
                {item.title}
              </h2>

              <h4 className="text-sm md:text-xl font-semibold text-gray-500 mb-4 transition-all duration-700 delay-300">
                {item.subtitle}
              </h4>

              <p className="text-gray-600 text-[12px] md:text-[15px] leading-relaxed mb-6 transition-all duration-400 delay-400">
                {item.desc}
              </p>

              {/* <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition">
                Learn More
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
