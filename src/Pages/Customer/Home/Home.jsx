import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Shop from "./CustomerShop/CustomerShop";
import { useLoaderData } from "react-router-dom";
import Gellary from "./Gellary/Gellary";
import "./Home.scss";
import WeProvide from "./WhatWeProvide/WhatWeProvide";

const Home = () => {
  const loadedToys = useLoaderData();
  //console.log(loadedToys);
  return (
    <div>
      <Banner />
      <About />

      <div className="wrapper h-screen">
        <div className="three text-6xl font-semibold mb-14">
          <h1>Check Our Gallery</h1>
        </div>
        <Gellary />
      </div>

      <div className="wrapper mt-16">
        <div className="three text-4xl lg:text-6xl font-semibold mb-14">
          <h1>Check Our Popular Toys</h1>
        </div>
        <Shop loadedToys={loadedToys} />
      </div>

      <div className="wrapper my-16">
        <div className="three text-6xl font-semibold mb-14">
          <h1>What We Provide</h1>
        </div>
        <WeProvide />
      </div>
    </div>
  );
};

export default Home;
