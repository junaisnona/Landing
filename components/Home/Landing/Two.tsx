import React, { useEffect, useState } from "react";
import Image from "next/image";
import image2 from "../../../assets/2.jpg";
import Content from "./Content";

function Two({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative h-[92.2vh]">
      <Image src={image2} alt="image2" layout="fill" />
      <div
        className={
          isVisible
            ? "opacity-100 transition-opacity delay-1000 duration-1000 ease-in"
            : "opacity-0"
        }
      >
        <Content title="Soft Furnishing" desc="Freshness, Optimism, Honesty" />
      </div>
    </div>
  );
}

export default Two;
