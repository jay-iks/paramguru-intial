import React, { useRef, useEffect, useState } from "react";

import SwiperCore from "swiper";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import SliderCard from "./SliderCard";
// import './styles.css'; // Import your custom styles if any

// Install Swiper modules
SwiperCore.use([Scrollbar]);

const VerticalSwiper = () => {
  
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of active slide index
  const swiperRef = useRef(null);
  
  const slides = [
    {
      id: 1,
      image: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      isVideo: true,
      title: "A Gentle Heart",
      subtitle:
        "It is said that a mother plays the role of a Guru when the child is small and..",
    },

    {
      id: 3,
      image: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      isVideo: true,
      title: "A Force that EMPOWERS…",
      subtitle: "In December 2022, Param Gurudev was at Palitana.... ",
    },
    {
      id: 4,
      image: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      isVideo: true,
      title: "Ram Laxman",
      subtitle: "In December 2022, Param Gurudev was at Palitana.... ",
    },
  ];

  return (



    
    <div>
      <Swiper
        ref={swiperRef}
        onSlideChange={
          (swiper) => {
            console.log("-->",swiper);
            // Pause the previous video when sliding to a new slide
            const previousSlideIndex = swiper.previousIndex;
            console.log('previousSlideIndex-> ',previousSlideIndex);
            console.log('swiper.realIndex-> ',swiper.realIndex);
            console.log('activeIndex-> ',activeIndex);
            // const currentVideoElement = document.querySelector(`#Media-Index-${swiper.realIndex}`);
            // currentVideoElement.muted=false;
            if (previousSlideIndex !== swiper.realIndex) {
              const previousVideoElement = document.querySelector(`#Media-Index-${previousSlideIndex}`);
              console.log('==>',previousVideoElement);
              if (previousVideoElement) {
                
                const previousPlayer = previousVideoElement;
                console.log('!previousPlayer.pause()-> ',!previousPlayer.pause())
                if (!previousPlayer.pause()) {
                  previousPlayer.pause();
                }
                // console.log('!previousPlayer.pause()-> ',!previousPlayer.muted)
                // if (!previousPlayer.muted) {
                //   previousPlayer.muted=true;
                // }
              }
            }
            setActiveIndex(swiper.realIndex);
          }
        }
        direction="vertical"
        slidesPerView="auto"
        loop={true}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar]}
        className=" w-screen h-screen  lg:w-3/4  lg:h-[70vh] lg:rounded-lg"
      >
        {slides.map((slide,index) => (
          <SwiperSlide key={slide.id}>
            <SliderCard
              indexId={index}
              key={slide.id}
              mediaSrc={slide.image}
              isVideo={slide.isVideo}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
};

export default VerticalSwiper;
