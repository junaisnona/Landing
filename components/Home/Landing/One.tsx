import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../../assets/1.jpg";
import Content from "./Content";

function One({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative h-[92.2vh]">
      <Image src={image1} alt="image1" layout="fill" />
        <div
          className={
            isVisible
              ? "opacity-100 transition-opacity delay-75 duration-1000 ease-in"
              : "opacity-0"
          }
        >
          <Content title="Uniforms" desc="Smart Design for Smart Services." />
        </div>
    </div>
  );
}

export default One;
