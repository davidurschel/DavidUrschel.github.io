import React from "react";
import styles from "../style";

export default function Home() {

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="max-w-[70%] mx-auto p-6 rounded-lg mt-[200px] bg-gradient-to-r from-pink-400 via-blue-500 to-green-600 shadow-md">
          <h1 className="text-3xl text-center font-extrabold text-white">
            Welcome to the homepage!
          </h1>
      </div>
    </div>
  )
}
