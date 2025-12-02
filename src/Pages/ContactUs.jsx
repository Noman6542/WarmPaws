import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#4338ca] mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">
              123, Paw Street, Keraniganj, Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
            <p className="text-gray-600">+880 1577-036525</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600">support@warmpaws.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">Office Hours</h2>
            <p className="text-gray-600">Sat - Thu: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#4338ca]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#4338ca]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#4338ca]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#5e5feb] text-white px-6 py-3 rounded-md hover:bg-[#4338ca] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
