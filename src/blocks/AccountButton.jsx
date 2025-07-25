import React from "react";

const AccountButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative text-lg text-[#4A2721] bg-[#EDCD9E] py-1 px-2 overflow-hidden transition-colors duration-300"
    >
      <span className="relative z-10">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#4A2721] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#4A2721] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#4A2721] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#4A2721] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default AccountButton;
