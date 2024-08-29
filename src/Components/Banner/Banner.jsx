import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner from "../../Assets/u8.jpg"
import banner1 from "../../Assets/u9.jpg"
import banner2 from "../../Assets/u10.jpg"
import banner3 from "../../Assets/u11.jpg"
import './Banner.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Banner = () => {
  return (
    <>
    <div className='Bannar'>
    <Swiper
    
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: false,
        }}

          autoplay={{
          delay: 3000,  // Delay in ms (3 seconds)
          disableOnInteraction: false,  // Autoplay will not be disabled after user interactions
        }}

        navigation={false}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='design'>
            <img src={banner} alt="" />
        </SwiperSlide>
         <SwiperSlide className='design'>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='design'>
            <img src={banner2} alt="" />
        </SwiperSlide>
       
        
        <SwiperSlide className='design'>
            <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='design'>
            <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide className='design'>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='design'>
            <img src={banner2} alt="" />
        </SwiperSlide>
       
      </Swiper>

    </div>
    </>
  )
}

export default Banner