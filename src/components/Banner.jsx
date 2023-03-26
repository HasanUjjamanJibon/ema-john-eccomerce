import React from "react";
import BannerImg from "../assets/images/Group-12.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-between items-center">
      <div>
        <small className="text-[#FF9900]">Sale up to 70% off</small>
        <div className="my-16">
          <h1 className="text-6xl text-black font-bold ">
            New Collection For Fall
          </h1>
          <p className="text-2xl text-[#2A414F]">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
        </div>
        <button class=" bg-[#FF9900] text-[#0E161A] uppercase px-10 py-3 text-xl">shop now</button>
      </div>
      <div>
        <img src={BannerImg} className="h-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
