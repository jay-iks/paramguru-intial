import React, { useState, useRef, useEffect } from "react";
import { CardImgOverlay, CardTitle, CardSubtitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import VideoJS from "./VideoJs";
import { NavLink } from "react-router-dom";

const SliderCard = ({ mediaSrc, title, subtitle, isVideo }) => {
  // const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "Images/DetailPage/Ram-Ram-Jai.mp4",
        type: "video/mp4",
      },
      {
        src: "Images/SliderImages/3 (1).mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const vidRef = useRef();


  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Card
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        {isVideo ? (
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        ) : (
          // <video
          //   // onClick={onVideoClick}

          //   src={mediaSrc}
          //   // ref={vidRef}
          //   autoPlay
          //   loop
          //   muted

          //   // controls={true}

          //   style={{ height: "100%", width: "100%", objectFit: "cover" }}
          //   // controls // Add controls for video playback
          // />
          <Card.Img
            src={mediaSrc}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        )}
        {/* <CardImgOverlay
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            position: "absolute",
            top: "80%",
            width: "100%",
            height: "20%",
          }}
        >
          <CardTitle
            style={{ color: "white", fontSize: "1.5em", marginBottom: "0.5em" }}
          >
            {title}
          </CardTitle>
          <CardSubtitle
            style={{ color: "white", fontSize: "1em", overflow: "hidden" }}
          >
            {subtitle}
          </CardSubtitle>
        </CardImgOverlay> */}
        <div
          style={{
            width: "3em",
            aspectRatio: "1",
            position: "absolute",
            top: "30%",
            right: "5%",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: "50%",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#CCCCCC",
            }}
          >
            <img
              style={{ width: "50%" }}
              src="/Images/VedioPage/send.png"
              alt=""
            />
          </div>
        </div>
        <CardImgOverlay style={{ width: "5em", aspectRatio: "1" }}>
          <NavLink to="/">
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: "50%",
                marginLeft: "5%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#CCCCCC",
                color: "#ffffff",
              }}
            >
              <img
                style={{ width: "50%" }}
                src="/Images/VedioPage/left-arrow.png"
                alt="image"
              />
            </div>
          </NavLink>
        </CardImgOverlay>
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            backgroundColor: "#CCCCCC",
            padding: "0.5em",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex ", alignItems: "center" }}>
            <div style={{ font: "1em" }}> Tap to mute </div>
            <div style={{ width: "1em" }}>
              <img src="public\Images\VedioPage\sound_off.png" alt="" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SliderCard;
