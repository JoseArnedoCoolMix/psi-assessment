import React, { useEffect, useRef, useState } from "react";
import { TitleReveal } from "./Animation/TitleReveal";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const AMENITIES = [
  {
    title: "Bedroom",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "bedroom.jpg",
  },
  {
    title: "Living Room",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "living.jpg",
  },
  {
    title: "Kitchen",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "kitchen.jpg",
  },
  {
    title: "Cinematic Experience",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "cinema.jpg",
  },
  {
    title: "Pool",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "pool.jpg",
  },
  {
    title: "Spa",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "spa.jpg",
  },
  {
    title: "Gaming",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "gaming.jpg",
  },
  {
    title: "Wall",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "wall.jpg",
  },
  {
    title: "Kids Area",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada. Nunc congue urna id laoreet tempor.",
    image: "kids.jpg",
  },
];

const CardRows = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Only run on client
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance every 10 seconds, only if in view
  useEffect(() => {
    if (!inView) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % AMENITIES.length);
    }, 10000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, inView]);

  // Scroll active card into view horizontally, only if in view
  useEffect(() => {
    if (inView) {
      cardRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex, inView]);

  // Handler for card click: set active and reset timer
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center flex-col py-10 md:py-20 bg-neutral-100"
    >
      <div className="flex w-full px-4 font-semibold md:font-normal md:px-0 p-0 md:p-5 justify-start md:justify-center">
        <TitleReveal>
          <h3 className="font-serif text-black pb-5 text-3xl md:text-6xl w-full px-0 md:px-5 text-left">
            Amenities
          </h3>
        </TitleReveal>
      </div>
      {/* Mobile textbox with title and description */}
      <div className="md:hidden text-center text-black font-serif mb-4 px-4">
        <h4 className="text-2xl text-left font-serif mb-1 italic">
          {AMENITIES[activeIndex].title}
        </h4>
        <p className="text-left font-sans">{AMENITIES[activeIndex].body}</p>
      </div>
      <div
        className="flex gap-4 md:gap-8 overflow-x-auto w-full min-w-0 p-4 md:p-10 no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {AMENITIES.map((src, index) => (
          <motion.div
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`
              overflow-hidden shrink-0 
              h-[300px] w-[220px] md:h-[400px] md:w-[300px]
              bg-[rgba(20,20,20,0.3)] rounded-[20px] 
              hover:text-black transition-all cursor-pointer relative
              ${activeIndex === index ? "md:w-[700px] w-[320px] z-20" : "z-10"}
            `}
            style={{
              boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
              willChange: "transform, width",
              scrollSnapAlign: "center",
            }}
            key={index}
            onClick={() => handleCardClick(index)}
            animate={{
              width:
                activeIndex === index
                  ? windowWidth !== null && windowWidth < 768
                    ? 320
                    : 700
                  : windowWidth !== null && windowWidth < 768
                  ? 220
                  : 300,
              scale: activeIndex === index ? 1.05 : 1,
              zIndex: activeIndex === index ? 2 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full h-full">
                <Image
                  src={`/facilities/${src.image}`}
                  alt={`${src.title}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 320px, 700px"
                  priority={index === activeIndex}
                />
              </div>
            </div>
            {/* Overlay only on desktop */}
            <AnimatePresence>
              {index === activeIndex && (
                <motion.div
                  className="hidden absolute top-0 right-0 w-[280px] shrink-0 backdrop-blur-md h-full md:flex flex-col justify-end p-6 gap-2"
                  style={{ background: "rgb(255 253 250 / 73%)" }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-serif text-4xl text-black">
                    {src.title}
                  </h4>
                  <p className="font-sans text-lg text-black">{src.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 pt-6 md:pt-8">
        {AMENITIES.map((src, index) => (
          <div
            key={index}
            className={`h-[10px] w-[10px] rounded-full hover:bg-[rgba(0,0,0,0.6)] transition-all cursor-pointer ${
              index === activeIndex
                ? "bg-[rgba(0,0,0,1)]"
                : "bg-[rgba(0,0,0,0.2)]"
            }`}
            onClick={() => handleCardClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardRows;
