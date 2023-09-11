import React from "react";
import BlogPostCard from "../components/BlogPostCard";
import styles from "../style";

export default function Blog() {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center">
      <div className={`${styles.heading2}`}>Blog Posts</div>
      <div className="flex flex-wrap gap-10 justify-center items-center text-xl">
        Coming Soon ...
      </div>
    </div>
  );
}
