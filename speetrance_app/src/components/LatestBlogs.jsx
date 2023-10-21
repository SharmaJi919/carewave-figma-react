import React from "react";
import { blogs } from "../constants";
import { Arrow, unsplash } from "../assets";

const LatestBlogs = () => {
  return (
    <div className="w-[90%] m-auto mt-28 mb-16 py-10 flex flex-col justify-center items-center">
      <div className="text-secondary">
        <h2 className="text-[29.22px] ">Latest Blogs</h2>
      </div>
      <div className="text-secondary">
        <h2 className="text-[73px] ">From Our Blogs</h2>
      </div>
      <div className="w-[80%] flex justify-around items-center gap-20 my-16">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-secondary pb-16 w-[320px] h-[442px] rounded-xl"
          >
            <img
              src={unsplash}
              alt={blog.title}
              className="w-[320px] h-[218px]"
            />
            <div className="p-5">
              <h3 className="text-[12.22px] font-bold ">{blog.date}</h3>
              <h2 className="text-[23.21px] font-[500] ">{blog.title}</h2>
              <p className="text-[12.222px] font-thin">{blog.dex}</p>
              <h3 className="py-1">
                <a href="/">Read More ----></a>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[250px] h-[81px] bg-secondary p-5 text-[22.17px] font-bold rounded-full">
        View More
      </button>
    </div>
  );
};

export default LatestBlogs;
