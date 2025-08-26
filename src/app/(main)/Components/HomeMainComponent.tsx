"use client";
import React from "react";
import HomeCarousel from "./HomeCarouselComponent";
import CardRows from "./HomeCardRows";
import HomeSecondSliderSection from "./HomeSliderComponent";
import HomeHighlight from "./HomeHighlight";
import DescriptionFeatures from "./HomeDescriptiveComponent";
import GetInquiry from "./HomeGetInquiry";
import HomeVideoComponent from "./HomeVideoComponent";

const HomeComponent = () => {
  return (
    <div className="flex flex-col w-full ">
      <HomeCarousel />
      <HomeSecondSliderSection />
      <CardRows />
      <div className="w-full flex flex-col items-center">
        <HomeVideoComponent />
      </div>
      <HomeHighlight />
      <DescriptionFeatures />
      <GetInquiry />
    </div>
  );
};

export default HomeComponent;
