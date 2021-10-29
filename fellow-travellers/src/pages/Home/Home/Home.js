import React from "react";
import Packages from "../../Packages/Packages/Packages";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServices/HomeServices";
import Reviews from "../Reviews/Reviews";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeServices></HomeServices>
      <WhyUs />
      <Reviews></Reviews>
      <Packages></Packages>
    </div>
  );
};

export default Home;
