import React from "react";
import Counting from "../Other/Counting";
import Service from "../Pages/Service";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Service />
      <Counting />
    </div>
  );
};

export default Home;
