import React from "react";
import add1 from "/add/Ad_1.jpg";
import add2 from "/add/Ad_2.jpg";
import add3 from "/add/Ad_3.png";
import Container from "../layers/Container";
import Image from "../layers/Image";

const Add = () => {
  return (
    <div className="h-auto md:h-[780px] md: mt-10 md:mt-[174px]">
      <Container className=" grid grid-cols-2 grid-rows-2 gap-3 md:gap-10">
        <div className="row-span-2">
          <Image src={add1} />
        </div>
        <div className="">
          <Image src={add2} />
        </div>
        <div className="">
          <Image src={add3} />
        </div>
      </Container>
    </div>
  );
};

export default Add;
