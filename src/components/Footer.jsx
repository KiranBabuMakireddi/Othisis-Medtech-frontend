import React from "react";

const Footer = () => {
  return (
    <div className="absolute top-[90%] w-full h-[10%] bg-white border-t border-gray-200 flex items-center justify-end px-6 z-50">
      <div className="flex space-x-3">
        <button className="text-[16px] px-5 py-2 border border-black text-black rounded-[20px] hover:bg-gray-100 transition">
          Send Referral
        </button>
        <button className="text-[16px] px-5 py-2 bg-navbarscolor text-[#fdfdfd] rounded-[20px] hover:bg-gray-900 transition">
          Save Note
        </button>
      </div>
    </div>
  );
};

export default Footer;
