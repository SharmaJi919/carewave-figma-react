import React from "react";
import { specular } from "../assets";
import { brands } from "../constants";

const Hero = () => {
  return (
    <div>
      <div className="right-0 absolute top-[15%] rotate-[(-11.424deg)] z-40">
        <img src={specular} alt="specular" />
      </div>
      <div className="w-[80%] text-secondary flex flex-col justify-start z-40 m-auto py-5 relative">
        <div className="w-5/6 relative">
          <h1 className="z-40 text-[73px] relative font-semibold">
            Mobile App Development and Software Development Company
          </h1>
        </div>
        <div className="w-3/6 py-7">
          <p className="text-[14.22px] text-white-300/50 font-thin z-40">
            Get access to best in class App and Software Development Services
            withe the digital experts of Corewave.
          </p>
        </div>
        <button className="homebutton w-1/6 font-bold m-auto">
          Let's Start
        </button>
      </div>

      <div className="flex w-[70%] py-10 items-center justify-around m-auto text-center ">
        <div className="w-[65px] h-[65px] bg-secondary z-20 p-4 rounded-full flex items-center justify-center pl-6">
          <span class="material-symbols-outlined text-4xl">arrow_back_ios</span>
        </div>
        <div className="flex w-[70%] justify-around">
          {brands.map((br, i) => (
            <img src={br.src} alt={br.title} key={i} className="z-20" />
          ))}
        </div>
        <div className="w-[65px] h-[65px] bg-secondary z-20 p-4 rounded-full flex items-center justify-center pl-6">
          <span class="material-symbols-outlined text-4xl">
            arrow_forward_ios
          </span>
        </div>
      </div>

      <div className="blob w-[300px] h-[200px] rounded-t-full absolute bottom-0 -left-40 blur-[19.13999938964844px] bg-opacity-60 bg-gradient-to-tr from-[#C56724] via-orange-500 to-yellow-300 z-10"></div>
    </div>
  );
};

export default Hero;
