"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

export function Modal({ isOpen, onClose, children, theme = "dark", className = "max-w-5xl" }: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

    const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

    const handleClose = () => {
      setButtonOffset({ x: 0, y: 0 });
      onClose();
    };

    // Handle escape key
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const handleHover = () => {
      // Disable runaway effect on mobile or touch devices (no hover support or small screen)
      if (
        typeof window !== "undefined" && 
        (window.innerWidth < 768 || window.matchMedia("(hover: none)").matches)
      ) {
        return;
      }

      // Move button by a random distance between 20px and 60px away in any direction
      const randomX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 40 + 20);
      const randomY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 40 + 20);
      setButtonOffset((prev) => ({ 
        x: prev.x + randomX, 
        y: prev.y + randomY 
      }));
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className={`absolute inset-0 backdrop-blur-sm ${
                theme === "dark" ? "bg-black/80" : "bg-white/80"
              }`}
            />
  
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0 }}
              className={`relative w-full ${className} max-h-[90vh] mx-4 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col rounded-3xl ${
                theme === "dark"
                  ? "bg-[#0a0a0a] border border-white/10 text-white"
                  : "bg-white/80 border border-black/10 text-black"
              }`}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                onMouseEnter={handleHover}
                animate={{ 
                  scale: [1, 1.15, 1],
                  x: buttonOffset.x,
                  y: buttonOffset.y
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  // Override transition for x/y to be slower and smoother
                  x: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 },
                  y: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 }
                }}
                className="absolute top-6 right-6 z-10 p-2 backdrop-blur-md rounded-full transition-colors bg-[#F23E19] shadow-lg hover:bg-[#d13515]"
                aria-label="Close modal"
              >
                <X size={24} strokeWidth={3} className="text-white" />
              </motion.button>

            {/* Scrollable Area */}
            <div className="overflow-y-auto p-6 md:p-12 overscroll-contain">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
