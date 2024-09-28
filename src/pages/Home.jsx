import React from "react";
import Banner from "../components/Banner";
import Add from "../components/Add";
import NewArrival from "../components/NewArrival";
import Add2 from "../components/Add2";
import SpecialOffer from "../components/SpecialOffer";
import BestSelling from "../components/BestSelling";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <NewArrival />
      <BestSelling />
      <Add2 />
      <SpecialOffer />
    </div>
  );
};

export default Home;
