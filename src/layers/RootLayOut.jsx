import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const RootLayOut = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayOut;
