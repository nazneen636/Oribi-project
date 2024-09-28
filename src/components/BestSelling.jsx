import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Container from "../layers/Container";
import Heading from "../layers/Heading";

const BestSelling = () => {
  let [bestProduct, setBestProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setBestProduct(response.data.products);
    };
    getData();
  }, []);
  return (
    <div>
      <Container className="mt-[217px]">
        <Heading headingText="Best Selling Product" className="mb-12" />
        <div className="grid grid-cols-4 gap-10">
          {bestProduct?.slice(4, 8).map((item, index) => (
            <ProductItem
              key={index}
              productImage={item.thumbnail}
              productTitle={item.title}
              productPrice={item.price}
              productColorVariant={item.brand}
              productBadge={item.discountPercentage}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestSelling;
