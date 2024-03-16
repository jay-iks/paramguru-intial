import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

import "/src/assets/HomePage/Components_Css/InspiringMoments.css";

import StaticCard from "../../Components/StaticCard";
// import { NavLink } from "react-bootstrap";

const InspiringMoment = () => {
  const cardData = [
    {
      id: 4,
      image: "/Images/SliderImages/4.jpg",
      title: "‘Mahamanav’",
      subtitle:
        "On a day when visible smiles painted the sky with colourful kites,..",
    },
    {
      id: 1,
      image: "/Images/SliderImages/1.jpg",
      title: "A Gentle Heart",
      subtitle:
        "It is said that a mother plays the role of a Guru when the child is small and..",
    },
    {
      id: 3,
      image: "/Images/SliderImages/3.jpg",
      title: "A Force that EMPOWERS…",
      subtitle: "In December 2022, Param Gurudev was at Palitana.... ",
    },
    {
      id: 2,
      image: "/Images/SliderImages/2.jpg",
      title: "The Blood Sugar Test",
      subtitle:
        "For Guru, every shishya is like a child. And the one who experiences Guru’s ..",
    },
    {
      id: 5,
      image: "/Images/SliderImages/7.jpg",
      title: "Where Ego Hurt has NO place",
      subtitle:
        "How many times have we experienced situations where someone...",
    },
    {
      id: 7,
      image: "/Images/SliderImages/8.jpg",
      title: "A Love for Discipline",
      subtitle: "An anushasak to millions of people across the world, ",
    },
    {
      id: 6,
      image: "/Images/SliderImages/6.jpg",
      title: "Set your Priorities Right",
      subtitle:
        "One evening, several gurubhakts were doing bhakti in Param Gurudev’s sanidhya..",
    },
    {
      id: 8,
      image: "/Images/SliderImages/9.jpg",
      title: "A Lesson at Every Step of Life",
      subtitle:
        "Every step of life is a lesson, only if we have an eye for learning from every situation that comes ",
    },
  ];

  return (
    <div className="InspiringMoments">
      <div className="Toppart">
        <div className="quickview-wrapper">
          <div className="quick">
            <div className="quicktext">INSPIRING</div>
            <div className="greaterthan-symbol">
              <FontAwesomeIcon icon={faGreaterThan} />
            </div>
          </div>
          <div className="views-wrapper">
            <div className="views">MOMENTS</div>
          </div>
        </div>
        <div className="quickview-viweall-text-logo">
          <div className="quickview-viweall-text">VIEW ALL</div>
          <div className="quickview-viweall-logo">
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
      </div>
      <div className="section-inspiringmoment">
        <Container>
          {/* Set xs={1} for extra-small screens (mobile), md={2} for medium, lg={4} for large */}
          <Row xs={1} md={2} lg={4} className="g-4">
            {cardData.map((data, index) => (
              <Col key={index}>
                <NavLink to="/detailpage">
                  <StaticCard
                    imageSrc={data.image}
                    title={data.title}
                    description={data.subtitle}
                  />
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default InspiringMoment;
