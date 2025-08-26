import React, { useState, useRef, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const images = [
  "/carousel/carousel-1.jpg",
  "/carousel/carousel-2.jpg",
  "/carousel/carousel-3.jpg",
];

// Overlay content with different positions and font roles
const overlays = [
  {
    subtitle: "Life flows in curves,",
    title: "REVEALING ENDLESS POSSIBILITIES",
    body: "",
    position: "justify-center items-end px-4 text-right md:px-5", // left
    bodyPosition: "flex justify-end",
  },
  {
    subtitle: "Art of curves in",
    title: "CONTEMPORARY ARCHITECTURE",
    body: "Nestled in Dubai Science Park, this exquisite development features an elegantly curved design, harmonising natural airflow to evoke a sense of openness and freedom . The two masterfully designed towers house a collection of apartments, townhouses, and duplex sky villas, each meticulously crafted with sophistication and timeless style.",
    position:
      "justify-start items-center px-4 md:px-5 pb-24 py-[150px] text-center", // bottom center
    bodyPosition: "flex justify-center",
  },
  {
    subtitle: "Dedicated to the",
    title: "EXCEPTIONAL",
    body: "At SAAS Properties, we craft homes that transcend the everyday, offering an unparalleled experience defined by timeless design and refined aesthetics . We endeavour to create premium living space that seamlessly blends innovation and sustainability. With projects that set the benchmark for elegance and quality in the region, SAAS Properties is synonymous with luxury living in the UAE. Our acclaimed projects include SAAS Tower in Dubai , One Reem Island , Reem Five , Reem Nine Reem Eight, Reem Eleven and SAAS Business Tower, in Abu Dhabi.",
    position: "justify-end items-start px-4 md:px-10 pb-32 text-left", // top right
    bodyPosition: "flex justify-start",
  },
];

// Set a slower fade duration for overlays (e.g., 2000ms)
const OVERLAY_FADE_DURATION = 2000;

const AUTO_ADVANCE_INTERVAL = 10000;

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTO_ADVANCE_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  const goTo = (idx: number) => {
    setCurrentIndex(idx);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div className="relative w-[100dvw] h-[100dvh] overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        {images.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              zIndex: idx,
              opacity: idx === currentIndex ? 1 : 0,
              pointerEvents: idx === currentIndex ? "auto" : "none",
            }}
          >
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={idx === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
            {/* Overlay Content (morphs with image, different positions, slower fade) */}
            <div
              className={`absolute z-20 top-0 left-0 w-full h-full flex flex-col gap-3 ${overlays[idx].position}`}
              style={{
                transition: `opacity ${OVERLAY_FADE_DURATION}ms`,
                opacity: idx === currentIndex ? 1 : 0,
                pointerEvents: idx === currentIndex ? "auto" : "none",
              }}
            >
              <div className="w-full max-w-full flex flex-col gap-2 md:w-[900px]">
                <span className="italic font-serif text-lg md:text-3xl text-white/80 leading-tight break-words">
                  {overlays[idx].subtitle}
                </span>
                <h2 className="font-serif font-bold uppercase text-2xl md:text-6xl text-white tracking-wide leading-tight break-words">
                  {overlays[idx].title}
                </h2>
                <div className={`${overlays[idx].bodyPosition}`}>
                  <div className="font-sans max-w-full md:max-w-[700px] text-base md:text-lg text-white drop-shadow-lg leading-snug break-words">
                    {overlays[idx].body}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 w-full flex items-center justify-center z-40">
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
                  ? "w-10 bg-[rgba(255,255,255,0.7)]"
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
