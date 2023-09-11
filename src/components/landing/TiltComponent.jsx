import React from "react";
import Tilt from "react-parallax-tilt";
import "./TiltComponent.css";

const TiltComponent = ({ link, linkTitle, body }) => {
  return (
    <div className="tiltContainer">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
        <div className="rgb">
          <div className={`z-50 tiltComponent rounded-[25px] bg-card flex flex-col group transition-all duration-700 ease-in-out p-8 sm:h-[300px] sm:w-[700px] w-[96%] mx-[2%] sm:mx-0`}>
            <div className="mx-auto text-center flex">
              <a
                class="group transition-all duration-300 ease-in-out z-50"
                href={link}
              >
                <span className="text-bold text-cardTitle md:text-5xl text-4xl font-bold font-poppins bg-left-bottom bg-gradient-to-r from-cardTitle to-cardTitle bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-1000 ease-out">
                  {linkTitle}
                </span>
              </a>
            </div>
            <div className="text-cardBody sm:mt-8 mt-4 sm:text-3xl text-2xl">
              {body}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default TiltComponent;
