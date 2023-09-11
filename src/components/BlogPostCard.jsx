import React from "react";

const BlogPostCard = ({ title, snippet, destination, date }) => {
  return (
    <div className="flex justify-center content-center">
      <div className="flex flex-col border-2 bg-primary hover:bg-gray-100 cursor-pointer rounded-lg hover:shadow-xl shadow-sm sm:h-[530px] h-[380px] sm:min-w-[440px] sm:max-w-[440px] w-[270px] p-4">
        <div className="w-full sm:h-[400px] h-[250px] content-center mb-2">
          <img
            className="hover:brightness-105 mx-auto aspect-square sm:w-[400px] w-[250px] sm:h-[400px] h-[250px] rounded-xl"
            src={destination.icon}
            alt={destination.id}
          ></img>
        </div>
        <div className="text-xl text-left font-semibold overflow-hidden border-b-2 truncate whitespace-nowrap">
          {title}
        </div>
        <div className="flex flex-col">
          <div className="text-gray-400 overflow-hidden truncate mb-2">{date}</div>
          <div className="text-gray-600 overflow-hidden truncate">
            {snippet}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
