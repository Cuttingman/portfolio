"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface LightboxContextType {
  openLightbox: (src: string, alt: string) => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) throw new Error("useLightbox must be used within a LightboxProvider");
  return context;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  const openLightbox = (src: string, alt: string) => {
    setImgSrc(src);
    setImgAlt(alt);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
              aria-label="Close fullscreen image"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0 }}
              className="relative z-[205] w-full h-full p-4 md:p-12 flex items-center justify-center pointer-events-none"
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                className="max-w-full max-h-full object-contain shadow-2xl pointer-events-auto cursor-zoom-out"
                onClick={closeLightbox}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

// Wrapper component for individual images
export function LightboxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const { openLightbox } = useLightbox();

  return (
    <div 
      className={`relative group overflow-hidden cursor-zoom-in rounded-3xl bg-foreground/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] ${className}`}
      onClick={() => openLightbox(src, alt)}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <ZoomIn className="text-background drop-shadow-md" size={32} />
      </div>
    </div>
  );
}
