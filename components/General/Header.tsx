import React from "react";
import Image from "next/image";
import logo from "../../assets/logo_dark.png";

function Header() {
  return (
    <header>
      <nav className="w-full bg-primary-color flex justify-between items-center py-5">
        <div className="w-60 h-7">
          <Image
            src={logo}
            alt="logo"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div>
          <button className="font-semibold text-white py-1 px-8 border border-gray-300 hover:border-white border-[1px] rounded-md mr-12">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
