import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import CategoryLI from "../layers/CategoryLI";
import SubCatLI from "../layers/SubCatLI";
import { IoClose } from "react-icons/io5";
import axios from "axios";
const SearchBar = () => {
  let [show, setShow] = useState(false);
  let [user, setUser] = useState(false);
  let [cart, setCart] = useState(false);

  let [search, setSearch] = useState("");
  let [allProduct, setAllProduct] = useState([]);
  let [filter, setFilter] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setAllProduct(response.data.products);
    };
    getData();
  }, []);

  let manageSearch = (element) => {
    let useInput = element.target.value;
    setSearch(useInput);
    console.log(search);
  };
  useEffect(() => {
    if (search == "") {
      setFilter("");
    } else {
      let filterData = allProduct.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filterData);
    }
  }, [allProduct, search]);

  return (
    <div className="bg-[#F5F5F3] relative">
      <Container className="relative px-3 py-1 md:px-0 md:py-0  md:pt-[25px] md:pb-[6px] bg-[#F5F5F3] flex justify-between gap-2 md:gap-0 items-center z-20">
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="category flex items-center gap-[11px] cursor-pointer"
        >
          <RiBarChartHorizontalFill className="text-[#262626] text-lg" />
          <p className="text-[#262626] hidden md:block">Shop by Category</p>
        </div>
        {/* category list============*/}
        <div
          className={`absolute top-full left-0 transition-all duration-300 ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col w-[375px] md:w-[263px] relative">
            <CategoryLI className="group" liText="Accessories" to="product">
              <div className="md:pt-7 h-auto md:h-[320px] gap-x-4 md:gap-x-0 md:pb-8 md:pl-10 md:pr-12 p-2 bg-[#eee4e4] md:bg-white shadow-sm shadow-[#76767629] static md:absolute left-full top-0 opacity-0 hidden group-hover:opacity-100 group-hover:flex duration-500 transition-all">
                <div className="text-nowrap">
                  <h4 className="text-sm md:text-[16px] font-bold text-[#262626] mb-2 md:mb-5">
                    Watch
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Watch 1" to="subcategory" />
                    <SubCatLI liText="Watch 2" to="subcategory" />
                    <SubCatLI liText="Watch 3" to="subcategory" />
                    <SubCatLI liText="Watch 4" to="subcategory" />
                    <SubCatLI liText="Watch 5" to="subcategory" />
                    <SubCatLI liText="Watch 6" to="subcategory" />
                    <SubCatLI liText="Watch 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                <div className="ml:0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Bag
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Bag 1" to="subcategory" />
                    <SubCatLI liText="Bag 2" to="subcategory" />
                    <SubCatLI liText="Bag 3" to="subcategory" />
                    <SubCatLI liText="Bag 4" to="subcategory" />
                    <SubCatLI liText="Bag 5" to="subcategory" />
                    <SubCatLI liText="Bag 6" to="subcategory" />
                    <SubCatLI liText="Bag 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                {/* ---------------- */}
                <div className="ml:0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Beauty Product
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Beauty Product 1" to="subcategory" />
                    <SubCatLI liText="Beauty Product 2" to="subcategory" />
                    <SubCatLI liText="Beauty Product 3" to="subcategory" />
                    <SubCatLI liText="Beauty Product 4" to="subcategory" />
                    <SubCatLI liText="Beauty Product 5" to="subcategory" />
                    <SubCatLI liText="Beauty Product 6" to="subcategory" />
                    <SubCatLI liText="Beauty Product 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                {/* ---------------- */}

                {/* ---------------- */}
              </div>
            </CategoryLI>
            <CategoryLI className="group" liText="Furniture" to="product">
              <div className="md:pt-7 h-auto md:h-[320px] gap-x-4 md:gap-x-0 md:pb-8 md:pl-10 md:pr-12 p-2 bg-[#eee4e4] md:bg-white shadow-sm shadow-[#76767629] static md:absolute left-full top-0 opacity-0 hidden group-hover:opacity-100 group-hover:flex duration-500 transition-all">
                <div className="text-nowrap">
                  <h4 className="text-sm md:text-[16px] font-bold text-[#262626] mb-2 md:mb-5">
                    Bookshelf
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Bookshelf 1" to="subcategory" />
                    <SubCatLI liText="Bookshelf 2" to="subcategory" />
                    <SubCatLI liText="Bookshelf 3" to="subcategory" />
                    <SubCatLI liText="Bookshelf 4" to="subcategory" />
                    <SubCatLI liText="Bookshelf 5" to="subcategory" />
                    <SubCatLI liText="Bookshelf 6" to="subcategory" />
                    <SubCatLI liText="Bookshelf 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                <div className="ml:0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px] font-bold text-[#262626] mb-2 md:mb-5">
                    Showcase
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Showcase 1" to="subcategory" />
                    <SubCatLI liText="Showcase 2" to="subcategory" />
                    <SubCatLI liText="Showcase 3" to="subcategory" />
                    <SubCatLI liText="Showcase 4" to="subcategory" />
                    <SubCatLI liText="Showcase 5" to="subcategory" />
                    <SubCatLI liText="Showcase 6" to="subcategory" />
                    <SubCatLI liText="Showcase 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                {/* ---------------- */}
                <div className="ml:0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Dining
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Dining 1" to="subcategory" />
                    <SubCatLI liText="Dining 2" to="subcategory" />
                    <SubCatLI liText="Dining 3" to="subcategory" />
                    <SubCatLI liText="Dining 4" to="subcategory" />
                    <SubCatLI liText="Dining 5" to="subcategory" />
                    <SubCatLI liText="Dining 6" to="subcategory" />
                    <SubCatLI liText="Dining 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                {/* ---------------- */}
                <div className="ml:0 md:ml-[38px] text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Sofa
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Sofa 1" to="subcategory" />
                    <SubCatLI liText="Sofa 2" to="subcategory" />
                    <SubCatLI liText="Sofa 3" to="subcategory" />
                    <SubCatLI liText="Sofa 4" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
              </div>
            </CategoryLI>
            <CategoryLI className="group" liText="Electronics" to="product">
              <div className="md:pt-7 h-auto md:h-[320px] gap-x-4 md:gap-x-0 md:pb-8 md:pl-10 md:pr-12 p-2 bg-[#eee4e4] md:bg-white shadow-sm shadow-[#76767629] static md:absolute left-full top-0 opacity-0 hidden group-hover:opacity-100 group-hover:flex duration-500 transition-all">
                <div className="text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Phones
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
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
                <div className="ml:0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Computers
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
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
                <div className="ml:0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5">
                    Smart watches
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
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
                <div className="ml:0 md:ml-[38px] text-nowrap">
                  <h4 className="text-sm md:text-[16px] font-bold text-[#262626] mb-2 md:mb-5">
                    Cameras
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
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
            </CategoryLI>
            <CategoryLI className="group" liText="Clothes" to="product">
              <div className="md:pt-7 h-fit md:h-[320px] gap-x-4 md:gap-x-0 md:pb-8 md:pl-10 md:pr-12 p-2 bg-[#eee4e4] md:bg-white shadow-sm shadow-[#76767629] static md:absolute left-full top-0 opacity-0 hidden group-hover:opacity-100 group-hover:flex duration-500 transition-all">
                <div className="text-nowrap">
                  <h4 className="text-sm md:text-[16px]  font-bold text-[#262626] mb-2 md:mb-5 ">
                    Gents
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Gents 1" to="subcategory" />
                    <SubCatLI liText="Gents 2" to="subcategory" />
                    <SubCatLI liText="Gents 3" to="subcategory" />
                    <SubCatLI liText="Gents 4" to="subcategory" />
                    <SubCatLI liText="Gents 5" to="subcategory" />
                    <SubCatLI liText="Gents 6" to="subcategory" />
                    <SubCatLI liText="Gents 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
                <div className="ml-0 md:ml-[50px] text-nowrap">
                  <h4 className="text-sm md:text-[16px] font-bold text-[#262626] mb-2 md:mb-5">
                    Ladies
                  </h4>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    <SubCatLI liText="Ladies 1" to="subcategory" />
                    <SubCatLI liText="Ladies 2" to="subcategory" />
                    <SubCatLI liText="Ladies 3" to="subcategory" />
                    <SubCatLI liText="Ladies 4" to="subcategory" />
                    <SubCatLI liText="Ladies 5" to="subcategory" />
                    <SubCatLI liText="Ladies 6" to="subcategory" />
                    <SubCatLI liText="Ladies 7" to="subcategory" />
                  </ul>
                </div>
                {/* ---------------- */}
              </div>
            </CategoryLI>
            <CategoryLI liText="Bags" to="product" />
            <CategoryLI
              liText="Home appliances"
              to="product"
              className="border-none"
            />
          </ul>

          {/* sub category list------- */}
        </div>
        {/* category list======== */}

        {/* ===========search bar======== */}
        <div className="search relative md:w-auto w-full">
          <input
            type="text"
            value={search}
            onChange={manageSearch}
            className="w-full md:w-[601px] p-2 md:py-4 md:px-5 outline-none"
            placeholder="Search Products"
          />
          <FaSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-[#262626] text-lg cursor-pointer" />
        </div>
        {/* ===========search bar======== */}

        {/* =====user & cart==== */}
        <div className="text-[#262626] hidden md:flex items-center gap-[41px]">
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

      {filter && (
        <ul className="absolute top-full left-0 z-20 p-5 bg-slate-400 grid grid-cols-3 gap-1">
          {filter.map((item, index) => (
            <li
              className="p-8 rounded bg-slate-200 grid grid-cols-4 gap-2 items-center"
              key={index}
            >
              <img className="w-24 bg-slate-300" src={item.thumbnail} alt="" />
              <div className="col-span-2">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-red-800">${item.price}</p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="bg-black hover:bg-slate-300 hover:text-black duration-300 transition-all px-2 py-3 rounded-sm text-white">
                  Add to Cart
                </button>
                <button className="bg-black hover:bg-slate-300 hover:text-black duration-300 transition-all px-2 py-3 rounded-sm text-white">
                  Add to Wishlist
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
