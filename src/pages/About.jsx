import React from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";
import product1 from "/New Arrival/new1.png";
import product2 from "/New Arrival/new5.png";

const About = () => {
  return (
    <div>
      <Container>
        <BredCumb />
        <div className="grid grid-cols-2 gap-6">
          <img className="w-full" src={product1} alt="" />
          <img className="w-full" src={product2} alt="" />
        </div>
        <p className="mt-[128px] text-[#262626] text-[39px] leading-[52px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <div className="mt-[118px] grid grid-cols-3 gap-10">
          <div>
            <h4 className="text-[25px] leading-9 text-[#262626] font-bold">
              Our Vision
            </h4>
            <p className="para mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-[25px] leading-9 text-[#262626] font-bold">
              Our Story
            </h4>
            <p className="para mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
          <div>
            <h4 className="text-[25px] leading-9 text-[#262626] font-bold">
              Our Brands
            </h4>
            <p className="para mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
