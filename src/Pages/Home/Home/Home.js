import React from "react";
import Banner from "../Banner/Banner";
import HomeInventory from "../HomeInventory/HomeInventory";
import StockVsDeliverdChart from "../StockVSDeliverdChart/StockVsDeliverdChart";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <StockVsDeliverdChart></StockVsDeliverdChart>
    </div>
  );
};

export default Home;
