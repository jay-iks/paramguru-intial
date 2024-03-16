import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardComponent from "./CardComponent"; // Import the CardComponent

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "/src/assets/Component_Css/VedioSliderImage.css";

function VedioSliderImage({ swiperRef, handleSlideChange }) {
  // Array of objects containing image and text for each slide
  const slides = [
    {
      id: 1,
      image: "/Images/SliderImages/1.jpg",
      text: "Image 1 slider ok",
    },
    {
      id: 2,
      image: "/Images/SliderImages/2.jpg",
      text: "Image 2 slider ok",
    },
    {
      id: 3,
      image: "/Images/SliderImages/3.jpg",
      text: "Image 3 slider ok",
    },
    {
      id: 4,
      image: "/Images/SliderImages/4.jpg",
      text: "Image 4 slider ok",
    },
    {
      id: 5,
      image: "/Images/SliderImages/7.jpg",
      text: "Image 5 slider ok",
    },
    {
      id: 6,
      image: "/Images/SliderImages/6.jpg",
      text: "Image 6 slider ok",
    },
    {
      id: 7,
      image: "/Images/SliderImages/7.jpg",
      text: "Image 7 slider ok",
    },
    // ... add more objects for other slides
  ];

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Virtual, Navigation, Pagination]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} virtualIndex={slide.id - 1}>
            <CardComponent
              backgroundImage={slide.image}
              overlayText={slide.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default VedioSliderImage;
