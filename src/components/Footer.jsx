import React from "react";
import Container from "../layers/Container";
import Li from "../layers/Li";
import footerLogo from "/footer-logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] w-full mt-44 py-14">
      <Container className="">
        <div className="upper flex gap-64">
          <div className="right flex gap-36">
            <div className="right-1">
              <h4 className="font-bold mb-4 text-[#262626] text-[16px] leading-6">
                MENU
              </h4>
              <ul className="flex flex-col gap-1">
                <Li
                  liText="Home"
                  to="/home"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Shop"
                  to="/shop"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="About"
                  to="/about"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Contact"
                  to="/contact"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Journal"
                  to="/journal"
                  className="inline-block text-[#6D6D6D] hover:text-[#6d6d6d]"
                />
              </ul>
            </div>
            <div className="right-2">
              <h4 className="font-bold mb-4 text-[#262626] text-[16px] leading-6">
                SHOP
              </h4>
              <ul className="flex flex-col gap-1">
                <Li
                  liText="Category 1"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Category 2"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Category 3"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Category 4"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Category 5"
                  to="/category"
                  className="inline-block text-[#6D6D6D] hover:text-[#6d6d6d]"
                />
              </ul>
            </div>
            <div className="right-3">
              <h4 className="font-bold mb-4 text-[#262626] text-[16px] leading-6 ">
                HELP
              </h4>
              <ul className="flex flex-col gap-1">
                <Li
                  liText="Privacy Policy"
                  to="/policy"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Terms & Conditions"
                  to="/terms"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Special E-shop"
                  to="/eshop"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Shipping"
                  to="/shipping"
                  className="inline-block text-[#6D6D6D] leading-6 hover:text-[#6d6d6d]"
                />
                <Li
                  liText="Secure Payments"
                  to="/payments"
                  className="text-[#6D6D6D] hover:text-[#6d6d6d]"
                />
              </ul>
            </div>
            <div className="right-4">
              <a
                href="tel"
                className="block font-bold mb-[1px] text-[#262626] text-[16px] leading-6"
              >
                (052) 611-5711
              </a>
              <a
                href="mailto"
                className="block font-bold mb-4 text-[#262626] text-[16px] leading-6"
              >
                company@domain.com
              </a>
              <ul className="flex flex-col gap-1">
                <Li
                  liText="575 Crescent Ave. Quakertown, PA 1895"
                  className="inline-block text-[#6D6D6D] hover:text-[#6D6D6D] leading-6"
                />
              </ul>
            </div>
          </div>
          <div className="left">
            <img src={footerLogo} alt={footerLogo} />
          </div>
        </div>
        <div className="bottom py-0 mt-16 flex items-center justify-between gap-[1119px]">
          <div className="left text-[#262626] flex gap-6">
            <a href="https://www.facebook.com" className="">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com" className="">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com" className="">
              <FaInstagram />
            </a>
          </div>
          <div className="right">
            <p className="text-[#6D6D6D] leading-6">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
