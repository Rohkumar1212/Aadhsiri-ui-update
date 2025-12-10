import React from "react";

const Flipbookpage: React.FC = () => {
  return (
    <div className="font-sans px104 md:px-18 lg:px-16 py-10 space-y-12">
      {/* 🔹 Top Book Section */}
      <section className="bg-white border rounded-lg shadow p-10 md:p-15 flex flex-col md:flex-row gap-6 items-start">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="src/assets/img/pre-book.png"
            alt="Book Cover"
            className="w-full h-auto rounded-md shadow"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            Cardinal Alphabet Capital And Small Letters
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            The Cardinal Alphabet Series is best to improve your child’s
            handwriting and alphabet learning. It includes both capital and
            small letters with proper guidance for strokes. Designed with
            engaging illustrations to make learning joyful and effective.
          </p>
          <button className="px-5 py-2 bg-gray-800 text-white text-sm md:text-base rounded-md font-semibold hover:bg-gray-900 transition">
            Contact Us for Bulk Orders
          </button>
        </div>
      </section>

      {/* 🔹 Product Preview Section */}
      <section className="border-0 rounded-lg p-6 md:p-10 bg-[#E9E9E9] shadow">
        <h2 className="text-[24px] md:text-[24px]  mb-1">
          Cardinal Alphabet Capital And Small
          <br /> Letters
        </h2>
        <p className="text-[#3D3D3D] text-sm mb-6">Product Sample Pages</p>

        {/* Preview Box */}
        <div className="bg-gray-300 w-full h-60 md:h-80 flex items-center justify-center rounded-md">
          <span className="text-gray-500">Book Preview Image</span>
        </div>

        {/* Button */}
        <div className="mt-6 text-right">
          <button className="px-5 py-2 bg-[#AEAEAE] text-black text-md md:text-base rounded-md font-semibold hover:bg-gray-900 transition">
            Contact Us for Bulk Orders
          </button>
        </div>
      </section>

      {/* 🔹 Similar Options Section */}
      <section className="py-5 bg-[#E9E9E9] px-5">
        <h3 className="text-base md:text-lg text-[24px] md:text-[24px] font-semibold mb-4">
          Similar Options
        </h3>
        <div
          className="flex flex-col      
    md:grid                      
    md:grid-cols-4 lg:grid-cols-3 
    gap-8"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 w-80 h-92 sm:w-58 sm:h-56 md:w-92 md:h-90 rounded-md shadow"
            >
              <img src="" alt="" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Flipbookpage;
