import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <h1 className="text-4xl font-bold text-[#4338ca] mb-6">About Us</h1>
      <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed">
        Welcome to WarmPaws! We are dedicated to providing the best care
        and guidance for your beloved pets. Our mission is to make every pet
        feel loved and healthy, offering expert advice, services, and support
        for pet owners everywhere.
      </p>
      <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed mt-4">
        We believe that every pet deserves love and attention, and our team is
        committed to helping you make the best decisions for your furry friends.
      </p>
    </div>
  );
};

export default AboutUs;
