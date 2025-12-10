import React from "react";
import OurCultureInFrames from "./OurCultureInFrames";

export default function WorkCulture() {
  return (
    <div>
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 font-sans">
        {/* Work Culture Heading */}
        <h2 className="text-center text-[25px] md:text-[40px] lg:text-3xl font-bold text-[#E31A4E] mb-16">
          Work Culture
        </h2>

        {/* Hero Image */}
        <div className="w-full max-w-5xl  mx-auto bg-gray-200 h-50 md:h-172 lg:h-96 rounded-xl shadow-md mb-25 flex items-center justify-center">
          <img src="src\assets\banner\banner.png" alt="" />
        </div>

        {/* Life at Section */}
        <div className="text-left mt-10 max-w-3xl mx-auto mb-12">
          <h3 className="text-[24px] md:text-[40px] font-semibold text-[#E31A4E] mb-2">
            Life at Adisri
          </h3>
          <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed">
            From team lunches to school fairs and brainstorming sessions,
            explore the day-to-day moments that define our culture.
          </p>
        </div>

        {/* Departments Section */}
        <div className="mb-12 max-w-3xl mx-auto">
          <h3 className="text-left text-[22px] md:text-[40px] font-semibold text-[#E31A4E] mb-6">
            Departments That Make Us
          </h3>
          <div
            className=" flex flex-col         
    md:grid                      
    md:grid-cols-3 lg:grid-cols-4 
    gap-6"
          >
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg h-70 px-5 md:h-90 lg:h-46 flex items-center justify-center shadow-sm"
              >
                <img
                  src="src\assets\img\pre-book.png"
                  className="w-[280px] h-[170px]"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Our Culture in Frames */}
        <div className="mb-12 text-center">
          <h3 className="text-[22px] md:text-[40px] font-semibold text-[#E31A4E] mb-6">
            Our Culture in Frames
          </h3>
          <div className="relative w-full max-w-4xl mx-auto">
            <OurCultureInFrames />
            {/* Explore Gallery Button */}
          </div>
        </div>

        {/* Apply Section */}
        <div className="text-center mt-12">
          <h3 className="text-[22px] md:text-[40px] font-semibold text-[#039A9C] mb-4">
            Ready to join the Adisri team?
          </h3>
          <button className="px-6 py-3 text-white bg-[#E31A4E] rounded-md text-base md:text-lg font-bold shadow-md hover:bg-[#b21640] transition">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
