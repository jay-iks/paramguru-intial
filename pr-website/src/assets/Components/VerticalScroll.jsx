// import React from 'react'
// import VerticalScrollCard from './VerticalScrollCard'

// const VerticalScroll = () => {
//   return (
//     <div>
//       <div className='card-wrapper'>
//         <VerticalScrollCard
//           videoSrc="/Images/DetailPage/gurudevjpg.mp4"
//           overlayText="Gurudev… This is Unfair!"
//           overlaySubText= "Speaker from Gujrat"  />
//       </div>
//     </div>
//   )
// }

// export default VerticalScroll

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
