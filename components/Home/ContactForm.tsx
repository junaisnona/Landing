import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="text-left h-[350px] flex flex-col justify-evenly">
        <div>
          <label>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 w-1/2 p-2.5 rounded-md"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-400 w-1/2 p-2.5 rounded-md"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
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
          <button className="bg-primary-color text-white py-4 px-52 rounded-md text-xl">
            Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
