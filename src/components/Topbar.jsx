import React from "react";
import mainLogo from "../assets/mainlogo.png";
import BellCount from "../assets/BellCount.png"
import usericon from "../assets/usericon.png"

const TopBar = () => {
  return (
    <div className="w-full h-16 fixed top-0 bg-navbarscolor z-20">
      <div className="max-w-[1440px] mx-auto h-full flex items-center pl-10 pr-4">
        <img
          src={mainLogo}
          alt="Main Logo"
          className="w-[213px] h-[39.09px] object-contain z-10"
          loading="lazy"
        />

        {/* Right-side icons */}
        <div className="ml-auto flex items-center space-x-1 pr-[20px]">
          <img
            src={BellCount}
            alt="Icon 1"
            className="w-[29px] h-[27px] object-contain"
            loading="lazy"
          />
          <img
            src={usericon}
            alt="Icon 2"
            className="w-[52px] h-[32px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
