import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const NewReleases: React.FC = () => {
  // Example slides (replace with your book covers)
  const slides = [
    { id: 1, title: "Madhurima", img: "/src/assets/img/pre-book.png" },
    { id: 2, title: "Book 2", img: "/src/assets/img/pre-book.png" },
    { id: 3, title: "Book 3", img: "/src/assets/img/pre-book.png" },
    { id: 4, title: "Book 4", img: "/src/assets/img/pre-book.png" },
    { id: 5, title: "Book 5", img: "/src/assets/img/pre-book.png" },
    { id: 6, title: "Book 6", img: "/src/assets/img/pre-book.png" },
    { id: 7, title: "Book 7", img: "/src/assets/img/pre-book.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

    return (
      <div>
        <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-sans">
          {/* Section Heading */}
          <div className="text-left mb-8">
            <h2 className="text-[28px] md:text-[40px] lg:text-3xl font-bold text-[#d91a4d]">
              New Releases
            </h2>
            <p className="text-gray-700 text-[18px] md:text-[24px] mt-2">
              Discover our latest titles designed to inspire learning and
              curiosity.
            </p>
          </div>
        </section>
        <section className="w-full px-5 font-sans">
          {/* Slider Section */}
          <div className="relative w-full bg-[#E9E9E9] py-10 px-2 flex flex-col items-center mb-16">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] mx-auto">
              {/* Center Book */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-36 sm:w-32 sm:h-48 md:w-56 md:h-80 bg-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                <img
                  src={slides[currentIndex].img}
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Book */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-14 h-20 sm:w-16 sm:h-24 md:w-24 md:h-32 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 1) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Book */}
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-14 h-20 sm:w-16 sm:h-24 md:w-24 md:h-32 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 2) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left Book */}
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-14 h-20 sm:w-16 sm:h-24 md:w-24 md:h-32 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 3) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Book */}
              <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-14 h-20 sm:w-16 sm:h-24 md:w-24 md:h-32 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 4) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-Left Book */}
              <div className="absolute top-[15%] left-[15%] w-12 h-16 sm:w-14 sm:h-20 md:w-20 md:h-28 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 5) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-Right Book */}
              <div className="absolute top-[15%] right-[15%] w-12 h-16 sm:w-14 sm:h-20 md:w-20 md:h-28 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 6) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Left Book */}
              <div className="absolute bottom-[15%] left-[15%] w-12 h-16 sm:w-14 sm:h-20 md:w-20 md:h-28 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 7) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Right Book */}
              <div className="absolute bottom-[15%] right-[15%]  w-22 h-26 sm:w-14 sm:h-20 md:w-20 md:h-28 bg-gray-200 rounded shadow overflow-hidden">
                <img
                  src={slides[(currentIndex + 8) % slides.length].img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ChevronLeft
                  size={10}
                  className="text-gray-600 md:size-12 sm:size-24"
                />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute -right-5 sm:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ChevronRight
                  size={10}
                  className="text-gray-600 md:size-12 sm:size-24"
                />
              </button>
            </div>

            {/* Book Title */}
            <p className="text-center text-gray-800 font-medium mt-6 text-sm md:text-base">
              {slides[currentIndex].title}
            </p>
          </div>
        </section>
        <section className="w-full font-sans items-start px-4 md:px-6 lg:px-10  space-y-6">
          {/* Download PDF Section */}
          <div className="bg-[#fff0e0] border border-[#f7c8a8] rounded-lg p-5 sm:p-6 md:p-8 md:ml-20 max-w-md ml-0 mr-auto shadow-sm">
            {" "}
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              {" "}
              You can download the PDF of the catalog product list after
              selecting a specific product using the filters.{" "}
            </p>{" "}
            <div className="d-flex flex-col sm:flex-row justify-start gap-7 sm:gap-6">
              {" "}
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 mb-4 bg-[#FCAF3F] text-black text-sm sm:text-base rounded-md font-semibold hover:bg-[#e68900] transition shadow">
                {" "}
                Download PDF of Catalog{" "}
              </button>{" "}
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#FCAF3F] text-black text-sm sm:text-base rounded-md font-semibold hover:bg-[#b21640] transition shadow">
                {" "}
                Download PDF of List of Product{" "}
              </button>{" "}
            </div>{" "}
          </div>

          {/* Bulk Order Section */}
          {/* Bulk Order Section */}
          <div className="bg-[#D9D9D9]  rounded-xl p-16 sm:p-15 md:p-17 md:ml-20 mb-10 max-w-5xl relative shadow-sm">
            {/* Arrow Icon */}
            <ArrowUpRight
              size={32}
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
              <button className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#AFAFAF] text-black text-sm sm:text-base rounded-md font-semibold hover:bg-gray-900 hover:text-white transition shadow">
                Request Bulk Order
              </button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default NewReleases;
