import React from "react";

export default function Error_404() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="max-w-[70%] mx-auto p-6 rounded-lg mt-[200px] shadow-md">
          <h1 className="text-3xl text-center font-extrabold text-gray-900">
            Whoops! This page doesn't seem to exist.
          </h1>
      </div>
    </div>
  );
}