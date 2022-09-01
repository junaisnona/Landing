import React from "react";
import Image, { StaticImageData } from "next/image";
import background from "../../assets/background.png";
import sourcing from "../../assets/sourcing_ease.png";
import tracking from "../../assets/tracking_order.png";
import quality from "../../assets/quality.png";

function ShapeBox({ image }: { image: StaticImageData }) {
  return (
    <div className="w-full">
      <div
        className="relative flex justify-center items-center lg:h-[600px]"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "720px 420px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="w-[80%] h-[80%] grid content-end bg-blur-color backdrop-blur-sm rounded-lg">
          <Image
            src={image}
            alt={image.toString()}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

function DescriptionBox({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="w-[80%]">
      <h4 className="text-3xl leading-[6rem]">{title}</h4>
      <p className="text-xl text-gray-600">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <div className="w-full lg:w-[95%] mx-auto">
      <div className="grid grid-rows-6 grid-cols-1 lg:grid-rows-3 lg:grid-cols-2 gap-x-8">
        <div>
          <ShapeBox image={sourcing} />
        </div>
        <div className="flex items-center justify-center">
          <DescriptionBox
            title={"Ease of Apparels & Linen Sourcing"}
            desc={
              "NONA Lifestyle ensures an agile process between customers, designers, merchandisers and production base. Real time inventory and capacity mapping leads to hassle free procurement of apparels and linens at the customer end"
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <DescriptionBox
            title={"Live Order Tracking"}
            desc={
              "Watch you running orders getting manufactured in a live environment from the comfort of your office, home or wherever you are thus ensuring transparency & credibility in the system."
            }
          />
        </div>
        <div>
          <ShapeBox image={tracking} />
        </div>
        <div>
          <ShapeBox image={quality} />
        </div>
        <div className="flex items-center justify-center">
          <DescriptionBox
            title={"Quality and Fast Deliveries"}
            desc={
              "Welcome to the base of audited suppliers with state-of-the-art facilities known for quality products. Our virtual supply chain tool ensures checks and balances at our supplier end leading to quality and timely supply."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
