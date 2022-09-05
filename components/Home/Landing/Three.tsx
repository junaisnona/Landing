import React, { useEffect, useState } from "react";
import Image from "next/image";
import image3 from "../../../assets/3.jpg";
import Content from "./Content";

interface Props {
  isVisible?: boolean;
  singleSwiper?: boolean;
}

function Three({ isVisible, singleSwiper }: Props) {
  return (
    <div className="relative mx-auto lg:mx-0 w-full sm:w-[500px] lg:w-full h-[91.2vh]">
      <Image src={image3} alt="image3" layout="fill" objectFit="cover" />
      <div
        className={
          isVisible
            ? "opacity-100 transition-opacity delay-2000 duration-1000 ease-in"
            : singleSwiper
            ? "opacity-100"
            : "opacity-0"
        }
      >
        <Content
          title="White Labelling"
          desc="Productivity centric fabric tailoring"
        />
      </div>
    </div>
  );
}

export default Three;
