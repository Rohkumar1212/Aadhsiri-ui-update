export default function NewsGallery() {
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

        <div className="relative max-w-5xl text-left mt-[-60px] mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:mt-[-100px]  mt-18 space-y-6 text-black text-left">
            <h1 className="text-2xl md:text-4xl sm:text-6xl  text-[#E31A4E]  font-bold">
              Proud Moments of Adisri
            </h1>
            <p className="text-black w-130">
              Celebrating our commitment to quality, <br></br>trust, and
              educational excellence.
            </p>
          </div>

          {/* Right Side Placeholder (if needed for spacing) */}
          <div className="w-full md:w-1/2"></div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E31A4E] mb-8">
            Blog
          </h2>

          {/* Featured Blog */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mb-10 bg-[#D9D9D9]">
            <div className="bg-[#AFAFAF] h-48 md:h-60 mt-5 mb-4  rounded-lg">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 px-5 text-[24px]">
                Ace your Class 10 Board Exams with the Latest Edition of
                'Together with' CBSE Question Banks 2025-26 POSTED ON June 17,
                2025 Preparing for the CBSE Class 10 board exams is indeed a
                daunting task for the students. It brings the stress and exam
                anxiety along. With the pressure
              </p>
            </div>
          </div>

          {/* Blog Grid */}
          <div
            className=" flex flex-col         
    md:grid                      
    md:grid-cols-3 lg:grid-cols-4 
    gap-6"
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="bg-gray-300 h-100 w-full">
                  <img src="" alt="" />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm text-[24px]">
                    POSTED ON June 17, 2025 Preparing for the CBSE Class 10
                    board exams is indeed a daunting task for the students. It
                    brings the stress and exam anxiety along. With the pressure
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Gallery */}
          <div className="flex items-center justify-center mb-6"></div>

          {/* Button */}
        </div>
      </section>
    </div>
  );
}
