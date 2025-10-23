import React, { useEffect, useState } from 'react';
import Header from './Header';
import Services from './Services';
import WinterCare from './winterCare';
import ExpertVets from './ExpertVets';
import { ClimbingBoxLoader } from 'react-spinners';
import ExtraSection from './ExtraSection';


const Home = () => {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return  <div className="flex justify-center items-center h-screen">
        <ClimbingBoxLoader color="#5e5feb" size={20} />
      </div>};
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <WinterCare ></WinterCare>
      <ExpertVets></ExpertVets>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;