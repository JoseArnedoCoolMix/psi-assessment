"use client";
import React from "react";
import HomeCarousel from "./HomeCarouselComponent";
import IconFeatures from "./HomeIconRows";
import CardRows from "./HomeCardRows";
import { ContentReveal } from "./Animation/ContentReveal";
import DescriptionFeatures from "./HomeDescriptiveComponent";

const HomeComponent = () => {
  return (
    <div className="flex flex-col w-full ">
      <HomeCarousel />
      <ContentReveal>
        <IconFeatures />
      </ContentReveal>
      <ContentReveal>
        <CardRows />
      </ContentReveal>

      <section className="flex items-center  flex-col">
        <ContentReveal>
          <h2 className="text-2xl md:text-5xl font-semibold text-amber-400">
            Sample Section Title
          </h2>
        </ContentReveal>
        <DescriptionFeatures />
      </section>
    </div>
  );
};

export default HomeComponent;
