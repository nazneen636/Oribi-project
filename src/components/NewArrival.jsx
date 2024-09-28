import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import ProductItem from "./ProductItem";
import new1 from "/New Arrival/new1.png";
import new2 from "/New Arrival/new2.png";
import new3 from "/New Arrival/new3.png";
import new4 from "/New Arrival/new4.png";
import new5 from "/New Arrival/new5.png";
import new6 from "/New Arrival/new6.png";
import new7 from "/New Arrival/new7.png";
import new8 from "/New Arrival/new8.png";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";

// const newProduct = [
//   {
//     id: 1,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new1,
//     productPrice: null,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 2,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new2,
//     productPrice: "$" + 44.0,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 3,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new3,
//     productPrice: "$" + 24.0,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 4,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new4,
//     productPrice: "$" + 34.0,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 5,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new5,
//     productPrice: null,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 6,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new6,
//     productPrice: "$" + 44.0,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 7,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new7,
//     productPrice: "$" + 24.0,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
//   {
//     id: 8,
//     productTitle: "Basic Crew Neck Tee",
//     productImage: new8,
//     productPrice: "$" + 34.0,
//     productBadge: "New",
//     productColorVariant: "Black",
//   },
// ];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#adabab",
        color: "white",
        fontSize: "16px",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "18px",
        top: "153px",
      }}
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#adabab",
        color: "white",
        fontSize: "16px",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "18px",
        top: "153px",
        zIndex: "20",
      }}
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}

const NewArrival = () => {
  let [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setNewProduct(response.data.products);
    };
    getData();
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div>
      <Container className="max-w-[1640px] mt-8 md:mt-32 mb-10">
        <div className="">
          <Heading headingText="New Arrivals" className="ml-[20px] mb-12" />
          <Slider {...settings} className="">
            {newProduct?.map((item, index) => (
              <ProductItem
                key={index}
                productImage={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
                productColorVariant={item.brand}
                productBadge={item.discountPercentage}
                className="w-full bg-[#adabab]"
              />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
