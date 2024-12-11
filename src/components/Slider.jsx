// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">{children}</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">{children}</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">{children}</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">{children}</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
