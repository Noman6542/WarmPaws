import React, { useEffect, useState } from "react";

const WinterCare = () => {
  const [cares, setCares] = useState([]);

  useEffect(() => {
    fetch("/Tips.json")
      .then((res) => res.json())
      .then((data) => setCares(data));
  }, []);
  return (
    <div className="text-center mt-5 px-5">
      <h1 className="font-bold text-4xl">Winter Care Tips for Pets</h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-around gap-6 mt-10">
        {cares.map((care) => (
          <div
            key={care.id}
            className="p-6 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg hover:scale-[1.02] w-full sm:w-[45%] md:w-[30%]"
          >
            <div className="mb-4">{care.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {care.title}
            </h3>
            <p className="text-gray-600 text-sm">{care.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCare;
