import React from "react";

import Navbar from "./assets/Components/Navbar";
import CopyrightFooter from "./assets/Components/CopyrightFooter";
import ShareStoriesMain from "./assets/ShareYourStory/Components/ShareStoriesMain";


const ShareYourStory = () => {
  return (
    <div>
      <Navbar />
      <ShareStoriesMain  />
      <CopyrightFooter />
    </div>
  );
};

export default ShareYourStory;
