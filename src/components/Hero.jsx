import React from "react";
import styles from "../style";
import { heroimg,robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = ({ contactRef }) => {
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[46px] text-white ss:leading-[80px] leading-[65px] mr-5">
            Empowering Your Business
            <span className="text-gradient"> With </span>{" "}
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[68px] text-[60px]">
              Cutting Edge
            </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-2 mr-0">
            <GetStarted onClick={scrollToContact} />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100.8px] leading-[65px] w-full">
          IT Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We provide top-notch IT support and services, including software
          development, website development, and mobile app development. Our
          goal is to help your business thrive in the digital age.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-5 ml-5 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-[5%]" />
        <div className="absolute z-[1] w-[80%] h-[80%] blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted onClick={scrollToContact} />
      </div>
    </section>
  );
};

export default Hero;
