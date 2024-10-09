import React, { useState } from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";
import { Image } from "antd";
import { IoClose } from "react-icons/io5";
import product1 from "/New Arrival/new1.png";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  let [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Container>
        <BredCumb />
        <div className="flex gap-1 bg-slate-200 py-8 px-5">
          <div className="header w-1/5">Product</div>
          <div className="header w-1/5">Size</div>
          <div className="header w-1/5">Price</div>
          <div className="header w-1/5">Quantity</div>
          <div className="header w-1/5">Total</div>
        </div>
        <div className="flex items-center gap-1 bg-[#F5F5F3]  border border-[#F0F0F0] py-[30px] px-5">
          <div className="w-1/5 header flex gap-1 items-center">
            <IoClose className="header" />
            <Image
              className="!w-[100px] !h-[100px]"
              src={product1}
              alt={product1}
            />
            <h4 className="header">Product name</h4>
          </div>
          <div className="w-1/5 header">
            <ul className="flex flex-col gap-1">
              <li>
                <input name="size" type="radio" className="" /> S
              </li>
              <li>
                <input name="size" type="radio" className="" /> M
              </li>
              <li>
                <input name="size" type="radio" className="" /> L
              </li>
              <li>
                <input name="size" type="radio" className="" /> XL
              </li>
            </ul>
          </div>
          <div className="w-1/5 header">
            <h4 className="text-xl header">$44.00</h4>
          </div>
          <div className="w-1/5">
            <div className="header w-36 grid grid-cols-3 border border-[#F0F0F0]">
              <div
                onClick={() =>
                  setQuantity(() => (quantity > 1 ? quantity-- : quantity))
                }
                className="flex justify-center items-center py-2 px-1"
              >
                <FaMinus />
              </div>
              <div className="flex justify-center items-center py-2 px-1 header">
                {quantity}
              </div>
              <div
                onClick={() => setQuantity(() => quantity++)}
                className="flex justify-center items-center py-2 px-1"
              >
                <FaPlus />
              </div>
            </div>
          </div>
          <div className="w-1/5 header">
            <h4 className="text-xl header">$44.00</h4>
          </div>
        </div>
        <div className="coupon"></div>
      </Container>
    </div>
  );
};

export default Cart;
