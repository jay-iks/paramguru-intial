import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Sync.css";

// vertical slider

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//
function SyncSliders() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

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
      image: "/Images/SliderImages/9.jpg",
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

  const sliderSettingsVertical = {
    asNavFor: nav2,
    ref: (slider) => (sliderRef1 = slider),
    slidesToShow: 1,
    vertical: true, // Enable vertical scrolling
    swipeToSlide: false,
    verticalSwiping: true, // Enable vertical swiping
    arrows: false,
    slidesToScroll: 1,
  };

  const sliderSettingsHorizontal = {
    asNavFor: nav1,
    ref: (slider) => (sliderRef2 = slider),
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <div className="MainVedioPage1">
      <div className="headingvedio">
        Home &gt; Quick Views &gt; A Gentle Heart
      </div>
      <div className="slider-container1">
        <div className="vertical-wrapper">
          <div className="vertical1">
            <Slider {...sliderSettingsVertical}>
              {slides.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.image} alt={slide.text} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="horizontal1">
          <Slider {...sliderSettingsHorizontal}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <img src={slide.image} alt={slide.text} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SyncSliders;
