import React from "react";
import SwiperCore from "swiper";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import SliderCard from "./SliderCard";
// import './styles.css'; // Import your custom styles if any

// Install Swiper modules
SwiperCore.use([Scrollbar]);

const VerticalSwiper = () => {
  const slides = [
    {
      id: 1,
      image: "Images/DetailPage/gurudevjpg.mp4",
      isVideo: true,
      title: "A Gentle Heart",
      subtitle:
        "It is said that a mother plays the role of a Guru when the child is small and..",
    },
    // {
    //   id: 2,
    //   image: "/Images/SliderImages/2.jpg",
    //   title: "The Blood Sugar Test",
    //   subtitle:
    //     "For Guru, every shishya is like a child. And the one who experiences Guru’s care, never yearns for..",
    // },
    {
      id: 3,
      image: "Images/SliderImages/3 (1).mp4",
      isVideo: true,
      title: "A Force that EMPOWERS…",
      subtitle: "In December 2022, Param Gurudev was at Palitana.... ",
    },
    {
      id: 4,
      image: "Images/DetailPage/Ram-Ram-Jai.mp4",
      isVideo: true,
      title: "Ram Laxman",
      subtitle: "In December 2022, Param Gurudev was at Palitana.... ",
    },
    // {
    //   id: 4,
    //   image: "/Images/SliderImages/4.jpg",
    //   title: "‘Mahamanav’",
    //   subtitle:
    //     "On a day when visible smiles painted the sky with colourful kites,..",
    // },
    // {
    //   id: 5,
    //   image: "/Images/SliderImages/8.jpg",
    //   title: "Where Ego Hurt has NO place",
    //   subtitle:
    //     "How many times have we experienced situations where someone...",
    // },
    // {
    //   id: 6,
    //   image: "/Images/SliderImages/6.jpg",
    //   title: "Set your Priorities Right",
    //   subtitle:
    //     "One evening, several gurubhakts were doing bhakti in Param Gurudev’s sanidhya..",
    // },
    // {
    //   id: 7,
    //   image: "/Images/SliderImages/8.jpg",
    //   title: "A Love for Discipline",
    //   subtitle:
    //     "An anushasak to millions of people across the world, Param Gurudev is most renowned for his love for..",
    // },
  ];

  //  once video is completed play another
  // play and pause
  //  dynamic data
  //
  //

  return (
    <div>
      <Swiper
        direction="vertical"
        slidesPerView="auto"
        loop={true}
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar]}
        className=" w-screen h-screen  lg:w-3/4  lg:h-[70vh] lg:rounded-lg"
        // Ensure swiper takes full height of the screen  <md:w-full md:h-[80vh]>
      >
        {/* <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
            </SwiperSlide>
            <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
            </SwiperSlide>
            <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
            </SwiperSlide>
            <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
            </SwiperSlide>
            <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
            </SwiperSlide>
            <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
            </SwiperSlide>
            <SwiperSlide className="aspect-w-16 aspect-h-9">
                
                <img className="fixed top-0 left-0 w-full md:w-auto m-auto p-auto  bg-transparent z-50" src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
            </SwiperSlide> */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliderCard
              key={slide.id}
              mediaSrc={slide.image}
              isVideo={slide.isVideo}
              title={slide.title}
              subtitle={slide.subtitle}
            />
          </SwiperSlide>
        ))}
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default VerticalSwiper;
