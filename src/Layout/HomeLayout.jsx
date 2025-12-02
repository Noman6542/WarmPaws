import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 bg-[#f9fafb]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
