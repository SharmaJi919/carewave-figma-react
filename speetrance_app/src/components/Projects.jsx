import React from "react";
import { iphone, starlight } from "../assets";

const Projects = () => {
  return (
    <div className="w-full m-auto flex flex-col justify-center items-center">
      <div>
        <h2 className="text-secondary text-[29.22px]">Our Projects</h2>
      </div>
      <div className="w-[80%] m-auto flex justify-center text-center">
        <h1 className="text-secondary text-[73px] font-semibold">
          We are a new digital product development Company
        </h1>
      </div>
      <div>
        <button className="w-[250px] h-[81px] bg-secondary text-primary text-[22.17px] font-semibold p-4 rounded-full mt-10">
          View Portfolio
        </button>
      </div>
      <div className="w-auto m-auto flex">
        <img
          src={iphone}
          alt="iphone"
          className="w-[688px] h-[516px] ml-[60px] z-20"
        />
        <img
          src={starlight}
          alt="starlight"
          className="w-[154.636px] h-[312.811px] absolute ml-[18.60rem] mt-[5.70rem] z-40"
        />
        <div className="w-[138.15px] h-[298.656px] absolute bg-[#7838a6] rounded-2xl ml-[19.15rem] mt-[6.15rem] z-20"></div>
      </div>
      <div className="w-[70%] ml-[-60px] -mt-[9rem]  p-10">
        <h1 className="text-secondary text-[56.28px] text-border z-0 absolute">
          Swipe Left to Right To see our Projects
        </h1>
        <h1 className="text-primary text-[56.28px] text-border absolute z-10 ">
          Swipe Left to Right To see our Projects
        </h1>
      </div>
    </div>
  );
};

export default Projects;
