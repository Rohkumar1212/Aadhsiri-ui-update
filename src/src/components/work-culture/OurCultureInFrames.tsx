import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icon package

const OurCultureInFrames: React.FC = () => {
  // Example slides (replace with real images)
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-12 text-center">

      
      {/* Slider Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Slide */}
        <div className="bg-gray-200 h-52 md:h-72 rounded-xl shadow-md flex items-center justify-center text-gray-600 text-lg font-medium">
          {slides[currentIndex]}
          <img src="" alt="" />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-[-20px]  top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Explore Button */}
      <button className="mt-6 px-5 py-2 text-white bg-[#d91a4d] rounded-md text-sm md:text-base font-semibold shadow-md hover:bg-[#b21640] transition">
        Explore Full Gallery
      </button>
    </div>
  );
};

export default OurCultureInFrames;
