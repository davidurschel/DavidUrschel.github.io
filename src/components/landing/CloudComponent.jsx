import React from "react";
import { cloud } from "../../assets";

const CloudComponent = () => {
  return (
    <div className="w-full flex">
      <div className="lg:w-1/3"></div>
      <a href="/about" className="lg:w-2/5 sm:w-2/3 w-full">
        <div className="flex justify-center items-center w-full">
          <img width={"100%"} src={cloud} className="" />
          <div className={"absolute"}>
            <div className="flex w-full text-center lg:text-5xl sm:text-4xl text-3xl font-bold font-poppins pointer hover:underline">
              This!
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CloudComponent;
