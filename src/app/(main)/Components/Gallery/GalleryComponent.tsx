"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiNavigation,
  FiX,
} from "react-icons/fi";

const galleryDetails = [
  {
    image: "gallery/arrival_sky_villa_1.jpg",
    title: "Arrival Sky Villa",
  },
  {
    image: "gallery/arrival_sky_villa_2.jpg",
    title: "Arrival Sky Villa",
  },
  {
    image: "gallery/arrival_sky_villa_3.jpg",
    title: "Arrival Sky Villa",
  },
  {
    image: "gallery/arrival_sky_villa_4.jpg",
    title: "Arrival Sky Villa",
  },
  {
    image: "gallery/balcony.jpg",
    title: "SAAS hills balcony",
  },
  {
    image: "gallery/beach_1.jpg",
    title: "SAAS hills beach",
  },
  {
    image: "gallery/beach_2.jpg",
    title: "SAAS hills beach",
  },
  {
    image: "gallery/bedroom.jpg",
    title: "SAAS hills bedroom",
  },
  {
    image: "gallery/building_1.jpg",
    title: "SAAS hills",
  },
  {
    image: "gallery/building_2.jpg",
    title: "SAAS hills",
  },
  {
    image: "gallery/cinema.jpg",
    title: "SAAS hills cinema",
  },
  {
    image: "gallery/entrance.jpg",
    title: "SAAS hills entrance",
  },
  {
    image: "gallery/hover.jpg",
    title: "SAAS hills",
  },
  {
    image: "gallery/kids_1.jpg",
    title: "Kids Play Haven",
  },
  {
    image: "gallery/kids_2.jpg",
    title: "Kids Play Haven",
  },
  {
    image: "gallery/living.jpg",
    title: "SAAS hills living room",
  },
  {
    image: "gallery/lobby_1.jpg",
    title: "SAAS hills lobby",
  },
  {
    image: "gallery/lobby_2.jpg",
    title: "SAAS hills lobby",
  },
  {
    image: "gallery/lobby_3.jpg",
    title: "SAAS hills lobby",
  },
  {
    image: "gallery/lounge.jpg",
    title: "SAAS hills gaming lounge",
  },
  {
    image: "gallery/podium_1.jpg",
    title: "SAAS hills podium",
  },
  {
    image: "gallery/podium_2.jpg",
    title: "SAAS hills podium",
  },
  {
    image: "gallery/podium_3.jpg",
    title: "SAAS hills podium",
  },
  {
    image: "gallery/podium_4.jpg",
    title: "SAAS hills podium",
  },
  {
    image: "gallery/sky_villa_1.jpg",
    title: "Sky Villa",
  },
  {
    image: "gallery/sky_villa_2.jpg",
    title: "Sky Villa",
  },
  {
    image: "gallery/sky_villa_3.jpg",
    title: "Sky Villa",
  },
  {
    image: "gallery/sky_villa_4.jpg",
    title: "Sky Villa",
  },
  {
    image: "gallery/spa.jpg",
    title: "SAAS hills spa",
  },
  {
    image: "gallery/wall.jpg",
    title: "SAAS hills Wall Climbing",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openModal = (idx: number) => {
    setCurrent(idx);
    setOpen(true);
  };

  // Wrap closeModal in useCallback to fix the warning
  const closeModal = useCallback(() => setOpen(false), []);

  const prevImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.stopPropagation?.();
    setCurrent((prev) => (prev === 0 ? galleryDetails.length - 1 : prev - 1));
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.stopPropagation?.();
    setCurrent((prev) => (prev === galleryDetails.length - 1 ? 0 : prev + 1));
  }, []);

  // Listen for left/right key when modal is open
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage(e);
      } else if (e.key === "ArrowRight") {
        nextImage(e);
      } else if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, prevImage, nextImage, closeModal]);

  return (
    <div className="flex flex-col items-center p-2 min-h-[100dvh] w-full relative pt-[100px] md:pt-[100px] bg-neutral-900 pb-20">
      <h2 className="text-2xl md:text-5xl text-white font-serif font-semibold mb-8 z-5 text-center">
        Gallery
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {galleryDetails.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative cursor-pointer group"
            variants={itemVariants}
            onClick={() => openModal(idx)}
          >
            <div className="rounded-xl w-full h-48 md:h-64 overflow-hidden relative group-hover:opacity-80 transition">
              <Image
                src={`/${item.image}`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={idx < 6}
              />
            </div>
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
          onClick={closeModal}
        >
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 text-black bg-neutral-100 rounded-full">
            <FiNavigation size={16} />
            {galleryDetails[current].title}
          </div>
          <button
            className="absolute top-4 right-4 text-white text-4xl px-2 py-2 rounded-full hover:bg-white/10 cursor-pointer transition-all"
            onClick={closeModal}
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
          <button
            // Make sure left-4 is not hidden behind the screen edge on mobile
            className="absolute left-2 md:left-10 text-white text-4xl px-2 py-2 rounded-full hover:bg-white/10 cursor-pointer transition-all z-10"
            onClick={prevImage}
            aria-label="Previous"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <FiChevronLeft size={24} />
          </button>
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "90vw",
              maxWidth: 1200,
              height: "80vh",
              maxHeight: 700,
            }}
          >
            <Image
              src={`/${galleryDetails[current].image}`}
              alt={galleryDetails[current].title}
              width={1200}
              height={700}
              sizes="90vw"
              className="object-contain rounded-xl shadow-lg"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute right-2 md:right-10 text-white text-4xl px-2 py-2 rounded-full hover:bg-white/10 cursor-pointer transition-all z-10"
            onClick={nextImage}
            aria-label="Next"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
