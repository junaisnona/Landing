import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-[300px] flex justify-center items-center px-4">
      <div className="text-left">
        <h3 className="text-xl md:text-2xl font-normal">NONA Lifestyle</h3>
        <div className="xs:text-xs md:text-base font-normal text-gray-500 leading-6">
          <p>© 2010 — 2022</p>
          <p>
            INDIA: FF03, 03A MGF Megacity Mall, Sector 28, Gurugram, Haryana
            122002
          </p>
          <p>
            UAE: 2310, 23rd floor, Regus Business Centre, Damac Smart heights,
            Barsha Heights, Dubai
          </p>
          <p>
            <Link href="#">
              <a className="text-blue-600">Terms and Conditon - </a>
            </Link>
            <Link href="#">
              <a className="text-blue-600">Privacy Policy</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
