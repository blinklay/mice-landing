import React from "react";

export default function ProductCard({ product, setTarget, target }) {
  return (
    <div className="group cursor-pointer" onClick={() => setTarget(product.id)}>
      <div
        style={{
          opacity: target === product.id ? "1" : ".5",
          transform: target === product.id ? "scale(1.2)" : "scale(1)",
        }}
        className="bg-white/5 border border-white/10 rounded-xl p-6 
              hover:border-[#fef9ad]/40 transition"
      >
        <img
          src={"http://localhost:5000" + product.image}
          className="w-full h-48 object-contain mx-auto"
        />

        <p className="mt-4 text-sm text-gray-400">{product.variant}</p>
        <p className="text-[#fef9ad] font-medium">{product.color}</p>
      </div>
    </div>
  );
}
