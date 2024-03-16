import React from "react";

import Navbar from "./assets/Components/Navbar";

import QuickViewsMain from "./assets/QuickViews/Components/QuickViewsMain";


const QuickViews = () => {
  return (
    <div>
      <Navbar />

      <div className="Toppart">
        <div className="quickview-wrapper">
          <div className="quick">
            <div className="quicktext">QUICK</div>
          </div>
          <div className="views-wrapper">
            <div className="views">VIEWS</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <QuickViewsMain />
        </div>
      </div>
    </div>
  );
};

export default QuickViews;
