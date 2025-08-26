import React, { useState, useEffect } from "react";
import { TitleReveal } from "./Animation/TitleReveal";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ContentReveal } from "./Animation/ContentReveal";

const HomeHighlight = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [currentSet, setCurrentSet] = useState<1 | 2>(1);

  const images = ["/sky/villa-1.jpg", "/sky/villa-2.jpg"];
  const images_2 = ["/sky/villa-3.jpg", "/sky/villa-4.jpg"];

  const handleSwap1 = () => setActiveIndex1((prev) => (prev === 0 ? 1 : 0));
  const handleSwap2 = () => setActiveIndex2((prev) => (prev === 0 ? 1 : 0));

  const fgVariants = {
    initial: { opacity: 0, scale: 0.97, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.97, y: -20, transition: { duration: 0.5 } },
  };

  const bgVariants = {
    initial: { opacity: 0, scale: 0.93, rotate: -8 },
    animate: {
      opacity: 1,
      scale: 0.95,
      rotate: -8,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.93,
      rotate: -8,
      transition: { duration: 0.5 },
    },
  };
  const bgVariants2 = {
    initial: { opacity: 0, scale: 0.93, rotate: 8 },
    animate: {
      opacity: 1,
      scale: 0.95,
      rotate: 8,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.93,
      rotate: 8,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSet === 1) {
        setActiveIndex1((prev) => (prev === 0 ? 1 : 0));
        setCurrentSet(2);
      } else {
        setActiveIndex2((prev) => (prev === 0 ? 1 : 0));
        setCurrentSet(1);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeIndex1, activeIndex2, currentSet]);

  return (
    <div className="flex justify-center items-center flex-col pt-20 pb-30">
      <div className="flex w-full px-4 font-semibold md:font-normal md:px-0 p-0 md:p-5 justify-start md:justify-center">
        <TitleReveal>
          <h3 className="font-serif pb-5 text-3xl md:text-6xl w-full px-0 md:px-5 text-left">
            Sky Villa
          </h3>
        </TitleReveal>
      </div>
      {/* images right */}
      <div className="flex flex-col mb-20 md:mb-0">
        <div className="flex flex-col md:flex-row w-full items-center gap-10 px-4 md:px-24">
          {/* Text first on mobile */}
          <div className="w-full md:basis-1/2 flex flex-col items-start md:items-end order-1 md:order-1 mb-6 md:mb-0">
            <TitleReveal>
              <h5 className="text-xl md:text-3xl font-serif italic text-left md:text-right">
                Indoor
              </h5>
              <h3 className="text-xl md:text-3xl font-serif font-semibold mb-3 text-left md:text-right">
                Something Good About This
              </h3>
            </TitleReveal>
            <ContentReveal>
              <p className="text-md md:text-xl text-left md:text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec
                ante eu dapibus. Sed egestas neque vel vehicula ullamcorper.
                Phasellus quis accumsan turpis, et aliquet lectus feugiat a.
              </p>
            </ContentReveal>
          </div>
          {/* Image second on mobile */}
          <div className="w-full md:basis-1/2 flex justify-center items-center order-2 md:order-2">
            <div
              className="relative w-full max-w-[500px] aspect-[400/280] cursor-pointer"
              onClick={handleSwap1}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`bg-${activeIndex1 === 0 ? 1 : 0}`}
                  className="absolute inset-0 z-0 rounded-[20px] overflow-hidden"
                  variants={bgVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ boxShadow: "rgb(0 0 0 / 82%) 0px 0px 20px 6px" }}
                >
                  <Image
                    src={images[activeIndex1 === 0 ? 1 : 0]}
                    alt="Highlight 2"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[20px]  backdrop-blur-md"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority={false}
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`fg-${activeIndex1}`}
                  className="absolute inset-0 z-10 rounded-[20px] overflow-hidden"
                  variants={fgVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.05 }}
                  style={{ boxShadow: "rgb(0 0 0 / 82%) 0px 0px 20px 6px" }}
                  exit="exit"
                >
                  <Image
                    src={images[activeIndex1]}
                    alt="Highlight 1"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[20px] backdrop-blur-md"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* images left and image_2 */}
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full items-center gap-10 px-4 md:px-24">
          {/* Text first on mobile */}
          <div className="w-full md:basis-1/2 flex flex-col items-start order-1 md:order-2 mb-6 md:mb-0">
            <TitleReveal>
              <h5 className="text-xl md:text-3xl font-serif italic">Outdoor</h5>
              <h3 className="text-xl md:text-3xl font-serif font-semibold mb-3">
                Something Good About This
              </h3>
            </TitleReveal>
            <ContentReveal>
              <p className="text-md md:text-xl text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec
                ante eu dapibus. Sed egestas neque vel vehicula ullamcorper.
                Phasellus quis accumsan turpis, et aliquet lectus feugiat a.
              </p>
            </ContentReveal>
          </div>
          {/* Image second on mobile */}
          <div className="w-full md:basis-1/2 flex justify-center items-center order-2 md:order-1">
            <div
              className="relative w-full max-w-[500px] aspect-[500/280] cursor-pointer"
              onClick={handleSwap2}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`bg2-${activeIndex2 === 0 ? 1 : 0}`}
                  className="absolute inset-0 z-0 rounded-[20px] overflow-hidden"
                  variants={bgVariants2}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ boxShadow: "rgb(0 0 0 / 82%) 0px 0px 20px 6px" }}
                >
                  <Image
                    src={images_2[activeIndex2 === 0 ? 1 : 0]}
                    alt="Highlight 2"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[20px]  backdrop-blur-md"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority={false}
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`fg2-${activeIndex2}`}
                  className="absolute inset-0 z-10 rounded-[20px] overflow-hidden"
                  variants={fgVariants}
                  initial="initial"
                  whileHover={{ scale: 1.05 }}
                  animate="animate"
                  style={{ boxShadow: "rgb(0 0 0 / 82%) 0px 0px 20px 6px" }}
                  exit="exit"
                >
                  <Image
                    src={images_2[activeIndex2]}
                    alt="Highlight 1"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[20px] backdrop-blur-md"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHighlight;
