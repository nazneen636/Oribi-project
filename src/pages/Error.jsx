import React from "react";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import Btn from "../layers/Btn";
import { FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <div>
      <Container>
        <div className="max-w-[644px]">
          <Heading className="mt-[160px] text-[200px]" headingText="404" />
          <p className="para mt-[120px]">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
          <div className="relative max-w-[643px]">
            <input
              type="search"
              className="p-5 mt-[50px] outline-none border w-full border-[#F0F0F0]"
              placeholder="Type to search"
            />
            <FaSearch className="text-[#262626] absolute right-4 top-[66%] " />
          </div>
          <Btn btnText="Back to Home" className="mt-[76px]" />
        </div>
      </Container>
    </div>
  );
};

export default Error;
