import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const HomeVideoComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoPlayerDiv = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollYPercent, setScrollYPercent] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  useEffect(() => {
    const videoDiv = videoPlayerDiv.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.muted = isMuted;
              videoRef.current.play();
            }
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
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
  }, [isMuted]);

  // Sync mute state with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div
      ref={containerRef}
      className="content-section flex justify-center items-start md:items-center !px-0 md:!px-[25px] !pt-20 md:!pt-20 !pb-10 md:!pb-20  flex-col relative z-10 rounded-lg"
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
              <video
                ref={videoRef}
                style={{ borderRadius: dynamicBorderRadius() + "px" }}
                className="!rounded-3xl w-full h-auto"
                width="560"
                height="315"
                src="/videos/project_video.mp4"
                muted={isMuted}
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              {/* Play/Pause Button (left) */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.paused) {
                      videoRef.current.play();
                      setIsPlaying(true);
                    } else {
                      videoRef.current.pause();
                      setIsPlaying(false);
                    }
                  }
                }}
                className="absolute bottom-7 left-7 bg-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.9)] text-black px-3 py-3 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] transition duration-300 ease-in-out"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              {/* Mute/Unmute Button (right) */}
              <button
                onClick={() => setIsMuted((m) => !m)}
                className="absolute bottom-7 right-7 bg-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.9)] text-black px-3 py-3 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] transition duration-300 ease-in-out"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoComponent;
