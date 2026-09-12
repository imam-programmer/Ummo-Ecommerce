import React, { useState } from "react";
import BlogCart from "../components/blog/BlogCart";
import BlogPagination from "../components/blog/BlogPagination";


const CATEGORIES = ["ALL", "COMPANY", "FASHION", "STYLE", "TRENDS", "BEAUTY"];

const POSTS = [
  {
    id: 1,
    shape: "pie",
    date: "APRIL 03, 2020",
    title: "Woman with good shoes is never be ugly place",
    excerpt:
      "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
  },
  {
    id: 2,
    shape: "pie",
    date: "APRIL 03, 2020",
    title: "Heaven upon heaven moveth every have.",
    excerpt:
      "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
  },
  {
    id: 3,
    shape: "triangle-stack",
    date: "APRIL 03, 2020",
    title: "Tree doesn't good void, waters without created",
    excerpt:
      "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
  },
  {
    id: 4,
    shape: "mountain",
    date: "APRIL 03, 2020",
    title: "Given Set was without from gad divide rule Hath",
    excerpt:
      "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
  },
  {
    id: 5,
    shape: "circle-wedge",
    date: "APRIL 03, 2020",
    title: "Tree earth fowl given moveth deep lesser After",
    excerpt:
      "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
  },
  {
    id: 6,
    shape: "mountain-2",
    date: "APRIL 03, 2020",
    title: "Us yielding Fish sea night right the said him two",
    excerpt:
      "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
  },
];






export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

 

  return (
    <div
      className="min-h-screen bg-white font-jost"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-8">
          <h1
            className="text-2xl font-bold tracking-tight text-primary sm:text-3xl"
          >
            THE BLOG
          </h1>

          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-gray-200 pb-4">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs cursor-pointer font-medium tracking-wide transition-colors ${
                    isActive ? "underline underline-offset-8 text-primary" : "hover:opacity-70 text-gray"
                  }`}
            
                >
                  {cat}
                </button>
              );
            })}
          </nav>
        </header>

        {/* Post grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <BlogCart key={post.id} post={post} />
        
          ))}
        </div>

        {/* Footer / pagination */}
       <BlogPagination/>
      </div>
    </div>
  );
}