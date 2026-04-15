import React from "react";
import mouseUnder from "../assets/images/mouseUnder.png";
export default function PerformanceSection() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="absolute right-[30%] top-1/2 -translate-y-1/2 -z-10">
        <div className="w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 w-full flex items-center gap-20">
        <div>
          <p className="text-xs tracking-widest text-gray-500 mb-2">
            02 / PERFORMANCE
          </p>

          <h2 className="text-4xl font-semibold">Максимальная точность</h2>

          <p className="mt-4 text-gray-400 max-w-sm text-xl">
            Сенсор нового поколения с точностью до
            <span className="text-[#fef9ad]"> 26 000 DPI</span>
            обеспечивает полный контроль в любой игре
          </p>

          <div className="mt-6 flex gap-8">
            <div>
              <p className="text-[#fef9ad] text-xl font-semibold">26K</p>
              <p className="text-xs text-gray-500">DPI</p>
            </div>

            <div>
              <p className="text-[#fef9ad] text-xl font-semibold">650 IPS</p>
              <p className="text-xs text-gray-500">Tracking</p>
            </div>

            <div>
              <p className="text-[#fef9ad] text-xl font-semibold">1 ms</p>
              <p className="text-xs text-gray-500">Latency</p>
            </div>
          </div>
        </div>

        <div className="w-2/3 overflow-hidden relative">
          <div className="absolute left-1/2 top-[45%] -translate-y-[90%] -translate-x-1/2 z-5">
            <div
              className="w-[100px] h-[100px] bg-red-500/60 blur-[10px] rounded-full 
  animate-[sensorPulse_2s_ease-in-out_infinite]"
            ></div>
          </div>
          <img
            src={mouseUnder}
            className="w-full h-full object-cover scale-100"
          />
        </div>
      </div>
    </section>
  );
}
