import React from "react";
import BredCumb from "../layers/BredCumb";
import Container from "../layers/Container";
import ProductFeature from "../components/ProductFeature";
import ProductDescription from "../components/ProductDescription";
import ProductDetailsImg from "../components/productDetailsImg";

const ProductDetails = () => {
  return (
    <div>
      <Container className="pb-[132px]">
        <BredCumb />
        <ProductDetailsImg />
        <ProductFeature />
      </Container>
    </div>
  );
};

export default ProductDetails;
