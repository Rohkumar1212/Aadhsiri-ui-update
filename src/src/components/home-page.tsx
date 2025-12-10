import React from "react";
import { School, GraduationCap, Package, Users, Wrench, FileText, FileSearch, MoreHorizontal, HelpCircle } from "lucide-react";
import BrowseByServices from "./BrowseByServices";
import HelpSection from "./HelpSection";
import { AlignedWithNEP } from "./AlignedWithNEP";
const Testimonial: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-[#C2185B] mb-6">What Schools Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <p className="text-sm mb-4">"Adisri's books improved student engagement and outcomes across our classrooms."</p>
            <p className="text-xs font-semibold">— Principal, XYZ School</p>
          </div>
          <div className="p-6 border rounded-lg">
            <p className="text-sm mb-4">"The NEP-aligned content and teacher resources made lesson planning seamless."</p>
            <p className="text-xs font-semibold">— Head Teacher, ABC School</p>
          </div>
          <div className="p-6 border rounded-lg">
            <p className="text-sm mb-4">"High-quality prints and on-time delivery every time."</p>
            <p className="text-xs font-semibold">— Administrator, LMN School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdisriPublications: React.FC = () => {
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

      {/* Stats Section */}
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
              icon: <School size={106} />,
            },
            {
              label: "Students Covered",
              value: "2,000+",
              icon: <GraduationCap size={106} />,
            },
            { label: "Titles", value: "2,000+", icon: <Package size={106} /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0097A7] text-white px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-lg w-full sm:w-64 flex flex-col items-center text-center"
            >
              <div className="mb-3">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
              <p className="mt-1 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Services Section */}
        <section className="bg-white py-8 md:py-12 px-4">
          <BrowseByServices />
        </section>
      </section>
      <section className="bg-white py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-2xl text-[38px] md:text-[62px] font-bold text-[#E31A4E]">
              Why Adisri?
            </h2>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-black text-sm md:text-base leading-relaxed mb-6">
              Adisri Publications is a trusted educational partner for over{" "}
              <span className="font-semibold">2,500 schools</span>, known for
              NEP-aligned content, customized book branding, and a strong focus
              on both student learning and teacher support. Our books are
              thoughtfully designed across subjects to create engaging,
              future-ready classrooms.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C2185B] text-[#E9E9E9] px-5 md:px-6 py-2 rounded-lg hover:bg-[#AD1457] transition">
                Explore our catalog
              </button>
              <button className="border border-[#C2185B] text-[#C2185B] px-5 md:px-6 py-2 rounded-lg hover:bg-[#C2185B] hover:text-white transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <HelpSection />
      <AlignedWithNEP />
      <Testimonial />
    </div>
  );
};

export default AdisriPublications;
