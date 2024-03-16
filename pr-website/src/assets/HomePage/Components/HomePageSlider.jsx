// HomePageSlider.jsx

import React, { useRef } from "react";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import "../Components_Css/HomePageSlider.css";
import { NavLink } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/Images/SliderImages/1.jpg",
    title: "A Gentle Heart",
    subtitle:
      "It is said that a mother plays the role of a Guru when the child is small and..",
  },
  {
    id: 2,
    image: "/Images/SliderImages/2.jpg",
    title: "The Blood Sugar Test",
    subtitle:
      "For Guru, every shishya is like a child. And the one who experiences Guru’s care, never yearns for..",
  },
  {
    id: 3,
    image: "/Images/SliderImages/3.jpg",
    title: "A Force that EMPOWERS…",
    subtitle: "In December 2022, Param Gurudev was at Palitana.... ",
  },
  {
    id: 4,
    image: "/Images/SliderImages/4.jpg",
    title: "‘Mahamanav’",
    subtitle:
      "On a day when visible smiles painted the sky with colourful kites,..",
  },
  {
    id: 5,
    image: "/Images/SliderImages/7.jpg",
    title: "Where Ego Hurt has NO place",
    subtitle: "How many times have we experienced situations where someone...",
  },
  {
    id: 6,
    image: "/Images/SliderImages/6.jpg",
    title: "Set your Priorities Right",
    subtitle:
      "One evening, several gurubhakts were doing bhakti in Param Gurudev’s sanidhya..",
  },
  {
    id: 7,
    image: "/Images/SliderImages/8.jpg",
    title: "A Love for Discipline",
    subtitle:
      "An anushasak to millions of people across the world, Param Gurudev is most renowned for his love for..",
  },
];

const HomePageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          centerPadding: "30px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          centerPadding: "10px",
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <div className="quickview">
      <div className="quickview-wrapper">
        <div className="quick">
          <div className="quicktext">QUICK</div>
          <div className="greaterthan-symbol">
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
        <div className="views-wrapper">
          <div className="views">VIEWS</div>
        </div>
      </div>
      <div className="quickview-viweall-text-logo">
        <div className="quickview-viweall-text">
          <NavLink to="/quickall">VIEW ALL</NavLink>
        </div>
        <div className="quickview-viweall-logo">
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>
      <div className="slider-wrapper">
        <div className="sliderhomepage">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <NavLink to="/videopage">
                <SliderCard
                  key={slide.id}
                  imageSrc={slide.image}
                  title={slide.title}
                  subtitle={slide.subtitle}
                />
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;
