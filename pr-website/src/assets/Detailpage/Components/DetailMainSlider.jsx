import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./CardDetailsSlider";

const slides = [
  {
    id: 1,
    image: "/Images/SliderImages/1.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  {
    id: 2,
    image: "/Images/SliderImages/2.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  {
    id: 3,
    image: "/Images/SliderImages/3.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  {
    id: 4,
    image: "/Images/SliderImages/4.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  {
    id: 5,
    image: "/Images/SliderImages/7.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  {
    id: 6,
    image: "/Images/SliderImages/6.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  {
    id: 7,
    image: "/Images/SliderImages/7.jpg",
    text: "A Gentle Heart",
    description:
      "It is said that a mother plays the role of a Guru when the child is small and",
  },
  // ... add more objects for other slides
];

export default function DetailMainSlider() {
  const swiperRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides per view based on screen width
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Mobile view
      } else {
        setSlidesPerView(2); // Desktop view
      }
    };

    // Initial setup on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <Swiper
          modules={[Virtual, Navigation]}
          slidesPerView={slidesPerView}
          centeredSlides={false}
          spaceBetween={0}
          // pagination={{
          //   type: "fraction",
          // }}
          navigation={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <BasicExample
                title={slide.text}
                imageSrc={slide.image}
                description={slide.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
