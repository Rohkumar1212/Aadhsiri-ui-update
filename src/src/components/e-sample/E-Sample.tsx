import React from "react";


const ESample: React.FC = () => {
 
    return (
      <div>
        <section className="w-full">
          {/* Top Section */}
          <div className="bg-gray-200 w-full rounded-lg p-6 md:p-10 md:h-130 flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Text */}
            <div className="mt-50">
              <h2 className="text-[22px] md:text-[40px] font-bold text-red-600 mb-2">
                Explore Our E-Samples
              </h2>
              <p className="text-gray-700 text-[18px] md:text-[24px]">
                Browse and preview our books online before
                <br /> placing your order.
              </p>
            </div>
            <div className="mt-50">
              {/* Button */}
              <button className="mt-4 md:mt-0 px-5 py-2 bg-[#AEAEAE] text-black text-[22px] md:text-[30px] rounded-md font-semibold hover:bg-gray-900 transition">
                Contact Us for Bulk Orders
              </button>
            </div>
          </div>
        </section>
        <section className="w-full font-sans px-4 md:px-8 lg:px-16 py-10 space-y-10">
          {/* Search Bar */}
          <div className="relative w-full mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-t-0 border-l-0 border-r-0 rounded-md py-2 pl-4 pr-10 text-[28px] md:text-[34px]  focus:ring-2 focus:ring-gray-400 outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 absolute right-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>

          {/* Filters Section */}
          <div className="bg-gray-200 border border-gray-300 rounded-lg p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters Title */}
            <div>
              <h3 className="text-[32px] md:text-[44px] font-semibold text-gray-800 mb-3">
                Filters
              </h3>
              <ul className="space-y-2 text-sm text-gray-700"></ul>
            </div>

            {/* All Classes */}
            <div>
              <h4 className="text-[18px] md:text-[18px] font-semibold text-gray-700 mb-2">
                All Classes
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <input type="checkbox" /> Class 1
                </li>
                <li>
                  <input type="checkbox" /> Class 2
                </li>
                <li>
                  <input type="checkbox" /> Class 3
                </li>
                <li>
                  <input type="checkbox" /> Class 4
                </li>
                <li>
                  <input type="checkbox" /> Class 5
                </li>
                <li>
                  <input type="checkbox" /> Class 6
                </li>

                <li>
                  <input type="checkbox" /> Class 7
                </li>
                <li>
                  <input type="checkbox" /> Class 8
                </li>
              </ul>
            </div>

            {/* All Subjects */}
            <div>
              <h4 className="text-[18px] md:text-[18px] font-semi bold text-gray-700 mb-2">
                All Subjects
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <input type="checkbox" className="mr-2" /> English
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Hindi
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Mathematics
                </li>

                <li>
                  <input type="checkbox" className="mr-2" /> EVS
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Science
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Social Studies
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> General Knowledge
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Computer
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Moral Values
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Art & Craft
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Cursive Writing
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Grammar
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Olympiad / Practice
                  Books
                </li>
              </ul>
            </div>

            {/* All Series */}
            <div>
              <h4 className="text-[18px] md:text-[18px] font-semi bold text-gray-700 mb-2">
                All Series
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <input type="checkbox" /> Series A
                </li>
                <li>
                  <input type="checkbox" /> Series B
                </li>
                <li>
                  <input type="checkbox" /> Series C
                </li>
                <li>
                  <input type="checkbox" /> Series D
                </li>
              </ul>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#D9D9D9]rounded-lg w-full h-40 sm:h-48 md:h-56"
              >
                <img
                  src="src\assets\img\pre-book.png"
                  className=" w-50 sm:w-50 h-40 sm:h-48"
                  alt=""
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default ESample;
