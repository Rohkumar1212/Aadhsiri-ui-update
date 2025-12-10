import React from "react";

export default function HelpSection() {
  return (
    <section className="px-4 py-10">
      <div className="bg-[#009688] rounded-2xl h-120  shadow-lg p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto relative overflow-hidden">
        {/* Left Content */}
        <div className="text-white flex-1 relative">
          <h2 className="text-lg  text-[22px] md:text-[42px] p-1  font-bold mb-3">
            Need Help Finding the Right<br></br> Solution?
          </h2>
          <p className="text-sm text-[18px] md:text-[40px]md:text-base p-3  leading-relaxed mb-6 text-gray-100">
            Adisri Publications experts are here to help,<br></br> from books to
            training and everything in<br></br> between.
          </p>

          {/* Button */}
          <button className="bg-[#E91E63] text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-[#C2185B] transition">
            Contact Us
          </button>

          {/* Paper plane with dashed path */}
          <div className="absolute bottom-0 top-1 left-74 flex items-center gap-2">
            <img
              src="src/assets/home-img/K-8 (2) 1.svg"
              alt="Paper Plane"
              className="w-106 md:w-130 right-30 mt-70"
            />
            <img
              src="src/assets/home-img/K-8 (1) 1.svg"
              alt="Dashed Path"
              className="w-132 md:h-100  right-10 mb-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
