import React, { useEffect, useState } from "react";
import Image from "next/image";
import image2 from "../../../assets/2.jpg";
import Content from "./Content";

interface Props {
  isVisible?: boolean;
  singleSwiper?: boolean;
}

function Two({ isVisible, singleSwiper }: Props) {

  return (
    <div className="relative mx-auto lg:mx-0 sm:w-[500px] lg:w-full h-[91.2vh]">
      <Image src={image2} alt="image2" layout="fill" objectFit="cover" />
      <div
        className={
          isVisible
            ? "opacity-100 transition-opacity delay-1000 duration-1000 ease-in"
            : singleSwiper ? "opacity-100" : "opacity-0"
        }
      >
        <Content title="Soft Furnishing" desc="Freshness, Optimism, Honesty" />
      </div>
    </div>
  );
}

export default Two;
