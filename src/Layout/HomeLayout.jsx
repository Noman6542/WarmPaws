import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';


const HomeLayout = () => {
  
  return (
    <div className='max-w-[1600px] mx-auto bg-[#f9fafb]'> 
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;