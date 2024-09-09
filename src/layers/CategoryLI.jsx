import React from "react";
import { Link } from "react-router-dom";

const CategoryLI = ({ liText, className, to, children }) => {
  return (
    <li className={`bg-[#262626] ${className}`}>
      <Link
        className={`block w-full text-[#ffffffa3] p-3 md:py-4 md:px-5 border-b border-[#97979716] hover:text-white hover:pl-8 hover:font-bold duration-300 transition-all`}
        to={to}
      >
        {liText}
      </Link>
      {/* Submenu (children) */}
      {children && <div className="">{children}</div>}
    </li>
  );
};

export default CategoryLI;
