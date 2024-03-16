import React from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./assets/Components/Navbar";

// import VedioMainSection from "./assets/VedioPage/Component/VedioMainSection";

// import SyncSliders from "./assets/Components/SyncSliders";

// import SyncSliderSwiper from "/src/assets/Components/SyncSliderSwiper.jsx";

// import SyncSwiperSlick from "./assets/Components/SyncSwiperSlick";


import VerticalScroll from "./assets/Components/VerticalScroll";

import VideoMainSection from "./assets/VedioPage/Component/scrollPage/VideoMainSection";
    
const VideoPage = () => {
  

  return (
    <>
      <div className="hidden lg:block"><Navbar/></div>

      <VideoMainSection />

      {/* <VerticalScroll/> */}

      {/* <SyncSliderSwiper/> */}

      {/* <SyncSliders /> */}

      {/* <VedioMainSection/> */}

      {/* <CopyrightFooter/> */}

      {/* <SyncSwiperSlick/> */}
    </>
  );
};

export default VideoPage;
