import React from "react";

const Btn = ({ btnText, className, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`py-4 px-20 font-bold text-sm border border-[#2B2B2B] text-white bg-black hover:bg-transparent hover:text-[#262626] duration-500 transition-all ${className}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Btn;
