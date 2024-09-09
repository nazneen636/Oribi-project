import React from "react";
import { Link } from "react-router-dom";

const SubCatLI = ({ liText, to, className }) => {
  return (
    <div>
      <li>
        <Link
          className={`hover:text-[#262626] font-bold text-[12px] md:text-sm duration-300 transition-all ${className}`}
          to={to}
        >
          {liText}
        </Link>
      </li>
    </div>
  );
};

export default SubCatLI;
