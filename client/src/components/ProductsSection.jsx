import React, { useState } from "react";
import { useProductStore } from "../../feauters/useProductStore";
import ProductCard from "./ProductCard";
import useCartStore from "../../feauters/useCartStore";

export default function ProductsSection() {
  const products = useProductStore((state) => state.products);
  const loading = useProductStore((state) => state.loading);
  const error = useProductStore((state) => state.error);
  const [target, setTarget] = useState(null);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseCount = useCartStore((state) => state.increaseCount);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const decreaseCount = useCartStore((state) => state.decreaseCount);

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative">
      {loading ? (
        <>
          <div className="max-w-5xl mx-auto px-4">
            <div className="h-8 w-64 mx-auto bg-white/10 rounded-md animate-pulse" />
            <div className="h-6 w-96 mx-auto bg-white/5 rounded-md mt-4 animate-pulse" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="w-full h-48 bg-white/10 rounded-lg animate-pulse" />

                  <div className="h-4 w-20 bg-white/10 rounded mt-4 animate-pulse" />
                  <div className="h-5 w-16 bg-white/20 rounded mt-2 animate-pulse" />
                </div>
              ))}
            </div>

            <div className="h-12 w-40 mx-auto bg-[#fef9ad]/20 rounded-xl mt-10 animate-pulse" />
          </div>
        </>
      ) : (
        <>
          {error ? (
            <>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 flex justify-center items-center -z-10">
                  <div className="w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full"></div>
                </div>

                <div
                  className="w-16 h-16 rounded-full bg-red-500/10 
      flex items-center justify-center mb-6
      border border-red-400/20"
                >
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold">
                  Что-то пошло не так
                </h2>

                <p className="text-gray-400 mt-3 max-w-sm">
                  Не удалось загрузить варианты. Попробуйте снова.
                </p>
                <button
                  className="mt-6 px-6 py-2 border border-red-400/30 
      text-red-300 rounded-lg 
      hover:bg-red-500/10 transition"
                >
                  Повторить
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10">
                <div className="w-[500px] h-[500px] bg-yellow-500/10 blur-[160px] rounded-full"></div>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10">
                <div className="w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full"></div>
              </div>

              <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Выбери своё настроение
                </h2>

                <p className="text-gray-400 mt-3 text-2xl">
                  Phantom X Wireless в трёх стилях
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <ProductCard
                      product={product}
                      key={product.id}
                      setTarget={setTarget}
                      target={target}
                    />
                  ))}
                </div>

                {cart.find((p) => p.id === target) ? (
                  <div className="mt-10 flex items-center justify-center gap-4">
                    {/* decrease */}
                    <button
                      onClick={() => decreaseCount(target)}
                      className="w-10 h-10 flex items-center justify-center 
        rounded-lg border border-white/10 
        bg-white/5 hover:bg-white/10 transition"
                    >
                      −
                    </button>

                    {/* count */}
                    <span className="min-w-[40px] text-center text-[#fef9ad] font-medium">
                      {cart.find((p) => p.id === target).count}
                    </span>

                    {/* increase */}
                    <button
                      onClick={() => increaseCount(target)}
                      className="w-10 h-10 flex items-center justify-center 
        rounded-lg border border-white/10 
        bg-white/5 hover:bg-white/10 transition"
                    >
                      +
                    </button>

                    {/* remove */}
                    <button
                      onClick={() => removeFromCart(target)}
                      className="ml-4 text-sm text-red-400 hover:text-red-300 transition"
                    >
                      Удалить
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      addToCart(products.find((p) => p.id === target));
                    }}
                    className="mt-10 px-8 py-3 bg-[#fef9ad] text-black rounded-xl 
      font-medium hover:scale-105 transition disabled:opacity-[0.5]"
                    disabled={target ? false : true}
                  >
                    В корзину
                  </button>
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
