import React from "react";
import { ArrowRight } from "lucide-react";

export default function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          1,
          "https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829711_1280.jpg",
          3,
          4,
        ].map((item) => (
          <div
            key={item}
            className="group relative w-[320px] h-[500px] rounded-[30px] overflow-hidden shadow-2xl transition duration-500 hover:scale-105 hover:-translate-y-3"
          >
            {/* Image Background */}
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="bg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* 🔥 Gradient + Blur Mix */}
            <div className="absolute inset-0 animated-mix"></div>

            {/* Extra Glass */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[4px]"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
              <p className="text-sm tracking-widest opacity-80 mb-2">
                PRODUCT DESIGN
              </p>

              <h2 className="text-2xl font-bold leading-snug mb-3">
                Product Vision for <br /> UX Designers
              </h2>

              <p className="text-sm opacity-80">Alan Turing</p>

              {/* Arrow */}
              <div className="flex justify-end mt-6">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
