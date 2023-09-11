import React from "react";
import Tilt from "react-parallax-tilt";

const ExperienceCard = ({ title, body, role, destination, date }) => {
  return (
    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={10} perspective={1000}>
      <div className="cursor-default flex flex-col justify-center bg-primary content-center rounded-lg shadow-lg hover:bg-gray-100 border-4 p-4 sm:w-[700px] w-full">
        <div className="flex flex-row">
          <img
            className="my-auto w-[80px] h-[80px] rounded-lg"
            src={destination}
            alt={"No Image Found"}
          ></img>
          <div className="ml-4 w-full align-bottom mt-2">
            <h2 className="sm:text-2xl text-xl font-semibold overflow-hidden">{role}</h2>
            <div className="sm:block hidden">
              <div className="flex sm:border-b-2 justify-between">
                <p className="text-gray-800 overflow-hidden -mb-1 font-bold">
                  {title}
                </p>
                <p className="text-gray-400 overflow-hidden -mb-1">{date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b-2 align-bottom flex-col sm:hidden block mt-1">
          <p className="text-gray-800 overflow-hidden font-bold -mb-0.5">
            {title}
          </p>
          <p className="text-gray-400 overflow-hidden -mb-1">{date}</p>
        </div>
        <div className="w-[80%] mx-[10%] mb-2">
          <ul className="mt-2 list-disc text-justify">
            {body.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

export default ExperienceCard;
