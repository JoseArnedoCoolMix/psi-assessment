import React, { useRef, useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const images = [
  "/carousel/carousel-1.jpg",
  "/carousel/carousel-2.jpg",
  "/carousel/carousel-3.jpg",
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll to the current image smoothly when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * currentIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const goTo = (idx: number) => setCurrentIndex(idx);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[100dvw] h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Carousel Images */}
      <div
        ref={carouselRef}
        className="flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, idx) => (
          <div
            key={src}
            className="relative w-[100dvw] h-[100dvh] flex-shrink-0 snap-center"
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={idx === 0}
              sizes="100vw"
            />
            {/* Overlay for darkening image for text readability */}
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
            {/* Overlay Content */}
            <div className="absolute z-20 top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-5 px-0 md:px-5">
              <h2 className="text-2xl md:text-6xl font-semibold text-amber-400 drop-shadow-lg">
                Luxury Brand Example
              </h2>
              <p className="max-w-[700px] text-2xl drop-shadow-lg">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem ipsum
                dolor sit amet. Faucibus porta lacus fringilla vel.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 w-full flex items-center justify-center z-30">
        <div className="flex gap-2 items-center">
          <button
            aria-label="Previous Slide"
            onClick={prevSlide}
            className="p-2 bg-[rgba(60,60,60,0.3)] cursor-pointer rounded-full transition-all hover:bg-[rgba(155,155,155,0.3)]"
          >
            <FiArrowLeft size={20} />
          </button>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-5 ${
                idx === currentIndex
                  ? "w-10 bg-[rgba(255,182,35,0.7)]"
                  : "w-5 bg-[rgba(60,60,60,0.3)] hover:bg-[rgba(155,155,155,0.3)]"
              } shrink-0 cursor-pointer rounded-full transition-all`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <button
            aria-label="Next Slide"
            onClick={nextSlide}
            className="p-2 bg-[rgba(60,60,60,0.3)] cursor-pointer rounded-full transition-all hover:bg-[rgba(155,155,155,0.3)]"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
