import React, { useState } from "react";
import Container from "../layers/Container";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import CategoryLI from "../layers/CategoryLI";
import SubCatLI from "../layers/SubCatLI";
import { IoClose } from "react-icons/io5";
const SearchBar = () => {
  let [show, setShow] = useState(false);
  let [elec, setElec] = useState(false);
  let [user, setUser] = useState(false);
  let [cart, setCart] = useState(false);

  return (
    <div className="bg-[#F5F5F3]">
      <Container className="relative pt-[25px] pb-[6px] bg-[#F5F5F3] flex justify-between items-center z-20">
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="category flex items-center gap-[11px] cursor-pointer"
        >
          <RiBarChartHorizontalFill className="text-[#262626] text-lg" />
          <p className="text-[#262626]">Shop by Category</p>
        </div>
        {/* category list============*/}
        <div
          className={`absolute top-full left-0 transition-all duration-300 ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col w-[263px]">
            <CategoryLI liText="Accessories" to="product" />
            <CategoryLI liText="Furniture" to="product" />
            <CategoryLI liText="Electronics" to="product" />
            <CategoryLI liText="Clothes" to="product" />
            <CategoryLI liText="Bags" to="product" />
            <CategoryLI
              liText="Home appliances"
              to="product"
              className="border-none"
            />
          </ul>
          {/* sub category list------- */}
          <div className="pt-7 pb-8 pl-10 pr-12 h-full bg-white shadow-sm shadow-[#76767629] absolute left-full top-0 flex">
            <div className="text-nowrap">
              <h4 className="text-[16px] font-bold text-[#262626] mb-5">
                Phones
              </h4>
              <ul className="flex flex-col gap-3">
                <SubCatLI liText="Phone 1" to="subcategory" />
                <SubCatLI liText="Phone 2" to="subcategory" />
                <SubCatLI liText="Phone 3" to="subcategory" />
                <SubCatLI liText="Phone 4" to="subcategory" />
                <SubCatLI liText="Phone 5" to="subcategory" />
                <SubCatLI liText="Phone 6" to="subcategory" />
                <SubCatLI liText="Phone 7" to="subcategory" />
              </ul>
            </div>
            {/* ---------------- */}
            <div className="ml-[50px] text-nowrap">
              <h4 className="text-[16px] font-bold text-[#262626] mb-5">
                Computers
              </h4>
              <ul className="flex flex-col gap-3">
                <SubCatLI liText="Computer 1" to="subcategory" />
                <SubCatLI liText="Computer 2" to="subcategory" />
                <SubCatLI liText="Computer 3" to="subcategory" />
                <SubCatLI liText="Computer 4" to="subcategory" />
                <SubCatLI liText="Computer 5" to="subcategory" />
                <SubCatLI liText="Computer 6" to="subcategory" />
                <SubCatLI liText="Computer 7" to="subcategory" />
              </ul>
            </div>
            {/* ---------------- */}
            {/* ---------------- */}
            <div className="ml-[50px] text-nowrap">
              <h4 className="text-[16px] font-bold text-[#262626] mb-5">
                Smart watches
              </h4>
              <ul className="flex flex-col gap-3">
                <SubCatLI liText="Smart watches 1" to="subcategory" />
                <SubCatLI liText="Smart watches 2" to="subcategory" />
                <SubCatLI liText="Smart watches 3" to="subcategory" />
                <SubCatLI liText="Smart watches 4" to="subcategory" />
                <SubCatLI liText="Smart watches 5" to="subcategory" />
                <SubCatLI liText="Smart watches 6" to="subcategory" />
                <SubCatLI liText="Smart watches 7" to="subcategory" />
              </ul>
            </div>
            {/* ---------------- */}
            {/* ---------------- */}
            <div className="ml-[38px] text-nowrap">
              <h4 className="text-[16px] font-bold text-[#262626] mb-5">
                Cameras
              </h4>
              <ul className="flex flex-col gap-3">
                <SubCatLI liText="Camera 1" to="subcategory" />
                <SubCatLI liText="Camera 2" to="subcategory" />
                <SubCatLI liText="Camera 3" to="subcategory" />
                <SubCatLI liText="Camera 4" to="subcategory" />
                <SubCatLI liText="Camera 5" to="subcategory" />
                <SubCatLI liText="Camera 6" to="subcategory" />
                <SubCatLI liText="Camera 7" to="subcategory" />
              </ul>
            </div>
            {/* ---------------- */}
          </div>
          {/* sub category list------- */}
        </div>
        {/* category list======== */}

        {/* ===========search bar======== */}
        <div className="search relative">
          <input
            type="text"
            className="w-[601px] py-4 px-5 outline-none"
            placeholder="Search Products"
          />
          <FaSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-[#262626] text-lg cursor-pointer" />
        </div>
        {/* ===========search bar======== */}

        {/* =====user & cart==== */}
        <div className="text-[#262626] flex items-center gap-[41px]">
          {/* ------user------- */}
          <div className="user relative">
            <div
              className="py-3 flex items-center gap-[11px] cursor-pointer"
              onClick={() => {
                setUser(!user);
              }}
            >
              <FaUserAlt className="text-lg" />
              <BiSolidDownArrow
                className={`text-lg duration-500 transition-all ${
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

          <div className="cart">
            <div
              className="relative"
              onClick={() => {
                setCart(!cart);
              }}
            >
              <FaShoppingCart className="text-lg cursor-pointer " />
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
                  <button className="py-5 px-10 border border-[#2B2B2B] bg-black hover:bg-transparent hover:text-[#262626] duration-500 transition-all">
                    View Cart
                  </button>
                  <button className="py-5 px-10 border border-[#2B2B2B] bg-black hover:bg-transparent hover:text-[#262626] duration-500 transition-all">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ------cart------- */}
        </div>
        {/* =====user & cart==== */}
      </Container>
    </div>
  );
};

export default SearchBar;
