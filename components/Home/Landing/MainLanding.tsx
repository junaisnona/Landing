import React from "react";
import Image from "next/image";
import desktopImg from "../../../assets/desktop.png";

function MainLanding() {
  return (
    <div className="w-full h-[91.2vh] bg-primary-color">
      <div className="relative w-full h-[100%] flex flex-col justify-between items-center">
        <div className="w-full px-4 flex flex-col justify-center items-center text-center">
          <div className="w-4/5 md:w-full ">
            <h2 className="mt-16 md:mt-24 text-[2.5rem] md:text-5xl text-white font-light leading-tight">
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
            <button className="border py-2 px-14 rounded-lg bg-white text-primary-color font-normal text-xl outline-none">
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-[96vw] h-[660px] mx-auto flex justify-center items-end md:mt-14 lg:mt-0">
          <div className="relative xs:w-[95%] lg:w-[50%] xs:h-full">
            <Image
              src={desktopImg}
              objectPosition="50% 97%"
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
