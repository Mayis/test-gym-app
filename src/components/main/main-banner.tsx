import HeroSection from "@/components/main/hero-section";
import React from "react";

function MainBanner() {
  return (
    <div className="bg-banner h-[95vh] w-full">
      <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.8)]">
        <HeroSection />
      </div>
    </div>
  );
}

export default MainBanner;
