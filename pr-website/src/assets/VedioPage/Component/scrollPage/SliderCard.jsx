// import React, { useRef, useEffect } from "react";
// import { CardImgOverlay } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import { NavLink } from "react-router-dom";
// import VideoJS from "./VideoJs";
// import { faL } from "@fortawesome/free-solid-svg-icons";

// const SliderCard = ({ mediaSrc, title, subtitle, isVideo, isActive }) => {
//   const playerRef = useRef(null);

//   useEffect(() => {
//     // Play or pause video based on isActive prop
//     if (playerRef.current) {
//       if (isActive) {
//         playerRef.current.play();
//       } else {
//         playerRef.current.pause();
//       }
//     }
//   }, [isActive]);

//   const videoJsOptions = {
//     autoplay: true,
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: mediaSrc,
//         type: "video/mp4",
//       },
//     ],
//   };

//   // const handlePlayerReady = (player) => {
//   //   playerRef.current = player;

//   //   player.on("waiting", () => {
//   //     console.log("player is waiting");
//   //   });

//   //   player.on("dispose", () => {
//   //     console.log("player will dispose");
//   //   });
//   // };

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Card
//         style={{
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           cursor: "pointer",
//         }}
//       >
//         {isVideo ? (
//           <VideoJS
//             options={{
//               autoplay: true,
//               controls: true,
//               responsive: true,
//               fluid: true,
//               sources: [{ src: mediaSrc, type: "video/mp4" }],
//             }}
//             onReady={(player) => (playerRef.current = player)}
//           />
//         ) : (
//           <Card.Img
//             src={mediaSrc}
//             style={{ height: "100%", width: "100%", objectFit: "cover" }}
//           />
//         )}
//       </Card>
//     </div>
//   );
// };

// export default SliderCard;



import React, { useState, useRef, useEffect } from "react";
import { CardImgOverlay, CardTitle, CardSubtitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const SliderCard = ({ indexId, mediaSrc, title, subtitle, isVideo }) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

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

  // console.log('indexId',indexId);

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
          <video
            id={`Media-Index-${indexId}`}
            onClick={onVideoClick}
            src={mediaSrc}
            ref={vidRef}
            autoPlay
            loop
            muted
            // controls={true}

            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            // controls // Add controls for video playback
          />
        ) : (
          <Card.Img
            id={`Media-Index-`+{indexId}}
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
            top: "5%",
            left: "85%",
          }}
        >
          <div
            style={{
              width: "3em",
              aspectRatio: "1",
              borderRadius: "50%",

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
        <CardImgOverlay style={{ width: "3em", aspectRatio: "1" }}>
          <NavLink to="/">
            <div
              style={{
                width: "3em",
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
                alt=""
              />
            </div>
          </NavLink>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SliderCard;
