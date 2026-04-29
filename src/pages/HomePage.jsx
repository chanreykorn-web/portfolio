import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Card from "../components/Card";
// import SettingsInputAntennaSharpIcon from "@material-ui/icons/SettingsInputAntennaSharp";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import ProjectCard from "../components/ProjectCard";
import { SkillsIconGrid } from "../components/SkillsIconGrid";
import { SectionAboutPages } from "./AboutPage";
import Footer from "../components/Footer";
// import { ServiceSection } from "./ServerPage";
import ServiceItem from "./ServerPage";
import { Helmet } from "react-helmet-async";

const dataOurService = [
  {
    id: 1,
    title: "Configuration FortiGate Firewall",
    description:
      "Professional configuration and management of FortiGate firewalls to ensure optimal security and performance.",
    icon: <SensorsOutlinedIcon color="white" />,
  },
  {
    id: 2,
    title: "Configuration & Install CCTV",
    description:
      "Professional configuration and management of CCTV systems to ensure optimal security and performance.",
    icon: <SensorsOutlinedIcon color="white" />,
  },
  {
    id: 3,
    title: "Configuration Mikrotik Router",
    description:
      "Professional configuration and management of Mikrotik routers to ensure optimal security and performance.",
    icon: <SensorsOutlinedIcon color="white" />,
  },
  {
    id: 4,
    title: "Website Development Frontend & Backend",
    description:
      "Professional configuration and management of Mikrotik routers to ensure optimal security and performance.",
    icon: <SensorsOutlinedIcon color="white" />,
  },
];

const HomePage = () => {
  const url = `https://chanreykorn.com`;
  return (
    <>
      <Helmet>
        {/* BASIC SEO */}
        <title>chanrey korn</title>
        <meta name="description" content={''} />

        {/* 🔥 OPEN GRAPH (Facebook, LinkedIn, Google) */}
        <meta property="og:title" content=""/>
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        {/* 🔥 EXTRA (Better preview control) */}
        <meta property="og:site_name" content="CHANREY KORN" />

        {/* 🔥 TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />

        {/* 🔥 CANONICAL URL (Very important for Google) */}
        <link rel="canonical" href={url} />
      </Helmet>

      <Banner />
      <ServiceItem />
      <div className="w-full h-auto px-[6%] pb-[2%] sm:px-[15%] md:px-[10%] lg:px-[15%] z-50">
        {/* <OurServices /> */}
        {/* <ServiceSection /> */}
        <h2 className="text-2xl font-bold mt-6 md:text-3xl">Our Projects</h2>
        <ProjectCard />
        {/* <h2 className="text-2xl font-bold mt-6 md:text-3xl">My Skills</h2> */}
        <SkillsIconGrid />
      </div>
      <SectionAboutPages />
      <Footer />
    </>
  );
};

export default HomePage;

const OurServices = () => {
  return (
    <div className="mt-[20px]">
      <h2 className="text-2xl font-bold mb-6 md:text-3xl">Our Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {dataOurService.map((service) => (
          <div
            key={service.id}
            className="
        group
        px-5 py-5 rounded-2xl
        bg-white
        shadow-md
        transition-all duration-300
        hover:shadow-2xl
        active:shadow-2xl
        active:translate-y-2
        hover:-translate-y-2
        hover:bg-gradient-to-br hover:from-amber-100 hover:to-white 
        active:bg-gradient-to-br active:from-amber-100 active:to-white
        cursor-pointer
        active:scale-95
      "
          >
            {/* Icon */}
            <div
              className="
          w-[50px] h-[50px]
          bg-amber-300
          rounded-2xl
          flex justify-center items-center mb-5
          shadow-lg
          transition-all duration-300
          group-hover:rotate-6
          group-hover:scale-110
          group-hover:bg-amber-400
          group-active:rotate-6
          group-active:scale-110
          group-active:bg-amber-400
        "
            >
              {service.icon}
            </div>

            {/* Title */}
            <h2
              className="
          text-xl mb-2 text-gray-700
          transition-colors duration-300
          group-hover:text-amber-600
        "
            >
              {service.title}
            </h2>

            {/* Description */}
            <p
              className="
          py-4 text-gray-500 text-sm
          transition-colors duration-300
          group-hover:text-gray-700
        "
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
