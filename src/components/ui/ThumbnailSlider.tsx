"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThumbnailSliderProps {
  images: string[];
  interval?: number; // duration between slides in ms
  className?: string;
  imgClassName?: string;
  randomize?: boolean; // whether to pick the next image randomly
}

export function ThumbnailSlider({
  images,
  interval = 3500,
  className = "",
  imgClassName = "w-full h-full object-cover",
  randomize = false
}: ThumbnailSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If there's only 1 image, no need to run an interval
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (randomize) {
          let nextIndex = prevIndex;
          while (nextIndex === prevIndex) {
            nextIndex = Math.floor(Math.random() * images.length);
          }
          return nextIndex;
        }
        return (prevIndex + 1) % images.length;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Thumbnail slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 ${imgClassName}`}
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
      </AnimatePresence>
    </div>
  );
}
