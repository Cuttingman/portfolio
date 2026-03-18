"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isIframeHover, setIsIframeHover] = useState(false);

  // useMotionValue avoids React re-renders for smooth 60fps tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // useSpring adds the sophisticated "lag/inertia" feeling
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Keep track of held keys
  const keys = useRef<{ [key: string]: boolean }>({});
  const requestRef = useRef<number>(0);
  
  // Internal cursor state to maintain position when WASD is driving
  const posObj = useRef({ x: -100, y: -100 });
  const speed = 8; // Pixels per frame
  const initialized = useRef(false);

  // ...

  useEffect(() => {
    // Only render the custom cursor for devices using a mouse/touchpad
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }

    const handleIframeHoverEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsIframeHover(!!customEvent.detail);
    };
    window.addEventListener("toggle-iframe-hover", handleIframeHoverEvent);

    const moveCursor = (e: MouseEvent) => {
      posObj.current.x = e.clientX;
      posObj.current.y = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      initialized.current = true;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if the target or its parent is fundamentally interactive
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isClickable);
    };

    // Keyboard Event Handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!initialized.current) {
        // Init at center if no mouse movement prior to keypress
        posObj.current.x = window.innerWidth / 2;
        posObj.current.y = window.innerHeight / 2;
        cursorX.set(posObj.current.x);
        cursorY.set(posObj.current.y);
        initialized.current = true;
      }

      // Handle WASD
      keys.current[e.key.toLowerCase()] = true;

      // Handle Click (Enter / Space)
      if (e.key === "Enter" || e.key === " ") {
        if (e.key === " ") {
          e.preventDefault(); // Prevent page scroll on Space
        }
        
        // Visual feedback
        setIsClicking(true);
        setTimeout(() => setIsClicking(false), 150);

        // Programmatically click the element under the virtual cursor
        const elem = document.elementFromPoint(posObj.current.x, posObj.current.y);
        if (elem instanceof HTMLElement) {
          elem.click();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = false;
    };

    // Game loop for smooth WASD movement
    const update = () => {
      if (
        keys.current['w'] || keys.current['ㅈ'] ||
        keys.current['a'] || keys.current['ㅁ'] ||
        keys.current['s'] || keys.current['ㄴ'] ||
        keys.current['d'] || keys.current['ㅇ']
      ) {
        let newX = posObj.current.x;
        let newY = posObj.current.y;

        if (keys.current['w'] || keys.current['ㅈ']) newY -= speed;
        if (keys.current['s'] || keys.current['ㄴ']) newY += speed;
        if (keys.current['a'] || keys.current['ㅁ']) newX -= speed;
        if (keys.current['d'] || keys.current['ㅇ']) newX += speed;

        // Boundaries
        newX = Math.max(0, Math.min(newX, window.innerWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight));

        posObj.current.x = newX;
        posObj.current.y = newY;
        
        cursorX.set(newX);
        cursorY.set(newY);
      }
      requestRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    requestRef.current = requestAnimationFrame(update);

    // If mouse leaves the window entirely (e.g. going into cross-origin iframe), handle mouseout
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        // Mouse left the document or entered a cross origin iframe
        // Usually handled by the wrapper's onMouseEnter instead for better precision
      }
    };
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("toggle-iframe-hover", handleIframeHoverEvent);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isClicking ? 0.8 : (isHovering ? 2.5 : 1),
        backgroundColor: isClicking ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)",
        border: isHovering ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
        opacity: isIframeHover ? 0 : 1
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    />
  );
};
