import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import QuickViewsCards from "/src/assets/QuickViews/Components/QuickViewsCards.jsx";

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

const QuickViewsMain = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div style={{ margin: "auto", marginTop: "1rem" }}>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            {slides.map((slide) => (
              <Col key={slide.id}>
                <QuickViewsCards
                  imageSrc={slide.image}
                  title={slide.title}
                  description={slide.subtitle}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default QuickViewsMain;
