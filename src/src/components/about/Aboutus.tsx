import React from "react";
import { School, GraduationCap, Package } from "lucide-react";
import { AboutAlignedWithNEP } from "./About-AlignedWithNEP";
import TeamSection from "./TeamSection";
import ServicesSection from "../BrowseByServices";
import Testimonials from "./Testimonials";


const Aboutus: React.FC = () => {
  return (
    <div className="font-sans text-[#003d4d]">
      {/* Banner Section */}
      <section className="relative h-60 md:h-170 text-center">
        <img
          src="src/assets/banner/banner.png"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[38px]  font-bold text-[#C2185B] mb-6">
            Our Story
          </h2>
          <p className="text-sm md:text-base p-4 text-gray-800 leading-relaxed max-w-3xl mx-auto mb-10">
            Founded in 2015, Adisri Publications has steadily grown into a
            trusted name in educational publishing across Delhi-NCR and beyond.
            With a focus on meaningful and outcome-based learning, we create
            high-quality books and materials for pre-primary to Class 8 —
            designed to empower both students and educators.
            <br />
            <br />
            Rooted in the values of clarity, creativity, and care, our books
            cover core subjects like English, Hindi, Mathematics, EVS, Art,
            Rhymes, and Grammar. Every title is developed by a team of
            experienced educators and experts, ensuring it aligns well with
            modern pedagogy and NEP 2020.
            <br />
            Beyond books, we support schools with customized cover branding,
            teacher training programs, and practical classroom solutions —
            building strong partnerships with over 2,500 schools. Our goal is
            simple: to inspire joyful, impactful learning in every classroom we
            serve.
          </p>

          {/* Vision, Mission, Goals Cards */}
          <div className="grid grid-cols-1 px-5 ml-3 sm:grid-cols-3 gap-6 mt-2">
            {["VISION", "MISSION", "GOALS"].map((item, index) => (
              <div
                key={index}
                className="bg-[#0097A7]  text-white w-[260.47px] h-[242.34px] text-[30px] md:text-[40px]   py-22 rounded-lg shadow-md text-xl font-semibold tracking-wide"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <AboutAlignedWithNEP />

      <TeamSection />

    
      {/* Other Sections */}

      <ServicesSection />
      <section className="bg-white py-8 md:py-12 text-center px-4">
        <h2 className="text-center text-[28px] md:text-[32px] font-bold text-[#C2185B] leading-snug tracking-wide mb-6 md:mb-8">
          Trusted by Schools That Believe in <br className="hidden md:block" />
          Purposeful Learning
        </h2>
        <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 py-10">
          {[
            {
              label: "Schools Covered",
              value: "2,000+",
              img: "src/assets/img/school.png", // update with your image path
            },
            {
              label: "Students Covered",
              value: "2,000+",
              img: "src/assets/img/students.png", // update with your image path
            },
            {
              label: "Titles",
              value: "2,000+",
              img: "src/assets/img/titles.png", // update with your image path
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0097A7] text-white px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-lg w-full sm:w-64 flex flex-col items-center text-center"
            >
              <div className="mb-3">
                <img
                  src={stat.img}
                  alt={stat.label}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </div>
              <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
              <p className="mt-1 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Services Section */}
        <Testimonials />
      </section>
      
    </div>
  );
};

export default Aboutus;
