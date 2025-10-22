import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const service = useLoaderData();
  const {id} =useParams();
  const [view,setView] =useState({});
  const [formData, setFormData] = useState({ name: "", email: "" });
  useEffect(()=>{
  if (Array.isArray(service) && service.length > 0) {
    const viewDetails = service.find((singleview) => singleview.serviceId === parseInt(id));

    setView(viewDetails || {}); 
  } else { 
    setView({}); 
  }
},[service, id])
console.log("id:", id, "serviceId:", service.map(s => s.serviceId));


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  toast.success("Service booked successfully!");
  setFormData({ name: "", email: "" });
  };

  if (!service) return <h1>Service not found</h1>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Service Details */}
      <h1 className="text-3xl font-bold mb-2">{view.serviceName}</h1>
      <img
        src={view.image}
        alt={view.serviceName}
        className="w-full h-100 object-cover rounded-md mb-4"
      />
      <p>
        <span>Provider:</span> {view.providerName} (
        {view.providerEmail})
      </p>
      <p>
        <span>Price:</span> ${view.price}
      </p>
      <p>
        <span>Rating:</span> {view.rating}
      </p>
      <p>
        <span>Slots Available:</span> {view.slotsAvailable}
      </p>
      <p>
        <span>Description:</span> {view.description}
      </p>
      <p>
        <span>Category:</span> {view.category}
      </p>

      {/* Book Service Form */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Book Service</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
           value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
           value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Book Now
        </button>
        <div>
          <Link className='btn btn-primary' to='/'>Back to Home</Link>
        </div>
      </form>
    </div>
  );
};

export default ViewDetails;
