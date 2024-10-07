import React, { useState } from "react";
import Container from "../layers/Container";
import { FaStar } from "react-icons/fa";

const ProductReview = () => {
  let [name, setName] = useState();
  let [nameErr, setNameErr] = useState(false);
  let [email, setEmail] = useState();
  let [emailErr, setEmailErr] = useState(false);
  let [review, setReview] = useState();

  let nameInput = (e) => {
    let nameCheck = e.target.value;
    setName(nameCheck);
    setNameErr("");
  };
  let emailInput = (e) => {
    let emailCheck = e.target.value;
    setEmail(emailCheck);
    setEmailErr("");
  };

  let reviewInput = (e) => {
    let reviewCheck = e.target.value;
    setReview(reviewCheck);
  };

  let manageReview = (e) => {
    e.preventDefault();
    if (!name) {
      setNameErr("Name is required");
    }
    if (!email) {
      setEmailErr("Email is required");
    }
  };

  return (
    <div>
      <Container className="">
        <ul className="flex flex-col gap-10">
          <li className="text-sm leading-[30px]">1 review for Product</li>
          <hr className="border-[#F0F0F0]" />
          <li className="flex justify-between items-center text-sm leading-[30px]">
            <div className="flex gap-9">
              <b className="">John Ford</b>
              <span className="flex gap-[2px] items-center text-[#FFD881]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
            <span>6 months ago</span>
          </li>
          <li className="flex gap-9 text-sm leading-[30px]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </li>
          <hr className=" border-[#F0F0F0]" />
        </ul>
        <div className="review-form mt-14">
          <h4 className="text-xl font-bold text-[#262626]">Add a Review</h4>
          <form className="mt-12 flex flex-col gap-6 w-[779px]" action="">
            <div className="flex flex-col gap-3 relative">
              <label
                className="text-base leading-6 text-[#262626]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={nameInput}
                className="text-sm py-4 px-1 outline-none border-b border-b-[#F0F0F0]"
                value={name}
                type="text"
                id="name"
                placeholder="Your name here"
              />
              <p className="text-red-700 absolute left-0 top-[110%]">
                {nameErr}
              </p>
            </div>
            <div className="flex flex-col gap-3 relative">
              <label
                className="text-base leading-6 text-[#262626]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={emailInput}
                className="text-sm py-4 px-1 outline-none border-b border-b-[#F0F0F0]"
                value={email}
                type="email"
                placeholder="Your email here"
                id="email"
              />
              <p className="text-red-700 absolute left-0 top-[110%]">
                {emailErr}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="text-base leading-6 text-[#262626]"
                htmlFor="review"
              >
                Review
              </label>
              <textarea
                onChange={reviewInput}
                className="text-sm h-[110px] resize-none py-4 px-1 outline-none border-b border-b-[#F0F0F0]"
                value={review}
                placeholder="Your review here"
                id="review"
              />
            </div>
            <button
              onClick={manageReview}
              className="mt-11 text-[#262626] font-bold text-sm px-10 py-4 bg-white border border-[#262626] hover:bg-black hover:text-white duration-500 transition-all w-[200px]"
            >
              Post
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ProductReview;
