import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "/src/assets/Component_Css/VerticalSliderImage.css";
import { Pagination, Scrollbar } from "swiper/modules";

function VerticalSliderImage({ swiperRef, handleSlideChange }) {
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
    <div className="vertical-slider-container ">
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        onSlideChange={(swiper) => handleSlideChange(swiper, true)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="vertical-slider-card"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay">
                <p className="slide-text">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VerticalSliderImage;
