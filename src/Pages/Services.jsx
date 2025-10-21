import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { toast } from "react-toastify";

const Services = () => {
  const [pets, setPets] = useState([]);
  console.log(pets);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div className="text-center text-5xl ">
      <h1 className="font-bold">Popular Winter Care Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {pets.map((pet) => (
          <div
            key={pet.serviceId}
            className="border p-4 mt-10 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={pet.image}
              alt={pet.serviceName}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold">{pet.serviceName}</h2>
            <div className="flex justify-between items-center mt-3">
              <p className="text-gray text-[18px]">{pet.category}</p>
            <p className="text-yellow text-[18px] flex justify-around items-center gap-2"><FcRating/> {pet.rating} </p>
            </div>
            <p className="text-gray  font-semibold mt-2">${pet.price}</p>
            
            <button className="btn btn-primary mt-3 hover:bg-transparent hover:font-semibold hover:text-black">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
