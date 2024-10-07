import React, { useState } from "react";
import Container from "../layers/Container";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetailsImg = () => {
  let [quantity, setQuantity] = useState(1);
  const productDetails = [
    {
      title: "Annibale Colombo Bed",
      description:
        "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      src: [
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
      ],
      category: "furniture",
      price: 1899.99,
    },
  ];
  return (
    <div>
      <Container className="mb-24">
        {productDetails.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="left flex gap-8">
              <div className="smallImg flex flex-col justify-between">
                <img
                  src={item.src[1]}
                  alt=""
                  className="h-[170px] bg-slate-800 rounded-xl"
                />
                <img
                  src={item.src[2]}
                  alt=""
                  className="h-[170px] bg-slate-800 rounded-xl"
                />
                <img
                  src={item.src[3]}
                  alt=""
                  className="h-[170px] bg-slate-800 rounded-xl"
                />
              </div>
              <div className="bigImg">
                <img
                  src={item.src[0]}
                  alt=""
                  className="w-[600px] bg-slate-800 rounded-2xl"
                />
              </div>
            </div>
            <div className="right flex flex-col gap-4">
              <h3 className="text-[#262626] text-6xl">{item.title}</h3>
              <p className="text-xl tracking-wider w-[600px] my-8">
                {item.description}
              </p>
              <span className="text-3xl text-[#262626] font-bold">
                ${item.price}
              </span>
              <div className="flex gap-6 items-center mt-8 w-full">
                <div className="grid grid-cols-3 w-1/2 py-6 bg-slate-100">
                  <span
                    onClick={() => {
                      setQuantity(() => (quantity > 1 ? quantity-- : quantity));
                    }}
                    className="text-xl font-bold text-[#262626] flex items-center justify-center cursor-pointer"
                  >
                    <FaMinus />
                  </span>
                  <span className="text-3xl font-bold text-[#262626] flex items-center justify-center ">
                    {quantity}
                  </span>
                  <span
                    onClick={() => {
                      setQuantity(() => quantity++);
                    }}
                    className="text-xl font-bold text-[#262626] flex items-center justify-center cursor-pointer"
                  >
                    <FaPlus />
                  </span>
                </div>
                <button className="w-1/2 text-[#262626] font-bold text-2xl px-10 py-5 bg-white border border-[#262626] hover:bg-black hover:text-white duration-500 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProductDetailsImg;
