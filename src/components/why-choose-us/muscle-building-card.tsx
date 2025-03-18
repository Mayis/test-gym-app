import Icon from "@/components/common/icon/icon";
import Image from "next/image";
import React, { useState } from "react";

function MuscleBuildingCard() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="hover:bg-green-light card w-full cursor-pointer flex-row space-y-8 rounded-2xl bg-[#242424] p-8 text-white transition-all duration-300 hover:text-black"
    >
      <div>
        <Image width={100} height={100} src={"/images/dumbbell.png"} alt="dumbbell" />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="font-tektur-bold text-2xl">MUSCLES BUILDING</h3>
          <p className="font-poppins-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem quisquam tempore est nesciunt recusandae.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <button>
              <span className="font-tektur-extrabold text-md"> LEARN MORE</span>
            </button>
          </div>
          <div className="bg-green-light elem flash-icon rounded-full p-2">
            <Icon name={hover ? "flash-white" : "flash-black"} size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuscleBuildingCard;
