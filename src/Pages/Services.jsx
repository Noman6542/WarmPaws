import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ClimbingBoxLoader } from "react-spinners";

const Services = () => {
  const [pets, setPets] = useState([]);
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
    return (
      <div className="flex justify-center items-center h-screen">
        <ClimbingBoxLoader color="#5e5feb" size={20} />
      </div>
    );
  }

  return (
    <div className="text-center text-4xl font-bold">
      <p className="text-[#fa6c41] my-4 font-semibold">Trending Products</p>
      <h1>Popular Winter Care Services</h1>
      <div className="mt-10 px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {pets.map((pet) => (
            <SwiperSlide key={pet.serviceId}>
              <div className=" p-4 my-7 rounded-lg shadow hover:shadow-lg transition bg-white">
                <img
                  src={pet.image}
                  alt={pet.serviceName}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold">{pet.serviceName}</h2>

                <div className="flex justify-between items-center mt-3 text-[18px]">
                  <p className="text-gray-600">{pet.category}</p>
                  <p className="flex items-center gap-2 text-yellow-600">
                    <FcRating /> {pet.rating}
                  </p>
                </div>

                <p className="text-gray-800 font-semibold mt-2">${pet.price}</p>

                <Link
                  to={`/view-details/${pet.serviceId}`}
                  className="btn btn-primary mt-3 hover:bg-transparent hover:font-semibold hover:text-black"
                >
                  View Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
