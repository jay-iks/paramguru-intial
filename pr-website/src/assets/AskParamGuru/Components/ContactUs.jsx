import React from "react";

const ContactUs = () => {
  return (
    <div>
      <form className=" sm:w-[100%] p-[2%] md:w-3/4 lg:w-1/2">
        <div style={{ border: "2px solid #aa7b2c" }}>
          <input
            className="w-full p-[4px]"
            style={{ outline: "none" }}
            type="text"
            placeholder="* Name"

          />
        </div>
        <div style={{ border: "2px solid #aa7b2c", marginTop: "10px" }}>
          <input
            className="w-full p-[4px] "
            style={{ outline: "none" }}
            type="text"
            placeholder="* Mobile"
          />
        </div>
        <div style={{ border: "2px solid #aa7b2c", marginTop: "10px" }}>
          <input
            className="w-full p-[4px]"
            style={{ outline: "none" }}
            type="Email"
            placeholder="* Email"
          />
        </div>
        <div style={{ border: "2px solid #aa7b2c", marginTop: "10px" }}>
          <textarea
          className="p-[4px]"
            style={{width:'100%', height:'100%' , outline:'none'}}
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="* Message"
          ></textarea>
        </div>
        <div>
          <div className="bg-[#aa7b2c] text-[#ffffff] rounded border-2 border-[#aa7b2c] px-[10px] py-[5px] w-[100px] m-auto mt-3 p-[4px]">
            <div className="text-center  ">Submit</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
