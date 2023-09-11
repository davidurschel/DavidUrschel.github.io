import React from "react";
import styles from "../style";

export default function Features() {
  const loremIpsumData = [
    { date: "2023-08-18", text: "Lorem ipsum dolor sit amet" },
    { date: "2023-08-19", text: "Consectetur adipiscing elit" },
    { date: "2023-08-20", text: "Sed do eiusmod tempor incididunt" },
    // Add more data as needed
  ];

  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto">
        <div
          className={`flex-1 flex ${styles.flexCenter} min-h-screen md:my-0 my-10 relative w-full`}
        >
          <div className="absolute right-0 top-0 mt-10 mr-4 flex flex-col text-right">
            {loremIpsumData.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-xs font-semibold">{item.date}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
