"use client";
import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const SLIDER_IMAGES = [
  "/slider/slider-1.jpg",
  "/slider/slider-2.jpg",
  "/slider/slider-3.jpg",
];

const HomeSecondSlider = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSwiperChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  const isLastImage = useMemo(() => {
    return activeIndex === SLIDER_IMAGES?.length - 1;
  }, [activeIndex]);

  const isFirstImage = useMemo(() => {
    return activeIndex === 0;
  }, [activeIndex]);

  const nextImage = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      e?.stopPropagation();
      e?.preventDefault();
      if (swiper) {
        if (isLastImage) {
          swiper.slideTo(0);
          return;
        }
        swiper.slideNext();
      }
    },
    [swiper, isLastImage]
  );

  const prevImage = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      e?.stopPropagation();
      e?.preventDefault();
      if (swiper) {
        if (isFirstImage) {
          swiper.slideTo(SLIDER_IMAGES.length - 1);
          return;
        }
        swiper.slidePrev();
      }
    },
    [swiper, isFirstImage]
  );

  return (
    <>
      <div className="flex-1 aspect-[710/550] w-full rounded-[10px] min-[1200px]:rounded-[20px] overflow-hidden min-w-0">
        <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, Parallax]}
          parallax={true}
          onSlideChange={onSwiperChange}
          direction="vertical"
          loop={false}
          autoplay={true}
          className="w-[calc(100%+1px)] h-full"
        >
          {SLIDER_IMAGES.map((image, index) => (
            <SwiperSlide className="w-full h-full" key={index}>
              <Image
                quality={100}
                src={image}
                alt={`slider image ${index + 1}`}
                className="w-full h-full object-cover"
                width={2133}
                height={1392}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-row justify-end h-full">
        <ul className="flex gap-[8px] px-[10px] z-[1] flex-col items-center justify-end h-auto">
          <li
            className={`text-[15px] cursor-pointer opacity-25`}
            onClick={prevImage}
          >
            <IoIosArrowUp />
          </li>
          {swiper &&
            swiper.slides.map((slide, index) => (
              <li
                key={index}
                className={`bg-[white] text-[1px] w-[8px] h-[8px] rounded-full ${
                  index === activeIndex ? "" : "opacity-25 cursor-pointer"
                }`}
                onClick={() => {
                  swiper.slideTo(index);
                }}
              >
                &nbsp;
              </li>
            ))}
          <li
            className={`text-[15px] cursor-pointer opacity-25`}
            onClick={nextImage}
          >
            <IoIosArrowDown />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeSecondSlider;
