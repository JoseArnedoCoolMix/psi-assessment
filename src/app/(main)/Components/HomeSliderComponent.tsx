import React from "react";
// import HomeSecondSlider from "./HomeSecondSlider";
import { TitleReveal } from "./Animation/TitleReveal";
import { ContentReveal } from "./Animation/ContentReveal";
// import Image from "next/image";
import HomeSecondSlider from "./HomeSliderImg";

const HomeSecondSliderSection = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="content-section pt-[100px] md:pt-[60px] pb-[100px] md:pb-[60px] flex flex-col-reverse min-[1200px]:flex-row max-[1999px]:gap-[20px]">
        <div className="flex-[50%] min-w-0 flex select-none relative justify-center items-center">
          <HomeSecondSlider />
          {/* <div
            className="aspect-square rounded-2xl flex overflow-hidden"
            style={{ boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.1)" }}
          >
            <Image
              src={`/slider/slider-2.jpg`}
              alt={"podium"}
              width={500}
              height={500}
              objectFit="cover"
            />
          </div> */}
        </div>
        <div className="flex-[50%] shrink-0 min-[1200px]:pr-[80px] flex flex-col justify-center">
          <TitleReveal>
            <h2 className="font-serif text-2xl md:text-5xl leading-[30px] md:leading-[1.25] mb-[20px]">
              Greeting Modernity.
              <br />
              Embrace Serenity
            </h2>
          </TitleReveal>

          <ContentReveal>
            <p className="font-sans">
              Discover a sanctuary where modern design meets tranquil living.
              Our residences are thoughtfully crafted to provide a serene escape
              from the hustle and bustle, allowing you to unwind in style.
              Experience the perfect blend of contemporary aesthetics and
              peaceful ambiance, creating a harmonious environment that feels
              like home.
            </p>
          </ContentReveal>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSliderSection;
