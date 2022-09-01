import React, { useEffect, useState } from "react";
import Image from "next/image";
import image3 from "../../../assets/3.jpg";
import Content from "./Content";

function Three({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="relative h-[92.2vh]">
      <Image src={image3} alt="image3" layout="fill" />
      <div
        className={
          isVisible
            ? "opacity-100 transition-opacity delay-2000 duration-1000 ease-in"
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
