import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const SchoolPartners = () => {
  return (
    <section className="px-4 py-12 text-center max-w-4xl mx-auto">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-[#D32F2F] mb-4">
        Hear from Our School Partners
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
        We design our books and teacher programs to support core NEP principles,
        from conceptual learning to real-world application.
      </p>

      {/* Testimonial Card */}
      <div className="relative bg-white rounded-2xl shadow-md px-6 py-8">
        {/* Quote */}
        <p className="text-gray-800 italic text-base md:text-lg">
          "These programs have transformed our teaching approach and helped
          students connect learning with real-world outcomes."
        </p>

        {/* Profile */}
        <div className="mt-6 flex flex-col items-center">
          {/* Placeholder profile image */}
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>

          {/* Name */}
          <p className="mt-3 text-sm font-semibold text-gray-800">
            Priya Sharma
          </p>
          {/* Role */}
          <p className="text-xs text-gray-500">Principal, Green School</p>
        </div>

        {/* Left Arrow */}
        <button className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md">
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};
