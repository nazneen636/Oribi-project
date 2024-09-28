import React from "react";

const Heading = ({ headingText, className }) => {
  return (
    <div>
      <h2 className={`font-bold text-[#262626] text-[39px] ${className}`}>
        {headingText}
      </h2>
    </div>
  );
};

export default Heading;
