import React from "react";

export const AboutAlignedWithNEP = () => {
  return (
    <section className="px-4 py-8 md:py-4">
      <div
        className=" rounded-2xl p-6 md:p-30 
          flex flex-col md:block          /* Mobile = flex, Desktop = block */
          items-center justify-between gap-6
          max-w-5xl mx-auto relative overflow-hidden
          min-h-[320px] md:min-h-[460px]  /* Perfect height scaling */
        "
        style={{
          backgroundImage: "url('src/assets/home-img/K-8 (5) 1.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
            backgroundSize: "contain", // responsive scaling
          
        }}
      >
        {/* Left Content */}
        <div className="flex-1 relative px-5 z-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#D32F2F] mb-4 leading-snug">
            Aligned with NEP, <br className="hidden md:block" /> Built for
            Better Classrooms.
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            We design our books and teacher programs to support core NEP
            <br className="hidden md:block" />
            principles, from conceptual
            <br className="hidden md:block" /> learning to real-world
            application.
          </p>
          <button className="border border-[#D32F2F] text-[#D32F2F] px-6 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-[#D32F2F] hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};
