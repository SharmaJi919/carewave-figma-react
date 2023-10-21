import React from "react";
import { group, saly } from "../assets";
import { faqs } from "../constants";

const FAQs = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col justify-center items-center my-2">
      <div className="py-5 w-[70%] m-auto flex justify-center text-center px-10">
        <h2 className="text-secondary text-[26.39px] font-light ">
          It is a long established fact that a reader will be distracted by the
          readable content
        </h2>
      </div>
      <div className="w-[70%] m-auto flex justify-center text-center px-4">
        <h1 className="text-[50.386px] font-bold text-secondary">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex gap-10 w-[95%] m-auto justify-between px-10 items-center">
        <div className="w-[437px] ">
          <div className="flex items-start">
            <img
              src={group}
              alt="quote"
              className="w-[48px] ml-[-3.1rem] mt-[-9px] absolute line-"
            />
            <h1 className="text-secondary text-[32px] font-light ">
              Find Your Right Solution And Let Us Know If You Need Any Help.
            </h1>
            <img
              src={group}
              alt="quote"
              className="w-[48px] rotate-180 absolute mt-[6rem] ml-[15rem]"
            />
          </div>
          <div className="w-[90%] m-auto -ml-[0px] py-4">
            <p className="text-sm text-secondary font-thin">
              Molestiae eveniet earum quo, expli cabo ut voluptates sunt a illo
              aliqu ipsam orem ipsum dolor sit amet consectetur adipisicing elit
              Lorem Ipsum Lorem Ipsum is
            </p>
          </div>
        </div>
        <div className="flex flex-col py-5 my-5 text-secondary">
          {faqs.map(({ title }, i) => (
            <div
              key={i}
              className="w-[536px] h-[62.495px] bg-gradient-to-b from-[#7838A6] to-[#5F5CFB] flex justify-between p-4 items-center my-2"
            >
              <span className="text-5xl font-light">+</span>
              <h2>{title}</h2>
              <span class="material-symbols-outlined text-[2rem] font-thin">
                keyboard_arrow_down
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[400px] h[400px] -mt-14">
        <img
          src={saly}
          alt="saly"
          className="w-[446px] h[446px] justify-start items-end -ml-[31rem] "
        />
      </div>
    </div>
  );
};

export default FAQs;
