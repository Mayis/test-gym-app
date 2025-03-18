"use client";
import React from "react";

import Icon from "@/components/common/icon/icon";
import SwiperCarousel from "@/components/why-choose-us/swiper-carousel";
import { useMediaQuery } from "@/hooks/media-query.hooks";
import MobileOnlyItems from "@/components/why-choose-us/mobile-only-items";

function WhyChooseUs() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="flex w-full justify-center py-10">
      <div className="flex max-w-[1200px] flex-col space-y-6 overflow-hidden px-4">
        <div className="flex w-full sm:w-[90%]">
          <h2 className="font-tektur-bold text-start text-3xl text-white sm:pl-8 sm:text-5xl">WHY CHOOSE US</h2>
        </div>
        <div className="relative flex w-full items-center justify-center sm:space-x-4">
          <div className="hidden sm:flex">
            <button className="prev-btn absolute left-0 cursor-pointer rounded-full border border-white p-2">
              <Icon name="arrow-left" />
            </button>
          </div>
          <div className="w-full sm:w-[90%] sm:px-4">{isMobile ? <MobileOnlyItems /> : <SwiperCarousel />}</div>
          <div className="hidden sm:flex">
            <button className="next-btn absolute right-0 cursor-pointer rounded-full border border-white p-2">
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
