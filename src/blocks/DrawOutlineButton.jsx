import React from "react";

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative text-2xl text-[#F5D07D] bg-[#1B2A47] py-2 px-6 overflow-hidden transition-colors duration-300"
    >
      <span className="relative z-10">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[4px] w-0 bg-[#F5D07D] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[4px] bg-[#F5D07D] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[4px] w-0 bg-[#F5D07D] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-[#F5D07D] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;
