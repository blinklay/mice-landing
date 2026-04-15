import React from "react";
import mousePic from "../assets/images/mouse.png";
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[700px] h-[700px] bg-yellow-300/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="absolute inset-0 flex justify-center items-start pb-20-z-10">
        <div className="w-[500px] h-[500px] bg-blue-300/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full text-center">
        <h1 className="text-4xl font-bold">Phantom X Wireless</h1>

        <p
          className="text-lg md:text-4xl mt-2 font-medium uppercase 
  // bg-gradient-to-r from-[#fef9ad] to-[#f7ec93] 
  // bg-clip-text text-transparent"
        >
          Минимум веса — максимум точности
        </p>
        <img
          src={mousePic}
          className="mx-auto max-w-1/2 mt-10 animate-[float_4s_ease-in-out_infinite]"
        />
        <p className="text-xs text-gray-500 mt-2 tracking-widest">
          ULTRA LIGHTWEIGHT • 49G • WIRELESS
        </p>
      </div>
    </section>
  );
}
