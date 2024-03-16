import React from "react";
import { CardImgOverlay, CardTitle, CardSubtitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const QuickViewsCards = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="slidercard">
      <Card
        style={{
          margin:"auto",
          width: "100%",
          height: "25rem",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        <Card.Img
          src={imageSrc}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />

        <CardImgOverlay
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            position: "absolute",
            top: "80%",
            width: "100%",
            height: "20%",
          }}
        >
          <CardTitle
            style={{ color: "white", fontSize: "0.9em", marginBottom: "0.5em" }}
          >
            {title}
          </CardTitle>
          <CardSubtitle
            style={{ color: "white", fontSize: "0.6em", overflow: "hidden" }}
          >
            {subtitle}
          </CardSubtitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default QuickViewsCards;
