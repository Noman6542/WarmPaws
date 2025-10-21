import React from 'react';

const Header = () => {
  return (
  <div className="hero bg-[#5e5feb] text-white rounded-3xl w-11/12 md:w-8/12 lg:w-7/12 mx-auto mt-10 mb-10 p-6 md:p-10">
  <div className="hero-content text-center">
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        WarmPaws: Cozy Winter Care
      </h1>
      <p className="text-sm sm:text-base md:text-lg py-4">
        Ensure your furry friend stays warm, safe, and happy during the cold season with our specialized services.
      </p>
      <button className="btn btn-primary rounded-full px-6 py-3 text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#5e5feb] transition duration-300">
        Explore Service
      </button>
    </div>
  </div>
</div>

  );
};

export default Header;