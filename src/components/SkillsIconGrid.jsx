import React from "react";
import { Code, Server, Shield } from "lucide-react";

export function SkillsIconGrid() {
  const skills = [
    { icon: <Code />, name: "React.js", description: "React.js" },
    { icon: <Code />, name: "Tailwind CSS", description: "React.js" },
    { icon: <Server />, name: "Node.js", description: "React.js" },
    { icon: <Code />, name: "PHP", description: "React.js" },
    { icon: <Shield />, name: "Network Security", description: "React.js" },
    { icon: <Server />, name: "MySQL", description: "React.js" },
    { icon: <Shield />, name: "Firewall", description: "React.js" },
  ];

  return (
    <div className="mt-[20px]">
      <h2 className="text-2xl font-bold mb-6 md:text-2xl">Skills</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
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
        hover:bg-gradient-to-br hover:bg-[#0f4a43] hover:to-white 
        active:bg-gradient-to-br active:from-[#0f4a43] active:to-white
        cursor-pointer
        active:scale-95
      "
          >
            {/* Icon */}
            <div
              className="
          w-[50px] h-[50px]
          bg-[#0f4a43]
          rounded-2xl
          flex justify-center items-center mb-5
          shadow-lg
          transition-all duration-300
          group-hover:rotate-6
          group-hover:scale-110
          group-bg-[#0f4a43]
          group-active:rotate-6
          group-active:scale-110
          group-active:bg-[#0f4a43] text-white
        "
            >
              {skill.icon}
            </div>

            {/* Title */}
            <h2
              className="
          text-[15px] md:text-md mb-1 text-gray-700
          transition-colors duration-300
          group-hover:text-gray-600
        "
            >
              {skill.name}
            </h2>

            {/* Description */}
            <p
              className="
          py-4 text-gray-500 text-[13px]
          transition-colors duration-300
          group-hover:text-gray-700
        "
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
