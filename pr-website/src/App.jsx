import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";

// VideoPage
import VideoPage from "./VideoPage";

//HomePage
import HomePage from "./HomePage";

// DetailPage
import DetailPage from "./DetailPage";

// Share your stories
import ShareYourStory from "./ShareYourStory";

//  AskParamDev
import AskParamDev from "./AskParamDev";

//QuickViews
import QuickViews from "./QuickViews";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailpage" element={<DetailPage />}></Route>
          <Route path="/videopage" element={<VideoPage />}></Route>
          <Route path="/shareyourstories" element = {<ShareYourStory/>}></Route>
          <Route path ="/askparamdev" element = {<AskParamDev/>}></Route>
          <Route path ="/quickall" element = {<QuickViews/>}></Route>
        </Routes>
      </Router>

      {/* <HomePage/> */}
      {/* <VideoPage/> */}

      {/* <DetailPage /> */}

      {/* <ShareYourStory/> */}
    </>
  );
};

export default App;
