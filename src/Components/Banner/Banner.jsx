import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner from "../../Assets/Untitled.svg"
import banner1 from "../../Assets/Untitled (1).svg"
import banner2 from "../../Assets/Untitled (2).svg"
import banner3 from "../../Assets/Untitled (3).svg"
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