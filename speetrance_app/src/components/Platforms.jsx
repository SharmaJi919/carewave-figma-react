import React from "react";
import { clouds } from "../constants";

const Platforms = () => {
  return (
    <div className="w-[85%] m-auto">
      <h1 className="text-secondary text-[73px] font-semibold">Platforms</h1>
      <h3 className="text-secondary text-[14.222px] font-thin">
        We provide our services on all three major public clouds.
      </h3>
      <div className="flex w-[90%] m-auto my-16 py-4 items-center justify-center gap-28">
        {clouds.map((item, i) => (
          <div className="flex w-auto">
            <div
              key={i}
              className="bg-secondary text-primary w-[308.517px] h-[387.866px] py-8 px-5 bordersCloud z-20"
            >
              <h2 className="text-[21.34px] font-[600] ">{item.name}</h2>
              <div className="py-3 m-auto h-48">
                <p className="text-primary text-base">{item.dex}</p>
              </div>
              <h2 className="text-center text-primary  font-semibold">
                Read More
              </h2>
              <div
                className="w-[116.851px] h-[116.851px]
              rounded-full p-2 ml-[-66px] cloudshadow mt-[-9px] bg-secondary flex items-center overflow-hidden justify-center"
              >
                <img src={item.icon} alt={item.name} className="w-[80px]" />
              </div>
            </div>
            <div className="w-[308.517px] absolute h-[387.866px] bg-gradient-to-r from-[#4E0865] via-[#630CA6] to-[#630CA6] py-10 px-5 bordersCloud z-0 mt-[10px] ml-[10px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
