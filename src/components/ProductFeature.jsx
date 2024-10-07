import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import ProductDescription from "../components/ProductDescription";
import ProductReview from "../components/ProductReview";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import axios from "axios";
import { IoMdArrowDropdown } from "react-icons/io";

const ProductFeature = () => {
  let [product, setProduct] = useState();
  let [size, setSize] = useState(false);
  let [sizeContent, setSizeContent] = useState("S");
  let [quantity, setQuantity] = useState(1);
  let [feature, setFeature] = useState(false);
  let [shipping, setShipping] = useState(false);
  let [description, setDescription] = useState(false);
  let [review, setReview] = useState(true);

  let manageSize = (e) => {
    setSizeContent(e.target.innerText);
  };
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setProduct(response.data.products);
    };
    getData();
  }, []);
  return (
    <div>
      <Container className="">
        <Heading headingText="Product" />
        <ul className="mt-6 flex flex-col gap-5 w-[780px]">
          <li className="flex gap-6">
            <span className="flex gap-[2px] items-center text-[#FFD881]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span>1 Review</span>
          </li>
          <li className="flex items-center gap-6">
            <del className="text-base text-[#767676]">$88.00</del>
            <span className="font-bold text-xl text-[#262626]">$44.00</span>
          </li>
          <hr className="border-[#F0F0F0]" />
          <li className="flex items-center gap-4">
            <b className="detailsTitle w-[90px]">SIZE:</b>
            <div
              onClick={() => {
                setSize(!size);
              }}
              className="relative w-44 px-5 py-1 border border-[#F0F0F0] flex justify-between items-center"
            >
              <span className="text-base leading-[30px]">{sizeContent}</span>
              <IoMdArrowDropdown
                className={`text-2xl duration-500 transition-all ${
                  size ? "rotate-180" : "-rotate-0"
                }`}
              />
              <ul
                className={`absolute w-full left-0 duration-300 transition-all ${
                  size
                    ? "opacity-100 visible top-full "
                    : "opacity-0 invisible top-[80%]"
                } `}
                onClick={manageSize}
              >
                {["S", "M", "L", "XL", "XXL"].map((sizeOption, index) => (
                  <li
                    key={index}
                    className="border text-white bg-slate-800 border-[#f0f0f00f] py-1 px-5 leading-[30px] hover:bg-white hover:text-black"
                  >
                    {sizeOption}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <b className="detailsTitle w-[90px]">QUANTITY:</b>
            <div className="grid grid-cols-3 w-44 border border-[#F0F0F0] py-1">
              <span
                onClick={() => {
                  setQuantity(() => (quantity > 1 ? quantity-- : quantity));
                }}
                className="center text-xl leading-[30px]"
              >
                -
              </span>
              <span className="center text-base leading-[30px]">
                {quantity}
              </span>
              <span
                onClick={() => {
                  setQuantity(() => quantity++);
                }}
                className="center text-base leading-[30px]"
              >
                +
              </span>
            </div>
          </li>
          <hr className="border-[#F0F0F0]" />
          <li className="flex items-center gap-[26px]">
            <b className="text-base leading-6 text-[#262626]">STATUS:</b>
            <span className="text-base leading-[30px] text-[#767676]">
              In stock
            </span>
          </li>
          <li className="flex gap-5">
            <button className="text-[#262626] font-bold text-sm px-10 py-4 bg-white border border-[#262626] hover:bg-black hover:text-white duration-500 transition-all">
              Add to Wish List
            </button>
            <button className="text-[#262626] font-bold text-sm px-10 py-4 bg-white border border-[#262626] hover:bg-black hover:text-white duration-500 transition-all">
              Add to Cart
            </button>
          </li>
          <hr className="border-[#F0F0F0]" />
          <li className="w-[780px]">
            <div className="flex justify-between items-center">
              <b className="detailsTitle">FEATURES & DETAILS</b>
              <div className="relative">
                <FaPlus
                  onClick={() => {
                    setFeature(!feature);
                  }}
                  className={`text-[#262626] absolute right-0 bottom-[-9px] ${
                    feature ? "opacity-0" : "opacity-100"
                  }`}
                />
                <FaMinus
                  onClick={() => {
                    setFeature(!feature);
                  }}
                  className={`text-[#262626] absolute right-0 bottom-[-9px] ${
                    feature ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <hr className="border-[#F0F0F0] mt-6" />
            <p
              className={`mt-5 text-base leading-[30px] ${
                feature ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li className="w-[780px]">
            <div className="flex justify-between items-center">
              <b className="detailsTitle">SHIPPING & RETURNS</b>
              <div className="relative">
                <FaPlus
                  onClick={() => {
                    setShipping(!shipping);
                  }}
                  className={`text-[#262626] absolute right-0 bottom-[-9px] ${
                    shipping ? "opacity-0" : "opacity-100"
                  }`}
                />
                <FaMinus
                  onClick={() => {
                    setShipping(!shipping);
                  }}
                  className={`text-[#262626] absolute right-0 bottom-[-9px] ${
                    shipping ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <hr className="border-[#F0F0F0] mt-6" />
            <p
              className={`mt-5 text-base leading-[30px] ${
                shipping ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
        </ul>
        <div className="mt-[123px] flex gap-[62px]">
          <b
            onClick={() => {
              setDescription(true);
              setReview(false);
            }}
            className={`mb-11 text-xl leading-[29px] ${
              description ? "text-[#262626]" : "text-[#767676]"
            }`}
          >
            Description
          </b>
          <b
            onClick={() => {
              setDescription(false);
              setReview(true);
            }}
            className={`mb-11 text-xl leading-[29px] ${
              review ? "text-[#262626]" : "text-[#767676]"
            }`}
          >
            Reviews (1)
          </b>
        </div>
        {review && <ProductReview />}
        {description && <ProductDescription />}
      </Container>
    </div>
  );
};

export default ProductFeature;
