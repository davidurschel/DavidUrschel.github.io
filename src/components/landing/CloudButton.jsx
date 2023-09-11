import React from "react";
import { cloud } from "../../assets";

const CloudButton = ({ link, message, end }) => {
  return (
    <a href={link}>
      <div className="flex w-full text-center lg:text-5xl sm:text-4xl text-3xl font-bold font-poppins pointer hover:underline">
        {message}
      </div>
    </a>
  );
};

export default CloudButton;
