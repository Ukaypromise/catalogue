"use client"

import React, { use } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    console.log("scrolling");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car faster - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          streamlines the process of finding, booking, and renting a car.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
            <Image src='/hero.png' alt="image" fill className="object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
