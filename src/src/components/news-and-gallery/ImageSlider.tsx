import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function ImageSlider() {
  return (
    <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src="/images/slide1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src="/images/slide2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src="/images/slide3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
