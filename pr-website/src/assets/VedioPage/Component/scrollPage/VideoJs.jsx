import React, { useRef, useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

SwiperCore.use([Pagination, Scrollbar]);

const VerticalStoryWidget = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    swiperInstance.on('slideChange', () => {
      const previousSlideIndex = swiperInstance.previousIndex;
      if (previousSlideIndex !== activeIndex) {
        const previousVideoElement = document.querySelector(`#video-${previousSlideIndex}`);
        if (previousVideoElement) {
          const previousPlayer = videojs(previousVideoElement);
          if (!previousPlayer.paused()) {
            previousPlayer.pause();
          }
        }
      }
      setActiveIndex(swiperInstance.realIndex);
    });

    return () => {
      swiperInstance.destroy();
    };
  }, [activeIndex]);

  useEffect(() => {
    const videoElements = document.querySelectorAll('.swiper-slide video');
    videoElements.forEach((videoElement, index) => {
      const player = videojs(videoElement, {}, function onPlayerReady() {});

      return () => {
        player.dispose();
      };
    });
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      direction="vertical"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      keyboard={true}
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <video
          id={`video-0`}
          className="video-js"
          controls
          preload="auto"
          width="auto"
          height="auto"
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <video
          id={`video-1`}
          className="video-js"
          controls
          preload="auto"
          width="auto"
          height="auto"
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>
      {/* Add more slides with videos */}
    </Swiper>
  );
};

export default VerticalStoryWidget;
