import MessageTracker from "@/components/common/header/message-tracker";
import Navbar from "@/components/common/header/navbar";
import Icon from "@/components/icon/icon";
import React from "react";

function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full justify-center">
      <div className="flex h-10 w-full max-w-[1200px] flex-row items-center justify-between px-4 pt-[60px] pb-10 sm:px-10">
        <div>
          <h2 className="font-tektur-bolder text-2xl text-white">GYMTEAM</h2>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="flex items-center space-x-4">
          <button className="cursor-pointer">
            <Icon name="search" size={20} />
          </button>
          <button className="relative cursor-pointer">
            <MessageTracker count={2} />
            <Icon name="message" size={20} />
          </button>
          <button className="cursor-pointer">
            <Icon name="burger-menu" size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
