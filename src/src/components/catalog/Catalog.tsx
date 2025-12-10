import React from "react";
import { ArrowUpRight } from "lucide-react";

const Catalog: React.FC = () => {

  return (
    <div>
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-sans">
        {/* Section Heading */}
        <div className="text-left mb-8">
          <h2 className="text-[28px] md:text-[40px] lg:text-3xl font-bold text-[#d91a4d]">
            OUR CATALOGUE
          </h2>
          <p className="text-gray-700 text-[18px] md:text-[24px] mt-2">
            As a trusted educational publisher, Adisri Publications offers
            high-quality school books aligned with national guidelines and
            evolving learning standards. Our books support CBSE, state boards,
            and NEP-based teaching approaches—crafted to empower schools and
            engage learners meaningfully. For full details, download our latest
            catalog.
          </p>
        </div>
      </section>
      <section className="w-full font-sans px-4 md:px-8 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center">
            <img
              src="src/assets/img/pre-book.png" // replace with your image path
              alt="Catalog Preview"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-contain"
            />
          </div>

          {/* Right Side - PDF Section */}
          <div className="bg-[#fff0e0] border border-[#f7c8a8] rounded-lg p-5 sm:p-6 md:p-8 md:ml-20 max-w-md ml-0 mr-auto shadow-sm">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              You can download the PDF of the catalog product list after
              selecting a specific product using the filters.
            </p>

            <div className="d-flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="px-4 py-2 sm:px-5 mb-5 sm:py-2.5 bg-[#FCAF3F] text-black text-sm sm:text-base rounded-md font-semibold hover:bg-[#e68900] transition shadow">
                Download PDF of Catalog
              </button>
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#FCAF3F] text-black text-sm sm:text-base rounded-md font-semibold hover:bg-[#b21640] transition shadow">
                Download PDF of List of Product
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full font-sans items-start px-4 md:px-6 lg:px-10  space-y-6">
      
        {/* Bulk Order Section */}
        <div className="bg-[#D9D9D9] rounded-xl p-16 sm:p-10 md:p-12 md:ml-20 mb-10 h-70 max-w-5xl relative shadow-sm">
          {/* Arrow Icon */}
          <ArrowUpRight
            size={42}
            className="absolute top-4 right-4 text-gray-500"
          />

          {/* Title */}
          <h3 className="text-lg sm:text-2xl md:text-[32px] font-semibold text-gray-900 mb-3">
            Order in Bulk for Your School
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
            Whether you’re a new school or a long-time partner we’ve got you
            covered. Place bulk orders quickly and get personalized support
            every step of the way.
          </p>

          {/* Button aligned right */}
          <div className="flex justify-end">
            <button className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#A2A2A2] text-black text-sm sm:text-base rounded-md font-semibold hover:bg-gray-900 hover:text-white transition shadow">
              Request Bulk Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
