import React from "react";
import Image from "next/image";
import desktopImg from "../../../assets/desktop.png";

function MainLanding() {
  return (
    <div className="w-full h-[92.2vh] bg-primary-color">
      <div className="relative h-[100%]">
        <div className="w-full px-4 flex flex-col justify-center items-center text-center">
          <div className="md:w-full sm:w-4/5">
            <h2 className="mt-24 text-4xl md:text-5xl text-white font-light leading-none">
              A managed marketplace to simplify sourcing and supply chain
            </h2>
          </div>
          <div className="mt-8">
            <h5 className="text-[16px] text-slate-300">
              Customized - Work & Safety Wear | White Labelling | Soft
              Furnishing
            </h5>
          </div>
          <div className="mt-8">
            <button className="border py-4 px-16 rounded-lg bg-white text-primary-color font-medium text-xl outline-none">
              Sign Up
            </button>
          </div>
        </div>
        <div className="relative top-14 w-[96vw] mx-auto h-[55%] flex justify-center items-end">
          <div className="relative md:w-[50%] md:h-[100%]">
            <Image
              src={desktopImg}
              alt="Dashboard screen"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      </div>
  );
}

export default MainLanding;
