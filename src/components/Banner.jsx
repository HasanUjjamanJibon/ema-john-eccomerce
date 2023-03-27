import React from "react";
import BannerImg from "../assets/images/Group-12.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto h-fit lg:h-screen flex flex-wrap justify-center lg:justify-between items-center gap-10 overflow-hidden mb-10">
      <div className="px-6 text-center lg:text-left">
        <small className=" text-[#FF9900] ">Sale up to 70% off</small>
        <div className="my-16">
          <h1 className="text-6xl text-black font-bold ">
            New Collection For Fall
          </h1>
          <p className="text-2xl text-[#2A414F]">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>
        <button className=" bg-[#d8e8f3] hover:bg-[#adcfe9] rounded-md text-[#0E161A] transition-colors uppercase px-10 py-3 text-xl font-semibold">
          shop now
        </button>
      </div>
      <div>
        <img src={BannerImg} className="h-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
