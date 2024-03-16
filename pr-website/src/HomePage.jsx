import React from "react";
import HomeHeroSection from "./assets/HomePage/Components/HomeHeroSection";

// import ParamStoriesBanner from "./assets/Components/ParamStoriesBanner";

import ShareAsk from "./assets/HomePage/Components/ShareAsk";

import AppInfo from "./assets/Components/AppInfo";

import HomePageSlider from "./assets/HomePage/Components/HomePageSlider";

import HomepageFooter from "./assets/HomePage/Components/HomepageFooter";

import InspiringMoment from "./assets/HomePage/Components/InspiringMoment";

import UntoldStories from "./assets/HomePage/Components/UntoldStories";

import MustWatch from "./assets/HomePage/Components/MustWatch";

const HomePage = () => {
  return (
    <>
      <div>
        <HomeHeroSection />

        <HomePageSlider />

        <ShareAsk />

        <InspiringMoment />

        <UntoldStories />

        <MustWatch />

        <AppInfo />

        <HomepageFooter />
      </div>
    </>
  );
};

export default HomePage;
