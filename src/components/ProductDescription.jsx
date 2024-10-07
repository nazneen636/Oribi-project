import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import axios from "axios";

const ProductDescription = () => {
  let [product, setProduct] = useState();
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://dummyjson.com/products");
      setProduct(res.data.products);
    };
    getData();
  }, []);
  return (
    <div>
      <Container>
        <p className="bg-red-100 p-8 text-base tracking-wider leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
          dicta qui laboriosam earum itaque exercitationem, ducimus non corrupti
          distinctio impedit, amet ipsam aperiam, quibusdam sit! Itaque odit
          harum ullam ut corporis ratione sed laboriosam ad recusandae
          necessitatibus! Voluptates velit eum eaque accusantium voluptate
          impedit ab illum nostrum ipsum! Suscipit ad modi rem, error impedit
          necessitatibus cupiditate? Sint eaque dolores ipsam rem dolore aperiam
          hic perferendis cumque facilis repellat quos quisquam nisi fuga est
          aspernatur expedita architecto, eum qui sunt inventore praesentium.
          Itaque recusandae quis minus esse officiis dicta. Placeat amet tenetur
          deleniti obcaecati consectetur id natus similique optio recusandae.
        </p>
      </Container>
    </div>
  );
};

export default ProductDescription;
