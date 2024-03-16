import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const StaticCard = ({ imageSrc, title, description }) => {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          height: "100%",
          margin: "0.1rem",
          boxShadow: "0px 0px 4px 2px rgba(172,172,172,1)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)"; // Restore original scale on hover out
        }}
      >
        <Card.Img variant="top" src={imageSrc} />
        {/* <Card.ImgOverlay style={{ position: "absolute" }}>
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "#BF9855",
              padding: "0.2em",
              position: "absolute",
              width: "2em",
              aspectRatio: "1",
              bottom: "7.5em",
              left: "83%",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
          </div>
        </Card.ImgOverlay> */}
        <Card.Body>
          <Card.Title
            style={{ color: "#CFAE78", marginBottom: "2em", fontSize: "100%" }}
          >
            {title}
          </Card.Title>
          <Card.Text style={{ fontSize: "0.8em", overflow: "hidden"  }}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StaticCard;
