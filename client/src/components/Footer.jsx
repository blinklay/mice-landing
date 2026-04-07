import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-lg">Neon Store</h3>
            <p className="text-gray-400 text-sm mt-2">
              Минимализм. Скорость. Точность.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Navigation</p>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#fef9ad] cursor-pointer transition">
                Главная
              </li>
              <li className="hover:text-[#fef9ad] cursor-pointer transition">
                Особенности
              </li>
              <li className="hover:text-[#fef9ad] cursor-pointer transition">
                Производительность
              </li>
              <li className="hover:text-[#fef9ad] cursor-pointer transition">
                Купить
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-3">Info</p>

            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Free Shipping</li>
              <li className="text-gray-400">2 Year Warranty</li>
              <li className="text-gray-400">Support 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Neon Store. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-500 text-sm">
            <span className="hover:text-[#fef9ad] cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-[#fef9ad] cursor-pointer transition">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
