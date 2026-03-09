"use client";

import { LightboxImage } from "./Lightbox";

interface ImageProps {
  src: string;
  alt: string;
  span?: "1" | "2" | "full";
}

export function LookbookGrid({ images }: { images: ImageProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
      {images.map((img, idx) => {
        let spanClass = "";
        if (img.span === "full") spanClass = "md:col-span-2 aspect-video";
        else if (img.span === "2") spanClass = "aspect-video md:aspect-square"; // Depending on rhythm
        else spanClass = "aspect-square";

        return (
          <LightboxImage 
            key={idx} 
            src={img.src} 
            alt={img.alt} 
            className={spanClass} 
          />
        );
      })}
    </div>
  );
}
