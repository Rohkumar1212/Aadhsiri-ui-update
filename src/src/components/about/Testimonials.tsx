import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  
} from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Principal, Green School",
      text: "We design our books and teacher programs to support core NEP principles, from conceptual learning to real-world application.",
      image: "src/assets/img/user.jpg", // update with your path
    },
    {
      name: "Amit Verma",
      role: "Director, Sunrise Academy",
      text: "Their innovative approach has transformed the way our students learn and interact with knowledge.",
      image: "src/assets/img/user.jpg",
    },
    {
      name: "Ritu Singh",
      role: "Head Teacher, Modern Public School",
      text: "Books are thoughtfully designed, aligning perfectly with NEP 2020 guidelines.",
      image: "src/assets/img/user.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-[26px] md:text-[32px] font-bold text-[#C2185B] mb-8">
        Hear from Our School <br className="hidden md:block" /> Partners
      </h2>

      {/* Testimonial Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="text-center px-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-3"
                />
                <h4 className="text-sm md:text-base font-semibold text-gray-900">
                  {t.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contact Section */}
      <div className="bg-gray-100 rounded-xl shadow-md mt-12 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h3 className="text-[28px] md:text-[42px] font-bold text-[#E31A4E] mb-4">
            Reach Out Today
          </h3>
          <p className="text-sm md:text-base mb-2">
            <span className="font-semibold">Email: </span>
            <br />
            <a
              href="mailto:adisirpublication@gmail.com"
              className="text-[#E31A4E] hover:underline"
            >
              adisirpublication@gmail.com
            </a>
          </p>
          <p className="text-sm md:text-base mb-2">
            <span className="font-semibold">Phone: </span>
            <br />
            <a href="tel:+917687655678" className="text-[#E31A4E]">
              +91 76878 55678
            </a>
          </p>
          <p className="text-sm md:text-base mb-4">
            <span className="font-semibold">Address: </span>
            <br />
            <a href="tel:+917687655678" className="text-[#E31A4E]">
              +91 76878 55678
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-[30px] mt-4">
            <span className="font-semibold">Follow Us: </span>
            <br />

            <FaInstagram className="text-pink-600 cursor-pointer" />
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaWhatsapp className="text-green-500 cursor-pointer" />
            <FaLinkedin className="text-sky-700 cursor-pointer" />
          </div>
        </div>

        {/* Right Map Placeholder */}
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden h-56 md:h-72 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56035.131355765916!2d77.34678834999998!3d28.62389595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756745691054!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
