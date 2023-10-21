import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../constants";
import { Arrow } from "../assets";

const OurServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true, 
  };

  const sliderRef = useRef(null);

  return (
    <div className="w-full bg-primary">
      <div className="w-[83%] m-auto p-10 ">
        <div className="w-auto m-auto">
          <h2 className="text-[29.22px] font-base text-secondary">
            MAKE THE FUTURE
          </h2>
        </div>
        <h1 className="text-secondary text-[73px]">Our Service.</h1>
        <div className="w-full text-secondary py-10">
          {/* carousal */}
          <div>
            <Slider ref={sliderRef} {...settings}>
              {/* Your card slides here */}
              {/* Slide 1 */}
              {services.map((service, i) => (
                <div className="px-6 rounded-lg" key={i}>
                  <div className="bg-white  pb-[80px] shadow-md rounded p-4 text-primary">
                    <img
                      src={service.img}
                      alt={service.h1}
                      className="w-[154px] h-[164.631px]"
                    />
                    <h1 className="">{service.h1}</h1>
                    <p className="my-5">{service.dex}</p>
                    <img src={Arrow} alt="arrow" className="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
