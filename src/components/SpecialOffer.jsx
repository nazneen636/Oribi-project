import React from "react";
import sp1 from "/special/sp1.png";
import sp2 from "/special/sp2.png";
import sp3 from "/special/sp3.png";
import sp4 from "/special/sp4.png";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import ProductItem from "./ProductItem";

const specialProduct = [
  {
    id: 1,
    productTitle: "Basic Crew Neck Tee",
    productImage: sp1,
    productPrice: null,
    productBadge: "New",
    productColorVariant: "Black",
  },
  {
    id: 2,
    productTitle: "Basic Crew Neck Tee",
    productImage: sp2,
    productPrice: "$" + 44.0,
    productBadge: "New",
    productColorVariant: "Black",
  },
  {
    id: 3,
    productTitle: "Basic Crew Neck Tee",
    productImage: sp3,
    productPrice: "$" + 24.0,
    productBadge: "New",
    productColorVariant: "Black",
  },
  {
    id: 4,
    productTitle: "Basic Crew Neck Tee",
    productImage: sp4,
    productPrice: "$" + 34.0,
    productBadge: "New",
    productColorVariant: "Black",
  },
];

const SpecialOffer = () => {
  return (
    <div>
      <Container className="mt-8 md:mt-32 mb-10">
        <div className="">
          <Heading headingText="Special Offers" />
          <div className="mt-12 flex gap-10 flex-wrap gap-y-[200px]">
            {specialProduct?.map((product) => (
              <ProductItem
                productImage={product?.productImage}
                productTitle={product?.productTitle}
                productPrice={product?.productPrice}
                productColorVariant={product?.productColorVariant}
                productBadge={product?.productBadge}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
