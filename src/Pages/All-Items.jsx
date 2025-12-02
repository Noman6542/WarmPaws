import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { ClimbingBoxLoader } from "react-spinners";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); 
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    fetch("/AllItems.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    let updatedProducts = [...products];

    
    if (categoryFilter !== "All") {
      updatedProducts = updatedProducts.filter(
        (p) => p.category === categoryFilter
      );
    }
    
    if(search.trim() !== ""){
      updatedProducts = updatedProducts.filter((p)=>p.serviceName.toLowerCase().includes(search.toLowerCase()))
    }
    
    if (sortOrder === "asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [search, sortOrder, categoryFilter, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClimbingBoxLoader color="#5e5feb" size={20} />
      </div>
    );
  }

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="text-center mt-10 px-4 md:px-10">
      <h1 className="text-[#1e3a8a] text-4xl font-bold">
        Winter Pet Services Hub
      </h1>
      <p className="text-[#4b647c] my-2">
        Total Services: <span className="font-bold">{filteredProducts.length}</span>
      </p>

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-gray-500">No services found.</p>
        ) : (
          filteredProducts.map((p) => (
            <div
              key={p.serviceId}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={p.image}
                  alt={p.serviceName}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {p.serviceName}
                </h2>

                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                  <span>{p.category}</span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <FcRating /> {p.rating}
                  </span>
                </div>

                <p className="text-gray-800 font-bold mt-2 text-lg">${p.price}</p>

                <Link
                  to={`/view-details/${p.serviceId}`}
                  className="mt-4 py-2 px-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-white hover:text-[#1e3a8a] hover:border hover:border-[#1e3a8a] transition text-center font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Items;
