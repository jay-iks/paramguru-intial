import React from "react";
import "/src/assets/Component_Css/VerticalScrollCard.css"; // Import your stylesheet

const VerticalScrollCard = ({ videoSrc, overlayText, overlaySubText }) => {
  return (
    <div className="video-card">
      <video className="video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <p className="overlay-text">{overlayText}</p>
        <p className="overlay-subtext">{overlaySubText}</p>
      </div>
      <div className="overlay-Img">
        <img src="/Images/VedioPage/send.png" alt="" />
      </div>
      <div className="overlay-arrowImg">
        <img src="/Images/VedioPage/left-arrow.png" alt="" />
      </div>
    </div>
  );
};

export default VerticalScrollCard;
