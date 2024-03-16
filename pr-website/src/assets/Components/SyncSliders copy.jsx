import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Component_Css/SyncSliders.css";

function SyncSliders() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

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

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <div>
        <Slider
          className="slider1"
          vertical={true}
          verticalSwiping={true}
          swipeToSlide={true}
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.image}
                alt="Description of the image"
                style={{ width: "100%", maxWidth: "500px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Slider
          className="slider2"
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              {/* <CardComponent
              backgroundImage={slide.image}
              overlayText={slide.text}
            /> */}
              <img
                src={slide.image}
                alt="Description of the image"
                style={{ width: "100%", maxWidth: "500px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SyncSliders;
