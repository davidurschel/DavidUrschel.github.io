import React from "react";
import styles from "../style";
import { ProjectCard } from "../components";
import { placeholderImage } from "../constants";
import { projects } from "../constants/projects";

export default function Projects() {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center">
      <div className={`${styles.heading2}`}>Projects</div>
      <div className="max-w-md mx-auto">
        <div
          className={`flex ${styles.flexCenter} relative w-full`}
        >
          <div className="">
            {projects.map((item, index) => (
              <div key={index} className="mb-8">
                <ProjectCard
                  title={item.title}
                  body={item.body}
                  date={item.date}
                  images={item.images}
                  sourceLink={item.sourceLink} 
                  demonstrationLink={item.demonstrationLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
