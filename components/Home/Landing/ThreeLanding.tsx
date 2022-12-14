import React, { useEffect, useState } from "react";
import One from "./One";
import Three from "./Three";
import Two from "./Two";

function ThreeLanding({isVisible} : {isVisible: boolean}) {

  return (
    <div>
      <div className="w-full grid grid-cols-3">
        <div>
          <One isVisible={isVisible}/>
        </div>
        <div>
          <Two isVisible={isVisible}/>
        </div>
        <div>
          <Three isVisible={isVisible}/>
        </div>
      </div>
    </div>
  );
}

export default ThreeLanding;
