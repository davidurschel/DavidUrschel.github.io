import React from "react";
import { cloudSky, hexBackground, ocean } from "../../assets";
import TiltComponent from "./TiltComponent";
import { socialMediaWhite } from "../../constants";

const LayoutChildren = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="bg-gradient-to-b from-secondary to-landingBG w-full h-[400px] justify-center content-center flex">
        <div className="my-auto text-center content-center">
          <div className="md:text-7xl text-5xl font-bold mt-16 mb-4 text-footer">
            Welcome To DavidUrschel.com!
          </div>
          <div className="md:text-4xl text-2xl text-fourth">
            My Computer Engineering Journey Documented
          </div>
        </div>
      </div>

      <img width={"100%"} src={cloudSky} className={""} />

      <div className="sm:pt-32 py-12 bg-gradient-to-b from-bottomCloud to-topHex w-full flex flex-wrap sm:gap-32 gap-16 justify-center items-center">
        <div className="">
          <TiltComponent
            link="/about"
            linkTitle="About Me ->"
            body="Step into my world and explore the journey that brought me here – Unveiling the Layers, Unearthing the Passion, and Embracing the Adventure of Me."
          ></TiltComponent>
        </div>
        <div className="">
          <TiltComponent
            link="/experience"
            linkTitle="Experience ->"
            body="Delve into the diverse experiences that have molded my career, encompassing work, volunteerism, education, and beyond."
          ></TiltComponent>
        </div>
      </div>

      <div className="bg-gradient-to-b from-topHex to-bottomHex">
        <img width={"100%"} src={hexBackground} className={""} />
      </div>

      <div className="bg-gradient-to-b from-bottomHex from-30% to-black w-full sm:py-32 py-12 w-full flex flex-wrap sm:gap-32 gap-16 justify-center items-center">
        <div className="">
          <TiltComponent
            link="/projects"
            linkTitle="Projects ->"
            body="Embark on a personal journey of discovery: Explore the unique projects that showcase my passion, commitment, and dedication in turning dreams into reality!"
          ></TiltComponent>
        </div>
        <div className="">
          <TiltComponent
            link="/contact"
            linkTitle="Contact Me ->"
            body="Don't hesitate – reach out and contact me today to discover how I can help to achieve your goals and assist in making your visions into reality."
          ></TiltComponent>
        </div>
      </div>
      <img width={"100%"} src={ocean} className={""} />
      <div className="pb-12 w-full flex justify-around items-center md:flex-row flex-col pt-6 bg-black">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-primary">
          Ⓒ 2023 David Urschel. All Rights Reserved.
        </p>

        <div className="flex flex-row justify-center mb-4">
          {socialMediaWhite.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMediaWhite.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutChildren;
