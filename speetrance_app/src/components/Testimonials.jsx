import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Test1, test2, test3, test4 } from "../constants";
import { blockqoute } from "../assets";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: true,
  };

  const sliderRef = useRef(null);

  return (
    <div className="w-9/10 flex flex-col bg-primary my-10 py-8 text-secondary text-center">
      <div className="">
        <h2 className="text-[29.22px] font-[400]">Testimonials</h2>
      </div>
      <h1 className="text-[73px] font-[600]">What Our Clients Say</h1>
      <div className="w-[418px] m-auto">
        <p className="text-[14.222px] font-[300]">
          Get access to dozens of articles and video tutorials that help you
          customize your Query website in depth.
        </p>
      </div>
      <div className="flex w-auto h-[50px] m-auto justify-evenly">
        {Test1.map((i, test) => (
          <div className="" key={i}>
            <img src={test.img} alt="" />
          </div>
        ))}
      </div>

      <div className="w-[90%] m-auto text-secondary py-10">
        <Slider ref={sliderRef} {...settings}>
          {/* Your card slides here */}
          {/* Slide 1 */}
          {test2.map((test, i) => (
            <div
              className="px-6 rounded-lg flex flex-col justify-center items-center"
              key={i}
            >
              <div className="bg-white  pb-[80px] shadow-md rounded p-4 text-primary flex flex-col justify-center items-center">
                <div className="w-50 h-50">
                  <img src={test.icon} alt={test.name} className="" />
                </div>
                <div>
                  <h3>{test.name}</h3>
                </div>
                <div>
                  <h4>{test.profile}</h4>
                </div>
                <div>
                  <img src={blockqoute} alt="blockquote" />
                </div>
                <div>
                  <p>{test.dex}</p>
                </div>
              </div>
            </div>
          ))}
          {test3.map((test, i) => (
            <div className="px-6 rounded-lg w-2/7 m-auto" key={i}>
              <div className="bg-white  pb-[80px] shadow-md rounded p-4 text-primary">
                <div className="w-50 h-50">
                  <img src={test.icon} alt={test.name} />
                </div>
                <div>
                  <h3>{test.name}</h3>
                </div>
                <div>
                  <h4>{test.profile}</h4>
                </div>
                <div>
                  <img src={blockqoute} alt="blockquote" />
                </div>
                <div>
                  <p>{test.dex}</p>
                </div>
              </div>
            </div>
          ))}
          {test4.map((test, i) => (
            <div className="px-6 rounded-lg w-2/7 m-auto" key={i}>
              <div className="bg-white  pb-[80px] shadow-md rounded p-4 text-primary">
                <div className="w-50 h-50">
                  <img src={test.icon} alt={test.name} />
                </div>
                <div>
                  <h3>{test.name}</h3>
                </div>
                <div>
                  <h4>{test.profile}</h4>
                </div>
                <div>
                  <img src={blockqoute} alt="blockquote" />
                </div>
                <div>
                  <p>{test.dex}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
