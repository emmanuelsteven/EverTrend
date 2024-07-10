import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import Heropage from "../components/Heropage/Heropage";
import Categories from "../components/Categories/Categories";
import Arrivals from "../components/Arrivals/Arrivals";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Heropage />
      <Categories />
      <Arrivals />
      <Footer />
    </>
  );
};

export default Homepage;
