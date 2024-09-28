import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItem from "../components/ProductItem";

// const items = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//   11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
//   6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//   11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
// ];

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setItems(data.products);
        console.log(data);
      } catch (error) {
        console.error("Product is not found", error);
      }
    };
    getData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 gap-y-[50px] mt-[60px]">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex justify-between items-end mt-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="w-[36px] h-[36px] text-[#767676] border border-[#F0F0F0]"
          pageLinkClassName="w-full h-full flex items-center justify-center text-sm"
          previousClassName="hidden"
          nextClassName="hidden"
          containerClassName="flex gap-4"
          activeClassName="bg-black text-white"
        />
        <p className="leading-[30px] text-[#767676] text-base">
          Products from {items.length == 0 ? 0 : itemOffset + 1} to{" "}
          {endOffset > items.length ? items.length : endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </>
  );
};

let Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <ProductItem
            productTitle={item.title}
            productImage={item.thumbnail}
            productBadge={item.discountPercentage}
            productPrice={item.price}
            productColorVariant={item.brand}
            key={index}
          />
        ))}
    </>
  );
};

export default Pagination;
