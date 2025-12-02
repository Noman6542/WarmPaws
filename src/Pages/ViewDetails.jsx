import React, { useEffect, useState, useContext } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { FcRating } from "react-icons/fc";

const ViewDetails = () => {
  const service = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [view, setView] = useState({});
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    bookingDate: "",
    isModalOpen: false,
  });

  useEffect(() => {
    if (Array.isArray(service) && service.length > 0) {
      const viewDetails = service.find(
        (singleview) => singleview.serviceId === parseInt(id)
      );
      setView(viewDetails || {});
    } else {
      setView({});
    }
  }, [service, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleModal = () => {
    setFormData((prevData) => ({
      ...prevData,
      isModalOpen: !prevData.isModalOpen,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = {
      serviceId: view.serviceId,
      serviceName: view.serviceName,
      price: view.price,
      providerName: view.providerName,
      userEmail: formData.email,
      userName: formData.name,
      bookingDate: formData.bookingDate,
      bookingTime: new Date().toLocaleString(),
    };

    console.log("Booking Details:", bookingDetails);

    toast.success(
      `'${view.serviceName}'The service is booked for the  ${formData.bookingDate}`
    );

    toggleModal();
  };
  const handleBookingClick = () => {
   if (user) {
 toggleModal();
 } else {

 toast.warn("Please login first to make a booking.");
 navigate("/login"); 
 }
 };

  if (!service)
    return <h1 className="text-center text-xl mt-10">Service not found.</h1>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src={view.image}
            alt={view.serviceName}
            className="w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-[#4338ca] mb-2">
            {view.serviceName}
          </h1>
          <hr />
          <p className="text-2xl font-bold text-green-600">
            <span className="text-gray-500">Price:</span> ${view.price}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Provider:</span> {view.providerName}{" "}
            <span className="text-sm text-gray-400">
              ({view.providerEmail})
            </span>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold flex items-center gap-2">
              Rating:
            </span>{" "}
            <FcRating /> {view.rating}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Slots Available:</span>{" "}
            {view.slotsAvailable}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {view.category}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            <span className="font-semibold text-lg">Description:</span> <br />
            {view.description}
          </p>
          <hr className="my-4" />

          
          <h2 className="text-2xl font-bold mt-2 text-[#5e5feb]">
            Book This Service
          </h2>
          <button
            onClick={toggleModal}
            onClick={handleBookingClick}
            className="bg-[#5e5feb] text-white p-3 rounded-lg text-lg font-semibold hover:bg-[#4338ca] transition shadow-md"
          >
            Confirm Booking &rarr;
          </button>

          <Link
            className="text-[#5e5feb] hover:underline mt-2 text-center"
            to="/all-items"
          >
            &larr; Back to Services
          </Link>
        </div>
      </div>

     
      {formData.isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Confirm Booking: {view.serviceName}
            </h2>
            <p className="mb-4">
              Price:{" "}
              <span className="font-semibold text-xl text-green-600">
                ${view.price}
              </span>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                readOnly={!!user} // যদি user লগইন থাকে তবে এটি readOnly থাকবে
                className={`border p-3 rounded focus:outline-none ${
                  user
                    ? "bg-gray-200 cursor-not-allowed"
                    : "focus:ring-2 focus:ring-blue-400"
                }`}
              />

              {/* Date Picker Input */}
              <input
                type="date"
                name="bookingDate"
                placeholder="Select Booking Date"
                value={formData.bookingDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]} // আজকের দিনের আগের তারিখ নির্বাচন করা যাবে না
                className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-500 text-white p-3 rounded font-semibold hover:bg-green-600 transition"
              >
                Confirm Booking
              </button>

              {/* Cancel Button */}
              <button
                type="button"
                onClick={toggleModal}
                className="bg-red-500 text-white p-3 rounded font-semibold hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
