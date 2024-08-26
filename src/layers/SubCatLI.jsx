import React from "react";
import { Link } from "react-router-dom";

const SubCatLI = ({ liText, to, className }) => {
  return (
    <div>
      <li>
        <Link
          className={`hover:text-[#262626] hover:font-bold duration-300 transition-all ${className}`}
          to={to}
        >
          {liText}
        </Link>
      </li>
    </div>
  );
};

export default SubCatLI;
