import React from "react";

function Content({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="absolute bottom-0 w-full h-3/5 bg-black opacity-60 flex justify-center items-center">
      <div className="text-white text-center h-1/3 flex flex-col justify-around">
        <h2 className="text-5xl font-light">{title}</h2>
        <p className="text-xl font-light">{desc}</p>
      </div>
    </div>
  );
}

export default Content;
