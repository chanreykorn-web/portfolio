import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] lg:h-[100vh] bg-black text-white overflow-hidden">
      <img
        src="../../public/image/photo_2026-04-20_19-01-51.webp"
        alt="bg"
        className="absolute w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] md:h-[50vh] lg:h-[100vh] text-center px-[45px] md:px-0">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          IT Support & Web Development Services
        </h1>
        <p className="text-[11px] md:text-md lg:text-[18px] text-cyan-400 mb-6 max-w-2xl">
          Empowering Your Business with Expert IT Solutions and Stunning
          Websites
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2.5 md:px-5 md:py-3.5 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
