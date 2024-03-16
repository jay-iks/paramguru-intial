import React from "react";

const WriteStoryForm = ({ setshowstory }) => {
  return (
    <div>
      <form className="w-[80%]  m-auto mt-4">
        <div style={{ border: "2px solid #aa7b2c" }}>
          <input
            className="w-full"
            style={{ outline: "none" }}
            type="text"
            placeholder="* Name"
          />
        </div>
        <div>
          <div className="mt-2 flex">
            <div>
              <select
                name="state_id"
                id="state"
                style={{ border: "2px solid #aa7b2c", width: "80%" }}
              >
                <option value="">Select State</option>
                <option value="1">Andhra Pradesh</option>
                <option value="2">Arunachal Pradesh</option>
                <option value="3">Assam</option>
                <option value="4">Bihar</option>
                <option value="5">Chhattisgarh</option>
                <option value="6">Goa</option>
                <option value="7">Gujarat</option>
                <option value="8">Haryana</option>
                <option value="9">Himachal Pradesh</option>
                <option value="10">Jharkhand</option>
                <option value="11">Karnataka</option>
                <option value="12">Kerala</option>
                <option value="13">Madhya Pradesh</option>
                <option value="14">Maharashtra</option>
                <option value="15">Manipur</option>
                <option value="16">Meghalaya</option>
                <option value="17">Mizoram</option>
                <option value="18">Nagaland</option>
                <option value="19">Odisha</option>
                <option value="20">Punjab</option>
                <option value="21">Rajasthan</option>
                <option value="22">Sikkim</option>
                <option value="23">Tamil Nadu</option>
                <option value="24">Telangana</option>
                <option value="25">Tripura</option>
                <option value="26">Uttar Pradesh</option>
                <option value="27">Uttarakhand</option>
                <option value="28">West Bengal</option>
                <option value="29">Andaman and Nicobar Islands</option>
                <option value="30">Chandigarh</option>
                <option value="31">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="32">Delhi</option>
                <option value="33">Jammu and Kashmir</option>
                <option value="34">Ladakh</option>
                <option value="35">Lakshadweep</option>
                <option value="36">Puducherry</option>
              </select>
            </div>
            <div className="flex gap-3">
              <div className="text-[20px] ml-5" style={{ color: "#706b84" }}>
                OR
              </div>
              <div className="flex">
                <span className="text-[15px]">
                  Set Your <br />
                  Location
                </span>
                <span className="flex gap-2 w-[50px]">
                  <img
                    src="/Images/strory/map_ico.png"
                    alt="Map Icon"
                    title="Map Icon"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2" style={{ border: "2px solid #aa7b2c" }}>
          <input
            className="w-full"
            style={{ outline: "none" }}
            type="text"
            placeholder="* Mobile"
          />
        </div>
        <div className="mt-2" style={{ border: "2px solid #aa7b2c" }}>
          <input
            className="w-full "
            style={{ outline: "none" }}
            type="text"
            placeholder="* Details of the Person"
          />
        </div>
        <div className="mt-2" style={{ border: "2px solid #aa7b2c" }}>
          <textarea
            name="WriteyourStory"
            id=""
            cols="5"
            rows="8"
            className="w-[100%]"
            placeholder="* Write Story Here"
            style={{ outline: "none" }}
          ></textarea>
        </div>

        <div
          style={{
            border: "2px dotted #aa7b2c",
            borderRadius: "20px",
            padding: "5px",
            textAlign: "center",
            margin: "10px",
          }}
        >
          <div className="flex justify-center">
            <img
              src="Images/strory/upload_icon.svg"
              alt=""
              className="w-[15%] "
            />
          </div>
          <div>Upload Photos and other related documents Here</div>
          <input
            type="file"
            name="media_image"
            placeholder="Browse"
            id="clickphoto-writestory"
            accept="image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          />
        </div>

        <div className="flex flex-wrap gap-5 justify-evenly mt-[5px]">
          <div className="text-1 text-[#ffffff] rounded-[100px] bg-[#aa7b2c] hover:bg-[#ffffff] hover:text-[#aa7b2c] border-2 border-[#aa7b2c] px-[10px] py-[5px]  ">
            <div className="text-center  ">Share Your Stories</div>
          </div>
          <div className="text-1 text-[#ffffff] rounded-[100px] bg-[#aa7b2c] hover:bg-[#ffffff] hover:text-[#aa7b2c] border-2 border-[#aa7b2c] px-[15px] py-[5px]  ">
            <div className="text-center " onClick={() => setshowstory(true)}>
              Cancel
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WriteStoryForm;
