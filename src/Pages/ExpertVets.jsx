import React, { useEffect, useState } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';

const ExpertVets = () => {
  const[vets,setVets]=useState([]);
  useEffect(()=>{
    fetch('/vets.json').then(res=>res.json()).then(data=>setVets(data))
  })
  return (
    <div className="py-12">
      <h2 className="text-3xl flex gap-2 justify-center items-center font-bold text-center text-gray-800 mb-10">
        Meet Our Expert Vets <FaUserDoctor></FaUserDoctor>
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-5'>
        {
          vets.map(vet=>(<div key={vet.id} className="bg-white rounded-xl shadow-md text-center p-6 hover:shadow-lg transition duration-300">
      <img src={vet.image} alt={vet.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800">{vet.name}</h3>
      <p className="text-gray-600">{vet.specialty}</p>
    </div>))
        }
      </div>
    </div>
  );
};

export default ExpertVets;