import React from "react";
import Counting from "../Other/Counting";
import Courses from "../Pages/Courses";
import Package from "../Pages/Package";
import Service from "../Pages/Service";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Service />
      <Counting />
      <Courses />
      <Package />
    </div>
  );
};

export default Home;
