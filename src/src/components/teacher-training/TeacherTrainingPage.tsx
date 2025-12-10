

export default function TeacherTrainingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-[#FFF7F9] w-full h-[241px] md:w-full md:h-[580px]  bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 text-center"
        style={{
          backgroundImage: "url('src/assets/img/banner-Teacher-Training.png')",
        }}
      >
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-5xl mt-[-90px] mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left Content */}
          <div className="w-full md:w-1/2  mt-18 space-y-6 text-black text-left">
            <h1 className="text-2xl md:text-4xl font-bold">
              Teacher Training by Adisri Publications
            </h1>
            <button className="bg-[#E31A4E] hover:bg-[#a3144c] text-white px-6 py-3 rounded-xl shadow-md">
              Book a Workshop
            </button>
          </div>

          {/* Right Side Placeholder (if needed for spacing) */}
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>

      {/* About Programme */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E31A4E] mb-6">
            About Our Programme
          </h2>
          <p className="text-gray-600 mb-10 text-left w-400 text-[24px] mx-auto">
            Adisri Publications, in collaboration with Kalorex International
            Foundation, offers expertly crafted
            <br /> teacher training programmes designed to empower educators
            with modern methodologies. These workshops align with NEP 2020 and
            global practices. <br />
            and transform classrooms into engaging learning spaces.
          </p>

          {/* Programme Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#fcb03f5d] rounded-xl p-10 shadow">
              <h3 className="font-semibold text-lg text-[33px] text-[#E31A4E] mb-2">
                NEP 2020 & <br />
                NCF Aligned
              </h3>
              <p className="text-black">
                Training designed as per national education framework
                guidelines.
              </p>
            </div>
            <div className="bg-[#fcb03f5d] rounded-xl  p-10 shadow">
              <h3 className="font-semibold text-lg text-[33px] text-[#E31A4E] mb-2">
                Innovative Skill Strategies
              </h3>
              <p className="text-black">
                Focus on practical, skill-based teaching approaches.
              </p>
            </div>
            <div className="bg-[#fcb03f5d] rounded-xl p-10 shadow">
              <h3 className="font-semibold text-lg text-[33px] text-[#E31A4E] mb-2">
                Improved Student Engagement
              </h3>
              <p className="text-black">
                Boost classroom participation and effective learning.
              </p>
            </div>
            <div className="bg-[#fcb03f5d] rounded-xl p-10 shadow">
              <h3 className="font-semibold text-lg text-[33px] text-[#E31A4E] mb-2">
                Assessment Guidance
              </h3>
              <p className="text-black">
                Effective tools and methods for evaluating student performance.
              </p>
            </div>
            <div className="bg-[#fcb03f5d] rounded-xl p-10 shadow">
              <h3 className="font-semibold text-lg text-[33px] text-[#E31A4E] mb-2">
                Professional Growth
              </h3>
              <p className="text-black">
                Enhance teaching skills and career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Highlights */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[33px] text-[#E31A4E] mb-6">
            Workshop Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#FCAF3F] shadow rounded-xl p-10">
              <p className="font-semibold text-[28px] text-[#000]">
                Hands-on Activity-Based Sessions
              </p>
            </div>
            <div className="bg-[#FCAF3F] shadow rounded-xl p-12">
              <p className="font-semibold text-[28px] text-[#000]">
                Meet Our Expert Trainers
              </p>
            </div>
            <div className="bg-[#FCAF3F] shadow rounded-xl p-10">
              <p className="font-semibold text-[28px] text-[#000]">
                Customised to Your School’s Needs
              </p>
            </div>
            <div className="bg-[#FCAF3F] shadow rounded-xl p-10">
              <p className="font-semibold text-[28px] text-[#000]">
                Flexible Scheduling Options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[33px] text-[#E31A4E]  mb-6">
            Our Approach
          </h2>
          <p className="text-gray-600 text-[25px] mx-auto">
            We focus on value-based education that improves teaching
            effectiveness and student outcomes. Our sessions combine theory and
            practical strategies tailored to your needs, supporting teacher
            growth and student success.
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="bg-[#009688] rounded-2xl h-120  shadow-lg p-10 md:p-7 flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto relative overflow-hidden">
          {/* Left Content */}
          <div className="text-white flex-1 relative px-5">
            <h2 className="text-lg  text-[22px] md:text-[42px] p-1  font-bold mb-3">
              Ready to Empower Your
              <br /> Teachers?
            </h2>
            <p className="text-sm text-[18px] md:text-[40px]md:text-base p-3  leading-relaxed mb-6 text-gray-100">
              Partner with Adisri to deliver NEP-aligned, <br /> practical
              training workshops tailored to your <br /> school.
            </p>

            {/* Button */}
            <button className="bg-[#E91E63] text-white px-5 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-[#C2185B] transition">
              Contact Us
            </button>

            {/* Paper plane with dashed path */}
            <div className="absolute bottom-0 top-1 left-74 flex items-center gap-2">
              <img
                src="src/assets/img/Ready-section.png"
                alt="Paper Plane"
                className="w-90 md:w-130  mt-70"
              />
              <img
                src="src/assets/img/Ready-section-2.png"
                alt="Dashed Path"
                className="w-102 md:h-110 right-100 mb-40"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
    </div>
  );
}
