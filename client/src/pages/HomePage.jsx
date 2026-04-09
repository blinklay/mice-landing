import React from "react";
import mousePic from "../assets/images/mouse.png";
import mouseWhitePic from "../assets/images/mouseWhite.png";
import mouseBluePic from "../assets/images/mouseBlue.png";
import mouseSide from "../assets/images/mouseSide.png";
import mouseUnder from "../assets/images/mouseUnder.png";
import mouseFull from "../assets/images/mouseFull.png";
import mouseLight from "../assets/images/mouseLight.png";
import adapterPic from "../assets/images/adapter.png";
import Footer from "../components/Footer";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function HomePage() {
  return (
    <>
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
      <section className="min-h-screen flex items-center ">
        <div className="max-w-6xl mx-auto px-4 flex gap-10 items-center relative justify-start gap-20 ">
          <div className="w-2/3 h-full">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={mouseLight} />}
              itemTwo={<ReactCompareSliderImage src={mouseFull} />}
            />
          </div>
          <div className="absolute left-[40%] top-1/2 -translate-y-1/2 -z-10">
            <div className="w-[400px] h-[400px] bg-[#fef9ad]/10 blur-[120px] rounded-full"></div>
          </div>
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-2">
              01 / FEATURES
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Ультралёгкая конструкция
            </h2>
            <p className="mt-4 text-gray-400 max-w-sm text-xl">
              Перфорация снижает вес до{" "}
              <span className="text-[#fef9ad]">49 г</span> без потери прочности
            </p>
          </div>
        </div>
      </section>

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

      <section className="min-h-screen flex items-center justify-center text-center relative">
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
            <div className="group cursor-pointer">
              <div
                className="bg-white/5 border border-white/10 rounded-xl p-6 
          hover:border-[#fef9ad]/40 transition"
              >
                <img
                  src={mousePic}
                  className="w-full h-48 object-contain mx-auto"
                />

                <p className="mt-4 text-sm text-gray-400">Classic</p>
                <p className="text-[#fef9ad] font-medium">Black</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div
                className="bg-white/5 border border-white/10 rounded-xl p-6 
          hover:border-[#fef9ad]/40 transition"
              >
                <img
                  src={mouseWhitePic}
                  className="w-full h-48 object-contain mx-auto"
                />

                <p className="mt-4 text-sm text-gray-400">Clean</p>
                <p className="text-[#fef9ad] font-medium">White</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div
                className="bg-white/5 border border-white/10 rounded-xl p-6 
          hover:border-[#fef9ad]/40 transition"
              >
                <img
                  src={mouseBluePic}
                  className="w-full h-48 object-contain mx-auto"
                />

                <p className="mt-4 text-sm text-gray-400">Cold</p>
                <p className="text-[#fef9ad] font-medium">Ice Blue</p>
              </div>
            </div>
          </div>

          <button
            className="mt-10 px-8 py-3 bg-[#fef9ad] text-black rounded-xl 
      font-medium hover:scale-105 transition"
          >
            Купить
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
