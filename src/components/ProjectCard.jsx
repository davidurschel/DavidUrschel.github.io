import React from "react";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  title,
  body,
  date,
  images,
  sourceLink,
  demonstrationLink,
}) => {
  return (
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={5} perspective={1000}>
      <div className="flex flex-col justify-center bg-primary content-center rounded-lg shadow-lg hover:bg-gray-100 border-2 p-4 sm:w-[700px] w-[100%]">
        <div className="">
          <div className="sm:block hidden">
            <div className="flex justify-between border-b-2 mb-1">
              <h2 className="text-xl font-semibold  overflow-hidden ">
                {title}
              </h2>
              <p className="text-gray-600 overflow-hidden mt-1">{date}</p>
            </div>
          </div>
          <div className="sm:hidden block">
            <div className="flex flex-col border-b-2 mb-1">
              <h2 className="text-xl font-semibold  overflow-hidden ">
                {title}
              </h2>
              <p className="text-gray-600 overflow-hidden mt-1">{date}</p>
            </div>
          </div>
          <p className="text-gray-800 overflow-hidden text-justify leading-7">
            {body}
          </p>
        </div>
        <div className="h-full flex flex-wrap gap-4">
          {images.map((img) => (
            <img
              className="align-center w-[80px] h-[80px] rounded-lg"
              src={img}
              alt={"No Image Found"}
            ></img>
          ))}
        </div>
        {sourceLink && (<a href={sourceLink} target="_blank"><p className="underline mt-4 text-gray-400 text-lg font-poppins font-bold">{"Check out the source code here ->"}</p></a>)}
      </div>
    </Tilt>
  );
};

export default ProjectCard;
