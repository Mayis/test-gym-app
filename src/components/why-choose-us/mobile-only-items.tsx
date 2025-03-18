import MuscleBuildingCard from "@/components/why-choose-us/muscle-building-card";
import React from "react";

function MobileOnlyItems() {
  return (
    <div className="flex flex-col space-y-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <MuscleBuildingCard key={index} />
      ))}
    </div>
  );
}

export default MobileOnlyItems;
