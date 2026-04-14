import React from "react";

export default function ErrorAlert({ message }) {
  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
  px-6 py-3 rounded-xl 
  bg-[#1e2027]/80 backdrop-blur-md 
  border border-red-400/20 
  shadow-[0_0_30px_rgba(255,0,0,0.15)]
  text-sm text-red-300 
  flex items-center gap-3"
    >
      {/* индикатор */}
      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

      {/* текст */}
      <span>{message}</span>
    </div>
  );
}
