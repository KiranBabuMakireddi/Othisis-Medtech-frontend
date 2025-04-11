import React from "react";
import arrowIcon from "../assets/arrow.png";
import newIcon from "../assets/fiber_new.png";
import calendarIcon from "../assets/calendar.png";
import folderUserIcon from "../assets/folderuser.png";
import userIcon from "../assets/user.png";
import gearIcon from "../assets/settings.png";

const Sidebar = () => {
  const icons = [
    { src: arrowIcon, alt: "Arrow" },
    { src: newIcon, alt: "New" },
    { src: calendarIcon, alt: "Calendar" },
    { src: folderUserIcon, alt: "Folder User" },
    { src: userIcon, alt: "User" },
    { src: gearIcon, alt: "Settings" },
  ];

  return (
    <div className="fixed top-12 left-0 w-16 h-[80%] bg-navbarscolor rounded-tr-[12px] rounded-br-[12px] z-40 flex flex-col items-center">
      {/* Top shadow */}
      <div className="absolute -top-6 left-0 w-full h-6 rounded-t-lg shadow-[10px_-20px_30px_rgba(176,187,255,0.6)] z-[-1]" />

      {/* Icons with manual spacing */}
      {icons.map(({ src, alt }, i) => (
        <img
          key={i}
          src={src}
          alt={alt}
          className={`w-6 h-6 object-contain transition-transform duration-300 hover:scale-110 hover:opacity-90 cursor-pointer ${
            i !== 0 ? "mt-5" : ""
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Sidebar;
