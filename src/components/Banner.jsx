import React, { useState } from "react";
import banner01 from "/banner01.png";
import banner02 from "/banner02.png";
import banner03 from "/banner03.png";
import banner04 from "/banner04.png";
import banner05 from "/banner05.png";
import Image from "../layers/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";

const Banner = () => {
  let [active, setActive] = useState(0);
  let navigate = useNavigate();

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (item, index) => {
      setActive(index);
    },
    appendDots: (dots) => (
      <div
        style={{
          background: "transparent",
          padding: "0",
          borderRadius: "0",
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-[22px] text-[10px] flex items-center h-[30px] border-r-2 ${
          i == active
            ? "text-[#262626] border-[#262626]"
            : "text-transparent border-[#ffffff]"
        }`}
        // style={{
        //   borderRight:'2px solid #262626'
        // }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                background: "transparent",
                padding: "0",
                borderRadius: "0",
                position: "absolute",
                left: "50%",
                bottom: "8%",
                transform: "translateX(-50%)",
              }}
            >
              <ul style={{ margin: "0px", display: "flex" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-[30px] text-[10px] flex items-center justify-center h-[20px] border-b-2 ${
                i == active
                  ? "text-[#262626] border-[#262626]"
                  : "text-transparent border-[#ffffff]"
              }`}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="relative z-10">
      <Slider {...settings}>
        <img
          onClick={() => navigate("/banner")}
          src={banner01}
          alt={banner01}
          className="w-full"
        />
        <img
          onClick={() => navigate("/banner")}
          src={banner02}
          alt={banner02}
          className="w-full"
        />
        <img
          onClick={() => navigate("/banner")}
          src={banner03}
          alt={banner03}
          className="w-full"
        />
        <img
          onClick={() => navigate("/banner")}
          src={banner05}
          alt={banner05}
          className="w-full"
        />
      </Slider>

      {/* banner last part */}

      <div className="flex justify-between md:justify-around p-1 md:px-0 md:py-7 border-b border-[#F0F0F0] shadow-md shadow-[#26262653]">
        <p className="text-[12px] md:text-[16px] text-[#6D6D6D] flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-self-center">
          <PiNumberTwoBold className="text-[#262626] text-sm md:text-2xl" /> Two
          years warranty
        </p>
        <p className="text-[12px] md:text-[16px] text-[#6D6D6D] flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-self-center">
          <MdLocalShipping className="text-[#262626] text-sm md:text-2xl" />{" "}
          Free shipping
        </p>
        <p className="text-[12px] md:text-[16px] text-[#6D6D6D] flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-self-center">
          <IoMdRefresh className="rotate-90 text-[#262626] text-sm md:text-2xl" />{" "}
          Return policy in 30 days
        </p>
      </div>

      {/* banner last part */}
    </div>
  );
};

export default Banner;
