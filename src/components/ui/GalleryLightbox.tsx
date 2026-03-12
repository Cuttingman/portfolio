"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryImageDef {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: GalleryImageDef[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function GalleryLightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onChangeIndex,
}: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    onChangeIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onChangeIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[210] p-3 border border-white/20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:shadow-white/10"
          aria-label="Close fullscreen image"
        >
          <X size={24} />
        </button>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-6 z-[210] p-4 border border-white/20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:shadow-white/10 group hidden md:block"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-6 z-[210] p-4 border border-white/20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:shadow-white/10 group hidden md:block"
          aria-label="Next image"
        >
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Mobile Navigation controls overlaid at bottom */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6 z-[210] md:hidden">
          <button
            onClick={handlePrev}
            className="p-3 border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          className="relative z-[205] w-full h-full p-4 md:p-24 flex items-center justify-center pointer-events-none"
        >
          <div className="relative max-w-full max-h-[90vh] flex flex-col items-center pointer-events-auto">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm cursor-zoom-out"
              onClick={onClose}
            />
            {currentImage.alt && (
              <div className="mt-4 text-white/70 font-medium tracking-widest text-sm uppercase">
                {currentImage.alt}
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Pagination Indicator */}
        <div className="absolute top-6 left-6 z-[210] text-white/50 tracking-widest font-mono text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </AnimatePresence>
  );
}

interface GalleryImageTriggerProps {
  src: string;
  alt: string;
  index: number;
  className?: string;
  imgClassName?: string;
  onClick: (index: number) => void;
}

export function GalleryImageTrigger({ src, alt, index, className = "", imgClassName = "", onClick }: GalleryImageTriggerProps) {
  return (
    <div 
      className={`relative group overflow-hidden cursor-zoom-in ${className}`}
      onClick={() => onClick(index)}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`transition-transform duration-700 group-hover:scale-105 ${imgClassName}`} 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <ZoomIn className="text-white drop-shadow-md" size={32} />
      </div>
    </div>
  );
}
