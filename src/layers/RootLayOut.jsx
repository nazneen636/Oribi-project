import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const RootLayOut = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <Banner />
      <Outlet />
    </div>
  );
};

export default RootLayOut;
