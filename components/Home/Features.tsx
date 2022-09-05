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
        className="relative flex justify-center items-center mx-auto xs:w-full xs:h-[400px] sm:w-[480px] lg:h-[600px] lg:w-full"
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
    <div className="w-[80%] my-12 lg:my-0">
      <h4 className="text-2xl lg:text-3xl pb-9">{title}</h4>
      <p className="text-base lg:text-xl text-gray-600">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <div className="w-full 2xl:w-[95%] mx-auto">
      <div className="grid  grid-cols-1 auto-rows-min lg:grid-rows-3 lg:grid-cols-2 2xl:gap-x-8">
        <div className="order-1">
          <ShapeBox image={sourcing} />
        </div>
        <div className="flex items-center justify-center order-2">
          <DescriptionBox
            title={"Ease of Apparels & Linen Sourcing"}
            desc={
              "NONA Lifestyle ensures an agile process between customers, designers, merchandisers and production base. Real time inventory and capacity mapping leads to hassle free procurement of apparels and linens at the customer end"
            }
          />
        </div>
        <div className="flex items-center justify-center order-4 lg:order-3">
          <DescriptionBox
            title={"Live Order Tracking"}
            desc={
              "Watch you running orders getting manufactured in a live environment from the comfort of your office, home or wherever you are thus ensuring transparency & credibility in the system."
            }
          />
        </div>
        <div className="order-3 lg:order-4">
          <ShapeBox image={tracking} />
        </div>
        <div className="order-5">
          <ShapeBox image={quality} />
        </div>
        <div className="flex items-center justify-center order-6">
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
