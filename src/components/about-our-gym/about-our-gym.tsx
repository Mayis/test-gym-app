import Image from "next/image";
import React from "react";

function AboutOurGym() {
  return (
    <div className="flex w-full justify-center py-20">
      <div className="flex w-full max-w-[1200px] flex-col items-center space-y-6 px-4">
        <div className="flex w-full sm:w-[90%]">
          <h2 className="font-tektur-bold text-start text-3xl text-white sm:text-5xl">ABOUT OUR GYM</h2>
        </div>
        <div className="flex w-full flex-col space-y-5 sm:w-[90%]">
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <Image alt="gym-man" src="/images/man-gym.avif" fill objectFit="cover" />
          </div>
          <div></div>
        </div>
        <div className="relative flex w-full flex-col-reverse space-x-8 sm:w-[90%] sm:flex-row sm:items-center">
          <p className="font-poppins-medium text-md text-white sm:max-w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, obcaecati incidunt deleniti ad consequuntur
            blanditiis, perferendis fugiat similique facere quibusdam labore est assumenda tempora voluptates error unde
          </p>
          <div className="absolute -top-26 left-4 sm:static sm:mt-0">
            <button className="bg-green-light font-tektur-extrabold rounded-xl px-8 py-3 text-xl">10 YEARS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurGym;
