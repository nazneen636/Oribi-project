import React, { useState } from "react";
import Container from "../layers/Container";
import Image from "../layers/Image";
import logo from "/logo.png";
import Li from "../layers/Li";
import { PiDotsNineBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  let [show, setShow] = useState(true);
  return (
    <nav>
      <Container className="flex items-center justify-between py-3 md:py-8 px-8 md:px-0 relative">
        <Image src={logo} alt={logo} to="logo" />

        {show && (
          <ul className="w-full justify-center gap-x-10 shadow-lg shadow-[rgba(38,38,38,0.17)] md:shadow-transparent bg-[#EDEDED] md:bg-transparent py-4 px-3 md:px-0 md:py-0 absolute left-0 top-full md:static flex flex-col md:flex-row rounded-sm">
            <Li liText="Home" className="text-[#262626] px-8 md:px-0" to="/" />
            <Li liText="Shop" className="px-8 md:px-0" to="/shop" />
            <Li liText="About" className="px-8 md:px-0" to="/about" />
            <Li liText="Contacts" className="px-8 md:px-0" to="/contacts" />
            <Li liText="Journal" className="px-8 md:px-0" to="/journal" />
          </ul>
        )}

        <div
          onClick={() => {
            setShow(!show);
          }}
          className="block md:hidden"
        >
          <IoClose
            className={`absolute top-1/2 -translate-y-1/2 rotate-90 duration-500 transition-all ${
              show ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          />
          <PiDotsNineBold
            className={`absolute top-1/2 -translate-y-1/2 -rotate-90 duration-500 transition-all ${
              show ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
