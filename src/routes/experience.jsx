import React from "react";
import styles from "../style";
import {
  clubs,
  education,
  experience,
  volunteering,
} from "../constants/experience";
import { ExperienceCard } from "../components";
import { placeholderImage } from "../constants";

const Experience = () => {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center">
      <div className={`${styles.heading2}`}>Experience</div>
      <div className="max-w-md mx-auto">
        <div className={`flex flex-col ${styles.flexCenter} relative w-full`}>
          {experience.map((item, index) => (
            <div key={index} className="mb-8">
              <ExperienceCard
                title={item.title}
                body={item.body}
                date={item.date}
                role={item.role}
                destination={item.image ? item.image : placeholderImage.icon}
              />
            </div>
          ))}
        </div>
      </div>
      {volunteering.length > 0 && (
        <>
          <div className={`${styles.heading2}`}>Volunteering</div>
          <div className="max-w-md mx-auto">
            <div
              className={`flex flex-col ${styles.flexCenter} relative w-full`}
            >
              {volunteering.map((item, index) => (
                <div key={index} className="mb-8">
                  <ExperienceCard
                    title={item.title}
                    body={item.body}
                    date={item.date}
                    role={item.role}
                    destination={
                      item.image ? item.image : placeholderImage.icon
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {education.length > 0 && (
        <>
          <div className={`${styles.heading2}`}>Education</div>
          <div className="max-w-md mx-auto">
            <div
              className={`flex flex-col ${styles.flexCenter} relative w-full`}
            >
              {education.map((item, index) => (
                <div key={index} className="mb-8">
                  <ExperienceCard
                    title={item.title}
                    body={item.body}
                    date={item.date}
                    role={item.role}
                    destination={
                      item.image ? item.image : placeholderImage.icon
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {clubs.length > 0 && (
        <>
          <div className={`${styles.heading2}`}>Clubs</div>
          <div className="max-w-md mx-auto">
            <div
              className={`flex flex-col ${styles.flexCenter} relative w-full`}
            >
              {clubs.map((item, index) => (
                <div key={index} className="mb-8">
                  <ExperienceCard
                    title={item.title}
                    body={item.body}
                    date={item.date}
                    role={item.role}
                    destination={
                      item.image ? item.image : placeholderImage.icon
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Experience;
