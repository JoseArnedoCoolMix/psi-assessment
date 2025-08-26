"use client";
import React from "react";
import HomeCarousel from "./HomeCarouselComponent";
import CardRows from "./HomeCardRows";
import HomeSecondSliderSection from "./HomeSliderComponent";
import HomeHighlight from "./HomeHighlight";
import DescriptionFeatures from "./HomeDescriptiveComponent";
import GetInquiry from "./HomeGetInquiry";

const HomeComponent = () => {
  return (
    <div className="flex flex-col w-full ">
      <HomeCarousel />
      <HomeSecondSliderSection />
      <CardRows />
      <HomeHighlight />
      <DescriptionFeatures />
      <GetInquiry />
    </div>
  );
};

export default HomeComponent;
