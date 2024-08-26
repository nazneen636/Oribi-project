import React from "react";
import { Link } from "react-router-dom";

const CategoryLI = ({ liText, className, to }) => {
  return (
    <div>
      <li className={`bg-[#262626] ${className}`}>
        <Link
          className={`block w-full  text-[#ffffffa3] py-4 px-5 border-b border-[#97979716] hover:text-white hover:pl-8 hover:font-bold duration-300 transition-all ${className}`}
          to={to}
        >
          {liText}
        </Link>
      </li>
    </div>
  );
};

export default CategoryLI;
