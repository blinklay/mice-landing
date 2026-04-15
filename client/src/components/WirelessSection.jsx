import React from "react";

import adapterPic from "../assets/images/adapter.png";

export default function WirelessSection() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10">
        <div className="w-[500px] h-[500px] bg-yellow-500/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="absolute right-[20%] top-1/2 -translate-y-1/2 -z-10">
        <div className="w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full flex items-center gap-20">
        <img src={adapterPic} className="w-2/3" />

        <div>
          <p className="text-xs tracking-widest text-gray-500 mb-2">
            03 / WIRELESS
          </p>

          <h2 className="text-4xl font-semibold">Свобода без задержек</h2>

          <p className="text-2xl mt-4 text-gray-400 max-w-sm">
            Беспроводное соединение с откликом
            <span className="text-[#fef9ad]"> 1 мс</span>
            обеспечивает стабильную игру без лагов
          </p>

          <div className="mt-6 flex gap-8">
            <div>
              <p className="text-[#fef9ad] text-xl font-semibold">1 ms</p>
              <p className="text-xs text-gray-500">Latency</p>
            </div>

            <div>
              <p className="text-[#fef9ad] text-xl font-semibold">2.4 GHz</p>
              <p className="text-xs text-gray-500">Wireless</p>
            </div>

            <div>
              <p className="text-[#fef9ad] text-xl font-semibold">70h</p>
              <p className="text-xs text-gray-500">Battery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
