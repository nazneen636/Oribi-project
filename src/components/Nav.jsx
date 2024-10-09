import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import Image from "../layers/Image";
import logo from "/logo.png";
import Li from "../layers/Li";
import { PiDotsNineBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  let [show, setShow] = useState(true);
  let [user, setUser] = useState(false);
  let [cart, setCart] = useState(false);
  useEffect(() => {
    function size() {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    size();

    window.addEventListener("resize", size);
  }, []);
  return (
    <nav>
      <Container className="flex items-center justify-between py-3 md:py-8 px-8 md:px-0 relative z-30">
        <Image src={logo} alt={logo} to="logo" />

        {/* ------user------- */}
        <div className="text-[#262626] flex md:hidden items-center gap-[20px] absolute right-14">
          <div className="user relative text-[#262626] block md:hidden">
            <div
              className="py-3 flex items-center gap-[11px] cursor-pointer"
              onClick={() => {
                setUser(!user);
              }}
            >
              <FaUserAlt className="md:text-lg text-sm" />
              <BiSolidDownArrow
                className={`md:text-lg text-sm duration-500 transition-all ${
                  user ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`bg-white text-nowrap text-center text-[#262626] w-[200px] absolute top-full right-0 shadow-sm shadow-[#76767637] ${
                user ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul>
                <li className="py-4 px-16 border-b border-[#76767637] hover:text-white hover:bg-[#2B2B2B] hover:font-bold">
                  My Account
                </li>
                <li className="py-4 px-16 hover:text-white hover:bg-[#2B2B2B] hover:font-bold">
                  Log Out
                </li>
              </ul>
            </div>
          </div>

          {/* ------user------- */}
          <div className="cart text-[#262626] block md:hidden">
            <div
              className="relative"
              onClick={() => {
                setCart(!cart);
              }}
            >
              <FaShoppingCart className="md:text-lg text-sm cursor-pointer " />
            </div>
            <div
              className={`absolute top-full right-0 shadow-sm shadow-[#76767637] transition-all duration-300 ${
                cart ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* -1st part------- */}
              <div className="bg-[#F5F5F3] relative p-5 flex items-center gap-5">
                <div className="img w-20 h-20 bg-[#D8D8D8]"></div>
                <div className="text mr-20">
                  <h4 className="font-bold mb-3 text-[#262626]">
                    Black Smart Watch
                  </h4>
                  <h4 className="font-bold text-[#262626]">$44.00</h4>
                </div>
                <IoClose className="absolute top-1/2 -translate-y-1/2 right-5" />
              </div>
              {/* -2nd part------- */}
              <div className="p-5 bg-white text-nowrap">
                <h4 className="text-[#767676] text-[16px]">
                  Subtotal:{" "}
                  <span className="text-[#262626] font-bold">$44.00</span>
                </h4>
                <div className="text-white font-bold mt-3 flex gap-5 items-center">
                  <Link
                    to="/cart"
                    className="py-5 px-10 border border-[#2B2B2B] bg-black hover:bg-transparent hover:text-[#262626] duration-500 transition-all"
                  >
                    View Cart
                  </Link>
                  <Link
                    to="/cart"
                    className="py-5 px-10 border border-[#2B2B2B] bg-black hover:bg-transparent hover:text-[#262626] duration-500 transition-all"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------cart------- */}

        {show && (
          <ul className="w-full justify-center gap-x-10 shadow-lg shadow-[rgba(38,38,38,0.17)] md:shadow-transparent bg-[#EDEDED] md:bg-transparent py-4 px-3 md:px-0 md:py-0 absolute left-0 top-full md:static flex flex-col md:flex-row rounded-sm">
            <Li liText="Home" className="text-[#262626] px-8 md:px-0" to="/" />
            <Li liText="Shop" className="px-8 md:px-0" to="/product" />
            <Li liText="About" className="px-8 md:px-0" to="/about" />
            <Li liText="Contacts" className="px-8 md:px-0" to="/contacts" />
            <Li liText="Journal" className="px-8 md:px-0" to="/journal" />
            <Li liText="Sign up" className="px-8 md:px-0" to="/sign/up" />
          </ul>
        )}

        <div
          onClick={() => {
            setShow(!show);
          }}
          className="block md:hidden"
        >
          <IoClose
            className={`text-lg absolute top-1/2 -translate-y-1/2 rotate-90 duration-500 transition-all ${
              show ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          />
          <PiDotsNineBold
            className={`text-lg absolute top-1/2 -translate-y-1/2 -rotate-90 duration-500 transition-all ${
              show ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
