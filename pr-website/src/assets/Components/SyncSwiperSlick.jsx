// import React, { useRef, useState } from "react";
// import Swiper from "react-id-swiper";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import 'swiper/css/swiper.css';
// // import './styles.css';

// import './SyncSwiperSlick.css'

// const SyncSwiperSlick = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   let swiperRef = useRef(null);
//   let slickRef = useRef(null);

//   const handleSwiperSlideChange = (swiper) => {
//     console.log(`slickref`, slickRef);
//     setActiveSlideIndex(swiper.activeIndex
//       );
//     console.log("--->",swiper)
//     console.log(`INdex of slick`, swiper.activeIndex);
//     if (slickRef) {
//       activeIndex= swiper.activeIndex
//       slickRef.slickGoTo(activeIndex);
//     }
//   };

//   const handleSlickSlideChange = (index) => {
//     console.log(`swiperref`, swiperRef);
//     console.log(`INdex of slick`, index);

//     // Use Swiper.js methods to set the active slide
//     if (swiperRef.current) {
//       swiperRef.current.slider(index);
//     }
//   };

//   const swiperParams = {
//     on: {
//       slideChange: handleSwiperSlideChange,
//     },
//   };

//   const slickSettings = {
//     beforeChange: (_, newIndex) => handleSlickSlideChange(newIndex),
//   };

//   return (
//     <div >
//       <Swiper  ref={swiperRef} {...swiperParams}>
//         <div className="w-[200px] h-[100px] bg-indigo-500">Swiper Slide 1</div>
//         <div className="w-[200px] h-[100px] bg-indigo-500" >Swiper Slide 2</div>
//         <div className="w-[200px] h-[100px] bg-indigo-500" >Swiper Slide 3</div>
//       </Swiper>

//       <Slider
//         style={{ margin: 50 }}
//         ref={(slider) => {
//           slickRef = slider;
//         }}
//         {...slickSettings}
//       >
//         <div className="w-[200px] h-[100px] bg-indigo-500">Slick Slide 1</div>
//         <div className="w-[200px] h-[100px] bg-indigo-500">Slick Slide 2</div>
//         <div className="w-[200px] h-[100px] bg-indigo-500">Slick Slide 3</div>
//       </Slider>

//       <p>Active Slide Index: {activeSlideIndex}</p>

//     </div>
//   );
// };

// export default SyncSwiperSlick;



import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyComponent = () => {
  const swiperRef = React.useRef(null);
  const sliderRef = React.useRef(null);

  React.useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const slides = [
    {
      img: 'https://d29pqav9qrk2pj.cloudfront.net/cms/65c206ea7d62f_mahendra-tripathi-namo.jpg',
      title: 'Ram Mandir: Modi’s unyielding determination for his 1992 pledge',
    },
    {
      img: 'https://d29pqav9qrk2pj.cloudfront.net/cms/65c202b40d614_swami-govind-namo.jpg',
      title: 'PM Modi’s suggestions for keeping Ram Mandir\'s Sanctum Sanctorum pure',
    },
    {
      img: 'https://d29pqav9qrk2pj.cloudfront.net/cms/65c2032d59429_makrand-shukla-kite-festival-.jpg',
      title: 'PM Modi\'s Kite Flying in Indonesia',
    },
    {
      img: 'https://d29pqav9qrk2pj.cloudfront.net/cms/6597a7d955db5_ajey-bharti.jpg',
      title: 'A Kashmiri\'s love for Narendra Modi',
    },
  ];

  return (
    <div>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <img src={slide.img} alt={slide.title} />
              <h3>{slide.title}</h3>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} alt={slide.title} />
            <h3>{slide.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyComponent;