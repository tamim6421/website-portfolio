import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import SubHome from "./subHome/page";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";

const HomePage = () => {
  return (
    <div className="max-w-[1250px]  mx-auto">
      <Navbar> </Navbar>

      <div className="min-h-screen">
       <Banner></Banner>
        <SubHome></SubHome>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
