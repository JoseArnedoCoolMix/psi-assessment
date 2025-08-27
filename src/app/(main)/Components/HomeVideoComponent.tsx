import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const YOUTUBE_EMBED_URL =
  "https://www.youtube.com/embed/8LM-hPSBu0M?enablejsapi=1&rel=0&modestbranding=1&playsinline=1";

const HomeVideoComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoPlayerDiv = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scrollYPercent, setScrollYPercent] = useState(100);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrolledPercent = latest * 100;
    if (scrolledPercent <= 55) {
      setScrollYPercent(70);
    } else {
      const mappedScrollYPercent = 70 + ((scrolledPercent - 55) / 45) * 30;
      setScrollYPercent(mappedScrollYPercent);
    }
  });

  const dynamicBorderRadius = useCallback(() => {
    if (scrollYPercent >= 70 && scrollYPercent <= 100) {
      return 25 - (scrollYPercent - 70) * (25 / 30);
    }
    return scrollYPercent > 100 ? 0 : 25;
  }, [scrollYPercent]);

  // YouTube Player API controls
  const postMessageToIframe = (command: string, value?: unknown) => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: value !== undefined ? [value] : [],
      }),
      "*"
    );
  };

  // Auto play/pause on intersection
  useEffect(() => {
    const videoDiv = videoPlayerDiv.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            postMessageToIframe("playVideo");
          } else {
            postMessageToIframe("pauseVideo");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoDiv) {
      observer.observe(videoDiv);
    }

    return () => {
      if (videoDiv) {
        observer.unobserve(videoDiv);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="content-section flex justify-center items-start md:items-center !px-0 md:!px-[25px] !pt-20 md:!pt-20 !pb-10 md:!pb-20 flex-col relative z-10 rounded-lg"
    >
      <div className="w-full flex justify-start lg:justify-center items-center mb-3">
        <h3 className="font-serif pb-5 text-3xl md:text-6xl w-full px-0 md:px-5 text-center text-white">
          Endulge in the Finest Experience
        </h3>
      </div>
      <div className="scroll-container-max-size mt-3 px-3 lg:px-0">
        <div ref={videoPlayerDiv} className="w-[100%] relative">
          <div className="basis-full w-full flex justify-center items-center rel">
            <div
              className="w-full flex justify-center text-black aspect-[16/9] sm:w-[75%] relative"
              style={{
                width: scrollYPercent + "%",
                minWidth: "70%",
              }}
            >
              <iframe
                ref={iframeRef}
                width="560"
                height="315"
                src={YOUTUBE_EMBED_URL}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  borderRadius: dynamicBorderRadius() + "px",
                  width: "100%",
                  height: "100%",
                  background: "black",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoComponent;
