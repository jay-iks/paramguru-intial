import React, { useState } from "react";

import "/src/assets/ShareYourStory/Component_Css/ShareStoriesMain.css";
import WriteStoryForm from "./WriteStoryForm";
import UploadStoryForm from "./UploadStoryForm";

const ShareStoriesMain = () => {
  const [showstory, setshowstory] = useState(true);

  const shareShowClick = () => {
    setshowstory(false);
  };

  const [showsupload, setshowupload] = useState(true);

  const UploadSchowCLick = () => {
    setshowupload(false);
  };

  return (
    <div className="mb-10">
      <div>
        <div className="Toppart">
          <div className="quickview-wrapper">
            <div className="quick">
              <div className="quicktext">SHARE YOUR</div>
            </div>
            <div className="views-wrapper">
              <div className="views">STORY</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  m-auto">
        <div
          className="w-9/12 text-[19px]"
          style={{
            margin: "3rem auto",
          }}
        >
          <div
            style={{
              fontSize: "1.1",
              fontWeight: "400",
              textAlign: "center",
              fondfamily: "GothamBook",
            }}
          >
            A special section where you can share your moments spent in Guru
            sanidhya, first-hand experiences of His divine grace and memories of
            incidents that have inspired you profoundly. If you have special
            photographs or hand-written notes by Param Gurudev, you can share
            those too here.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-center">
              <div>
                <div className="flex  justify-center items-center aspect-square rounded-full bg-[#aa7b2c] w-[5em] m-auto">
                  <div className="w-1/2">
                    <img src="/Images/strory/wrtstyico.svg" alt="" />
                  </div>
                </div>
                <div
                  className="flex  justify-center items-center m-[10px] text-[20px] font-medium
                "
                >
                  WRITE YOUR STORIES
                </div>
                {showstory && (
                  <div
                    className="text-[1.3em] text-[#aa7b2c] rounded-[10px] hover:bg-[#aa7b2c] hover:text-white border-2 border-[#aa7b2c]"
                    onClick={shareShowClick}
                  >
                    <div className="text-center p-[4px] ">
                      WRITE YOUR STORIES
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              {!showstory && <WriteStoryForm setshowstory={setshowstory} />}
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="flex  justify-center items-center aspect-square rounded-full bg-[#aa7b2c] w-[5em] m-auto">
                <div className="w-1/2">
                  <img src="/Images/strory/videoico.svg" alt="" />
                </div>
              </div>
              <div
                className="flex  justify-center items-center m-[10px] text-[20px] font-medium
                "
              >
                UPLOAD VIDEOS/AUDIOS
              </div>
              {showsupload && (
                <div
                  className="text-[1.3em] text-[#aa7b2c] rounded-[10px] hover:bg-[#aa7b2c] hover:text-white border-2 border-[#aa7b2c]
                "
                  onClick={UploadSchowCLick}
                >
                  <div className="text-center p-[4px] ">UPLOAD YOUR VIDEOS</div>
                </div>
              )}
              <div>
                {!showsupload && (
                  <UploadStoryForm setshowupload={setshowupload} />
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareStoriesMain;
