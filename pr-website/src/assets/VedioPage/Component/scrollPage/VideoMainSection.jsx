import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

// import "../../../VedioPage/Component_Css/VedioMainSection.css";

import VerticalSwiper from "./VerticalSwiper";
import VerticalStoryWidget from "./VideoJs";

// import CopyrightFooter from "/src/assets/Components/CopyrightFooter.jsx"

const VideoMainSection = () => {
  return (
    
      
    
    <div>
      <div className="hidden text-[#aa7b2c] px-[10%]">
        Home &gt; Quick Views &gt; A Gentle Heart
      </div>
      {/* MainSection */}
      <div className="grid lg:grid-cols-2  h-[100vh]">
         
        <div className="w-full">
          <div className=" lg:w-[540px] lg:h-[100%]  lg:m-auto  lg:p-[10] ">
              {/* videoslider */}
              <VerticalSwiper /> 
              {/* <VerticalStoryWidget/> */}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="m-[3%] leading-[2em]">
            <div className=" text-[1.4em]">A Force That Empower</div>
            <div className="text-[1em]"> 100 Views</div>
            <div className="flex gap-2 ">
              <div className="text-[#ffff] rounded-full w-[1.6em] aspect-square bg-[#fec006] flex align-items-center justify-center text-[1.2em]">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className="text-[#ffff] rounded-full w-[1.6em] aspect-square bg-[#cfae78] flex align-items-center justify-center text-[1.2em]">
                <FontAwesomeIcon icon={faShareNodes} />
              </div>
            </div>
            <div className="text-[20px] mt-[15px]">Next Videos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMainSection;
