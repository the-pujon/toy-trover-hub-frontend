import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Shop from "./CustomerShop/CustomerShop";
import {useLoaderData} from "react-router-dom";

const Home = () => {
  const loadedToys = useLoaderData().slice(10);
  return (
    <div>
      <Banner />
      <About />
      <Shop loadedToys={loadedToys}/>
    </div>
  );
};

export default Home;
