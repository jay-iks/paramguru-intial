import React from "react";
import { CardImgOverlay, CardTitle, CardSubtitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const SliderCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Card
        style={{
          width: "auto",
          height: "100%",
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
        <CardImgOverlay style={{}}>
          <div
            style={{
              borderRadius: "50%",
              width: "30px",
              aspectRatio: "1",
              backgroundColor: "#FBF7F6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "50%" }}
              src="/Images/VedioPage/send.png"
              alt=""
            />
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SliderCard;
