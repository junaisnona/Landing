import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../../assets/1.jpg";
import Content from "./Content";

interface Props {
  isVisible?: boolean;
  singleSwiper?: boolean;
}

function One({ isVisible, singleSwiper }: Props) {
  return (
    <div className="relative mx-auto lg:mx-0 sm:w-[500px] lg:w-full h-[91.2vh]">
      <Image src={image1} alt="image1" layout="fill" objectFit="cover" />
      <div
        className={
          isVisible
            ? "opacity-100 transition-opacity delay-75 duration-1000 ease-in"
            : singleSwiper
            ? "opacity-100"
            : "opacity-0"
        }
      >
        <Content title="Uniforms" desc="Smart Design for Smart Services." />
      </div>
    </div>
  );
}

export default One;
