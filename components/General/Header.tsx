import React from "react";
import Image from "next/image";
import logo from "../../assets/logo_dark.png";

function Header() {
  return (
    <header className="sticky z-10 top-0">
      <nav className="w-full bg-primary-color flex justify-between items-center py-3 xl:py-5">
        <div className="w-52 xl:w-60 h-5">
          <Image
            src={logo}
            alt="logo"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div>
          <button className="font-normal text-[17px] text-white py-[2px] px-9 mr-4 lg:mr-10 border border-[1px] border-slate-300 hover:border-white outline-none shadow-none rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
