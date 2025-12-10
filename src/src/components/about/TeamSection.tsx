import React from "react";

const TeamSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Founder Section */}
        <div className="bg-gray-200 rounded-2xl p-16 md:p-15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Founder Text */}
          <div className="flex-1 text-left">
            <p className="text-sm text-[22px] md:text-[32px] h-50 font-semibold text-teal-700 mb-2">
              Our Founder
            </p>
            <h3 className="text-[22px] md:text-[38px] font-bold text-[#E31A4E]">
              Gaurav Mangal
            </h3>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mt-3">
              Mr. Gaurav Mangal founded Adisri Publications to simplify learning
              and support schools with NEP
              <br />
              -aligned content. His vision drives the brand’s focus on trust,
              <br />
              innovation, and educator-first solutions.
            </p>
          </div>

          {/* Founder Image */}
          <div className="w-[180px] h-[200px] md:w-[220px] md:h-[240px] bg-gray-400 rounded-2xl flex items-center justify-center">
            <svg
              className="w-116 h-116 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.121 17.804z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#C2185B] mb-8">
            Our Team
          </h2>

          {/* Team Cards */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-[180px] h-[220px] md:w-[220px] md:h-[260px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-sm"
                >
                  <svg
                    className="w-16 h-16 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.121 17.804z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              ))}
          </div>
              </div>
              
              
      </div>
    </section>
  );
};

export default TeamSection;
