import React, { useState } from "react";

function ContactForm() {
  return (
    <div>
      <form className="w-full md:w-11/12 text-left h-[350px] flex flex-col justify-evenly">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <label className="w-full md:w-1/2 text-left xs:mb-1 md:mb-0 ">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 w-full md:w-[97%] p-2.5 rounded-md"
            />
          </label>
          <label className="w-full md:w-1/2 text-right xs:mt-1 md:mt-0">
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-400 w-full md:w-[97%] p-2.5 rounded-md"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="number"
              placeholder="+91"
              className="border border-gray-400 w-full p-2.5 rounded-md"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-400 w-full p-2.5 rounded-md"
            />
          </label>
        </div>
        <div>
          <label>
            <select className="border border-gray-400 w-full p-2.5 rounded-md">
              <option>Business</option>
              <option>Manufacturer</option>
              <option>Vendor</option>
            </select>
          </label>
        </div>
        <div className="text-center">
          <button className="bg-primary-color text-white py-2 md:py-3 px-[20%] text-lg md:text-xl font-light rounded-md">
            Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
