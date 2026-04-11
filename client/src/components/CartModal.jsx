import React from "react";
import { CartItem } from "./CartItem";
import useCartStore from "../feauters/cart/useCartStore";

export default function CartModal() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-[#1e2027] border border-white/10 
    p-6 rounded-2xl w-[400px] shadow-2xl  scale-95 opacity-0 animate-[fadeIn_0.2s_forwards]"
      >
        <h2 className="text-lg font-semibold mb-4">Корзина</h2>
        <div>
          {cart.map((p) => (
            <CartItem product={p} key={p.id} />
          ))}
        </div>
        <button className="mt-4 w-full py-2 bg-[#fef9ad] text-black rounded-lg">
          Перейти к оформлению
        </button>
      </div>
    </div>
  );
}
