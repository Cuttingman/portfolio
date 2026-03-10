"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BannerCrossfadeProps {
    images: string[];
    interval?: number; // duration between slides in ms
    className?: string; // extra classes
}

export function BannerCrossfade({
    images,
    interval = 4500, // 4-5 seconds random or fixed, 4.5s chosen
    className = ""
}: BannerCrossfadeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Randomize initial image on client-side mount to keep UI fresh
    useEffect(() => {
        if (images.length > 0) {
            setCurrentIndex(Math.floor(Math.random() * images.length));
        }
    }, [images]);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className={`relative w-full overflow-hidden aspect-video xs:aspect-[16/9] ${className}`}>
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Banner crossfade image ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                />
            </AnimatePresence>
        </div>
    );
}
