import React from "react";
import mouseFull from "../assets/images/mouseFull.png";
import mouseLight from "../assets/images/mouseLight.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
export default function FeautersSection() {
  return (
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
  );
}
