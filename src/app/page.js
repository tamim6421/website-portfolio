import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import SubHome from "./subHome/page";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Navbar> </Navbar>

      <div className="min-h-screen ">
     
        <SubHome></SubHome>
        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
