import Button from "@/components/common/button/button";
import Icon from "@/components/common/icon/icon";
import React from "react";

function HeroSection() {
  return (
    <div className="flex max-w-[1200px] flex-col items-center justify-center space-y-12 px-4">
      <div className="flex-col space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-tektur-bolder text-center text-3xl tracking-wide text-white md:text-5xl lg:text-8xl">
            WORK WITH{"\n"}PROFESSIONALS
          </h1>
          <p className="lg:text-md text-l text-center text-white md:text-sm lg:max-w-[600px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorum ipsa atque asperiores quis dolor!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button>START NOW</Button>
          <Button variant="secondary">LEARN MORE</Button>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="cursor-pointer rounded-full border border-white p-2">
          <Icon name="arrow-left" />
        </button>
        <button className="cursor-pointer rounded-full border border-white p-2">
          <Icon name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
