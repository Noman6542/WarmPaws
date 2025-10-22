import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import Services from '../Pages/Services';
import WinterCare from '../Pages/winterCare';
import ExpertVets from '../Pages/ExpertVets';

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