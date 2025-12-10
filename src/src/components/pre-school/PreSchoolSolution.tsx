import React from "react";
import BulkOrderCard from "./BulkOrderCard";

function PreSchoolSolution() {
  return (
    <div>
      <section className="bg-white py-10 px-4 md:px-8">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-8 text-left">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#C2185B]">
            Pre School Solution
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Explore engaging and educational books carefully selected to spark
            curiosity and
            <br /> early learning in preschoolers.
          </p>
        </div>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-sm text-sm">
            <h3 className="font-bold text-[#C2185B] mb-2">All Classes:</h3>
            <ul className="space-y-1">
              {[
                "Playgroup",
                "Nursery",
                "LKG (Lower Kindergarten)",
                "UKG (Upper Kindergarten)",
              ].map((item, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#C2185B]" />{" "}
                    {item}
                  </label>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-[#C2185B] mt-4 mb-2">
              All Subjects:
            </h3>
            <ul className="space-y-1">
              {[
                "All In One Set",
                "All In One (Reading Set)",
                "All In One (Writing Set)",
                "Holiday Homework",
              ].map((item, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#C2185B]" />{" "}
                    {item}
                  </label>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-[#C2185B] mt-4 mb-2">All Series:</h3>
            <ul className="space-y-1">
              {Array.from({ length: 7 }, (_, i) => `Series ${i + 1}`).map(
                (item, i) => (
                  <li key={i}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#C2185B]" />{" "}
                      {item}
                    </label>
                  </li>
                )
              )}
            </ul>

            <h3 className="font-bold text-[#C2185B] mt-4 mb-2">Price</h3>
            <ul className="space-y-1">
              {[
                "100-150",
                "150-200",
                "200-300",
                "300-400",
                "400-500",
                "500-600",
                "600-700",
              ].map((item, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#C2185B]" /> ₹
                    {item}
                  </label>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-[#C2185B] mt-4 mb-2">New Arrivals</h3>
            <ul className="space-y-1">
              {["Last 30 days", "Last 90 days", "Next 90 days"].map(
                (item, i) => (
                  <li key={i}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#C2185B]" />{" "}
                      {item}
                    </label>
                  </li>
                )
              )}
            </ul>

            <h3 className="font-bold text-[#C2185B] mt-4 mb-2">Languages</h3>
            <ul className="space-y-1">
              {["English", "Hindi", "French"].map((item, i) => (
                <li key={i}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#C2185B]" />{" "}
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </aside>

          {/* Books Section */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-6 w-full md:w-1/2 ml-auto">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none border-none text-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                />
              </svg>
            </div>

            {/* Books Grid */}
            <div
              className="
            flex flex-col         
    md:grid                      
    md:grid-cols-3 lg:grid-cols-4 
    gap-6
            "
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-3"
                >
                  <img
                    src="src\assets\img\pre-book.png" // replace with real book image
                    alt="Book"
                    className="w-full h-68 object-cover rounded"
                  />
                  <p className="mt-2 text-left text-sm text-gray-700">
                    Book Name
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Similar Products Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition"
              >
                <img
                  src={`src/assets/img/pre-book.png?text=Product+${item}`}
                  alt={`Product ${item}`}
                  className="w-[373px] h-[371px] md:w-[290px] md:h-[330px] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-700">
                    Book Name {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="max-w-9xl mx-auto items-center">
            {/* Map Section */}
            <BulkOrderCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default PreSchoolSolution;
