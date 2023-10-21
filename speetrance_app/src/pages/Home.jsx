import React from "react";
import styles from "../style";
import {
  Hero,
  Navbar,
  WhoWeAre,
  FAQs,
  LatestBlogs,
  OurServices,
  Platforms,
  Projects,
  Testimonials,
  Footer,
} from "../components";
import { socials } from "../constants";

const Home = () => {
  return (
    <div className=" w-full bg-primary overflow-hidden text-secondary">
      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} text-secondary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Home Component */}

      <div className={`bg-primary ${styles.flexStart} z-20`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* body components */}
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} z-20 w-full`}
      >
        <div className={`${styles.boxWidth} `}>
          <WhoWeAre />
          <OurServices />
          <Testimonials />
          <Platforms />
          <Projects />
          <LatestBlogs />
          <FAQs />
          <Footer />
        </div>
      </div>

      {/* gradients */}

      <div className="blob w-[322px] h-[322px] rounded-full absolute bottom-0 right-0 blur-[119.13999938964844px] bg-opacity-10 bg-gradient-to-r from-primary via-blue-700 to-blue-900 z-10"></div>

      <div className="blob w-[322px] h-[322px] rounded-full absolute bottom-20 left-[15%] blur-[119.13999938964844px] bg-opacity-10   bg-gradient-to-r from-primary via-blue-700 to-blue-900 z-10"></div>
      <div className="blob w-[322px] h-[322px] rounded-full absolute top-[20%] left-[35%] blur-[119.13999938964844px] bg-opacity-10 bg-gradient-to-r from-primary via-blue-700 to-blue-900 z-10"></div>
      {/* side icons and links */}
      <div className="blob flex absolute items-center z-10 left-10 -rotate-90 -mt-[4080px] ">
        <ul className="flex justify-around items-center gap-6 py-6 absolute z-0">
          {socials.map((item, i) => (
            <li className="text-xl text-secondary flex gap-1">
              <img
                src={item.icon}
                alt="item.title"
                className="rotate-90 z-10"
              />
              <a href={item.link} className="text-sm">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
