import React from 'react';
import { useLoaderData } from 'react-router';

const ExtraSection = () => {
  const careData = useLoaderData();
  return (
     <div className="bg-base-200 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        ❄️ Winter Care Tips for Pets
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {careData.map((tips) => (
          <div
            key={tips.id}
            className="p-6 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg hover:scale-[1.02] text-center"
          >
            <div className="mb-4 flex justify-center">{tips.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {tips.title}
            </h3>
            <p className="text-gray-600 text-sm">{tips.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection;