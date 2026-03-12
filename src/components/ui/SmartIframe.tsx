"use client";

import { useEffect, useRef, IframeHTMLAttributes } from "react";

export function SmartIframe({ src, ...props }: IframeHTMLAttributes<HTMLIFrameElement>) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && iframeRef.current) {
            // PostMessage to pause videos when they are completely out of view
            const iframe = iframeRef.current;
            const contentWindow = iframe.contentWindow;
            if (!contentWindow) return;

            if (src?.includes("youtube.com") || src?.includes("youtu.be")) {
              contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            } else if (src?.includes("vimeo.com")) {
              contentWindow.postMessage('{"method":"pause"}', "*");
            } else if (src?.includes("soundcloud.com")) {
              contentWindow.postMessage('{"method":"pause"}', "*");
            }
          }
        });
      },
      {
        threshold: 0, 
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  // For YouTube API to accept postMessage commands, enablejsapi=1 is required in the src URL if not already present.
  let finalSrc = src;
  if (finalSrc && (finalSrc.includes("youtube.com") || finalSrc.includes("youtu.be"))) {
    if (!finalSrc.includes("enablejsapi=1")) {
      finalSrc += finalSrc.includes("?") ? "&enablejsapi=1" : "?enablejsapi=1";
    }
  }

  return <iframe ref={iframeRef} src={finalSrc} {...props} />;
}
