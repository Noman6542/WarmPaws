import React from "react";

const AppointmentSection = () => {
  return (
    <section className="bg-[#5e5feb] py-16 mb-6">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Make an Appointment Today
        </h2>
        <p className="mb-8 text-lg">
          Book a visit with our expert vets and give your beloved pets the care they deserve.
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md w-full md:w-1/4 text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md w-full md:w-1/4 text-black focus:outline-none"
          />
          <input
            type="date"
            className="p-3 rounded-md w-full md:w-1/4 text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#5e5feb] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
