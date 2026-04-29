import React from "react";

export default function BannerTamplate({ title, description, urlImage }) {
  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] lg:h-[100vh] bg-black text-white overflow-hidden  px-[6%] pb-[2%] sm:px-[15%] md:px-[10%] lg:px-[15%] sm:w-full sm:h-screen">
      <img
        src={urlImage}
        alt="bg"
        className="absolute w-full h-[50vh] md:h-[50vh] lg:h-[100vh] object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-center items-start text-start h-[50vh] md:h-[50vh] lg:h-[100vh]">
        <h1 className="text-xl font-bold mb-4 uppercase md:text-2xl lg:text-4xl">
          {title}
        </h1>
        <p className="text-[13px] uppercase text-gray-500  md:text-md lg:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}
