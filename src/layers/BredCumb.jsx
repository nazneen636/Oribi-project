import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BredCumb = () => {
  return (
    <div className="my-[124px]">
      <h2 className="text-5xl font-bold text-[#262626] capitalize">
        {window.location.pathname.split("/")[1]}{" "}
        <span className="lowercase">
          {window.location.pathname.split("/")[2]}
        </span>
      </h2>
      <p className="mt-4 flex items-center gap-2 capitalize text-[12px] text-[#6D6D60]">
        <span>Home</span>
        <IoIosArrowForward />
        {window.location.pathname.split("/")[1]}
        <span className="capitalize">
          {window.location.pathname.split("/")[2]}
        </span>
      </p>
    </div>
  );
};

export default BredCumb;
