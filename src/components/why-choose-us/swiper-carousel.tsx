import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import MuscleBuildingCard from "@/components/why-choose-us/muscle-building-card";
import { useMediaQuery } from "@/hooks/media-query.hooks";

function SwiperCarousel() {
  const isSmallDesktopSize = useMediaQuery("(max-width: 1440px)");

  const isTabletSize = useMediaQuery("(max-width: 900px)");

  return (
    <div className="w-full">
      <Swiper
        loop
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn"
        }}
        slidesPerView={isTabletSize ? 1 : isSmallDesktopSize ? 2 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        style={{ width: "100%" }}
        modules={[Pagination, Navigation]}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={`swiper-item-${index}`} style={{ width: "100%" }}>
            <MuscleBuildingCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperCarousel;
