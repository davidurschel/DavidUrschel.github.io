import React from "react";
import styles from "../style";
import { ProfilePicture } from "../assets";

export default function About() {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center">
      <div className={`${styles.heading2}`}>About Me</div>
      <div className="flex w-full place-content-evenly">
        <div className="mb-4">
          <img
            src={ProfilePicture}
            alt="Profile Picture"
            className="mx-auto h-64 w-64 rounded-full shadow-md"
          />
        </div>
      </div>
      <div className="sm:w-[700px] max-w-[80%] text-justify">
        <div className="mb-4">
          <p>
            Greetings and welcome to my website! My name is <b>David Urschel</b>{" "}
            and I am a Computer Engineering student at the{" "}
            <b>University of Alberta</b>. As a Computer Engineering student, my
            path has been marked by curiosity, exploration, and a thirst for
            knowledge. I've delved into circuit designing, honed my skills in
            DevOps, and worked to build web applications.
          </p>
          <p>
            At the core of my academic pursuits lies a passion for innovation,
            simplification, and the process of design. With every line of code I
            write and every circuit I design, I am training my skills to
            eventually be able to contribute to the betterment of the lives of
            millions or even billions of people around the world.
          </p>
          <div className="flex sm:flex-row flex-col w-full">
            <div className="flex flex-col sm:w-1/2">
              <div className="mb-4">
                <h3>What I'm good at: </h3>
                <ul className="list-disc ml-8">
                  <li>Leadership</li>
                  <li>Collaboration</li>
                  <li>Communication</li>
                  <li>Time Management</li>
                  <li>Adaptability</li>
                  <li>Creativity</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3>Various software I have utilized:</h3>
                <ul className="list-disc ml-8">
                  <li>Notion, Trello</li>
                  <li>Google Calendar</li>
                  <li>Slack, Discord, Zoom, Teams</li>
                  <li>Microsoft Office</li>
                  <li>Excel, Word, Powerpoint</li>
                  <li>Github, Git</li>
                  <li>Supabase, AWS, Azure</li>
                  <li>NextJS</li>
                  <li>NodeJS</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3>Things I do for fun: </h3>
                <ul className="list-disc ml-8">
                  <li>Rock Climbing</li>
                  <li>Baking</li>
                  <li>Tutoring</li>
                  <li>Strategy Games</li>
                  <li>Video Game Development</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4">
                <h3>I am interested about: </h3>
                <ul className="list-disc ml-8">
                  <li>Automation and Robotics</li>
                  <li>Digital Logic Design</li>
                  <li>Chip Design and Fabrication</li>
                  <li>Computer Architecture</li>
                  <li>Digital Signals</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3>Languages I have learned: </h3>
                <ul className="list-disc ml-8">
                  <li>MATLAB</li>
                  <li>Python </li>
                  <li>C++, C</li>
                  <li>Java</li>
                  <li>Unity Engine, C#</li>
                  <li>React</li>
                  <li>Javascript, Typescript</li>
                  <li>Jest</li>
                  <li>HTML, CSS</li>
                  <li>SQL</li>
                  <li>ARM Assembly Language</li>
                  <li>VHDL</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3>My goals: </h3>
                <ul className="list-disc ml-8">
                  <li>Make my own path</li>
                  <li>Embrace continuous growth</li>
                  <li>Inspire and empower others</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-full text-center mb-4">Now check out my:</h1>
        <a href="/#/experience" className="">
          <h1 className="text-center hover:underline font-poppins p-4 bg-gray-200 hover:bg-neutral-200 rounded-full mb-4">{"Experience ->"}</h1>
        </a>
        <a href="/#/projects" className="">
          <h1 className="text-center hover:underline font-poppins p-4 bg-gray-200 hover:bg-neutral-200 rounded-full mb-4">{"Projects ->"}</h1>
        </a>
        <a href="/#/blog" className="">
          <h1 className="text-center hover:underline font-poppins p-4 bg-gray-200 hover:bg-neutral-200 rounded-full mb-4">{"Blog ->"}</h1>
        </a>
        <a href="/#/contact" className="">
          <h1 className="text-center hover:underline font-poppins p-4 bg-gray-200 hover:bg-neutral-200 rounded-full">{"Contact ->"}</h1>
        </a>
      </div>
    </div>
  );
}
