import React from "react";
import { abouts, weare } from "../constants";

const WhoWeAre = () => {
  return (
    <div className="w-full flex flex-col z-30 justify-center items-center text-secondary my-5 py-10">
      {/* who we are 1 */}
      <div className="WhoWeAre1 bg-primary my-10">
        <div className="z-30 flex justify-center">
          <h2 className="z-30 text-[29.22px] font-[400]">WHO WE ARE</h2>
        </div>
        <div className="w-[80%] m-auto flex items-center text-center z-30 py-6">
          <h1 className="z-30 text-[73px] font-[500]">
            We are a new digital product development agency
          </h1>
        </div>

        <div className="w-[100px] h-[100px] flex m-auto rounded-full text-center justify-center items-center bg-secondary text-primary text-6xl font-[900] my-5">
          &#8595;
        </div>

        <div className="flex w-[90%] m-auto justify-around items-center mb-20 ">
          {abouts.map(({ title, no }, i) => (
            <div key={i}>
              <div className="text-[190px] text-[#ffffff32] font-semibold">
                {no}
              </div>
              <div className="-mt-[160px] ml-[90px]">{title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* who we are 2 */}
      <div className="WhoWeAre1 bg-[#F4F5F7] w-full m-auto pt-8 insideshadow">
        <div className="z-30 flex justify-center py-4">
          <h2 className="z-30 text-[29.22px] text-primary font-[400]">
            WHO WE ARE
          </h2>
        </div>
        <div className="w-[70%] m-auto flex items-center text-center z-30 py-6">
          <h1 className="z-30 text-[51px] text-primary font-semibold">
            Best Mobile Application Development in USA, Canada, & India
          </h1>
        </div>
        <div className="w-1/6 m-auto flex justify-center">
          <button className="whowearebutton font-bold m-auto">About us</button>
        </div>

        <div className="flex w-[80%] m-auto justify-around items-center text-primary my-16">
          {weare.map(({ name, img }, i) => (
            <div
              key={i}
              className="w-[371.223px] h-[398px] m-auto bg-white items-baseline pr-0 shadow-md"
            >
              <div className="w-full h-32 mb-10"></div>
              <div className=" flex max-h-2  items-baseline justify-between pr-0">
                <div className=" flex flex-col item text-center w-1/3 h-[100px] text-[28.23px] font-bold">
                  {name}
                </div>

                <div className="flex w-[176.86px] h-[176.86px] justify-end items-baseline">
                  <img
                    src={img}
                    alt={name}
                    className="inline-flex items-baseline"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
