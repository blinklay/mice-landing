import { ShoppingCart } from "lucide-react";
import React from "react";

export default function Header({ setShowCart }) {
  function toggleCartState() {
    setShowCart((prev) => !prev);
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
  bg-white/5 backdrop-blur-md 
  border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="font-medium tracking-wide">Neon Store</span>

        <button
          onClick={toggleCartState}
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <ShoppingCart />
        </button>
      </div>
    </header>
  );
}
