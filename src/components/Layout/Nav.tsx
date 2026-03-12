"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#work", id: "work" },
  { name: "EXPERTISE", href: "#expertise", id: "expertise" },
  { name: "ARCHIVE", href: "#archive", id: "archive" },
  { name: "ABOUT", href: "#about", id: "about" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("work");
  const [navTheme, setNavTheme] = useState<"light" | "dark">("dark"); // 'dark' theme means Nav text should be white (on black bg)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "expertise", "archive", "about"];
      let current = "work";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
      
      // Determine theme based on active section
      if (current === "expertise" || current === "archive") {
        setNavTheme("light"); // Light background -> dark text
      } else {
        setNavTheme("dark"); // Dark background -> light text
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-[100] w-full transition-colors duration-1000 backdrop-blur-md ${
      navTheme === "light" ? "bg-white/80 text-black" : "bg-black/80 text-white"
    }`}>
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg md:text-xl tracking-tight z-[100] leading-none">
          CREATIVE DIRECTOR<br />
          & IP ARCHITECT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  const targetId = link.href.replace('#', '');
                  const elem = document.getElementById(targetId);
                  if (elem) {
                    e.preventDefault();
                    elem.scrollIntoView({ behavior: 'smooth' });
                    // Optionally update URL to keep consistency without reloading
                    window.history.pushState(null, '', link.href);
                  }
                }}
                className={`relative text-sm font-black tracking-tighter transition-colors duration-500 ${
                  isActive 
                    ? (navTheme === "light" ? "text-black" : "text-white")
                    : (navTheme === "light" ? "text-black/40 hover:text-black/80" : "text-white/40 hover:text-white/80")
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute left-0 top-full block h-[2px] w-full ${navTheme === "light" ? "bg-black" : "bg-white"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-[100]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className={navTheme === "light" ? "text-black" : "text-white"} /> : <Menu size={24} className={navTheme === "light" ? "text-black" : "text-white"} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-0 left-0 w-full h-screen z-[90] flex flex-col items-center justify-center gap-8 ${
              navTheme === "light" ? "bg-white/95 text-black" : "bg-black/95 text-white"
            } backdrop-blur-xl pointer-events-auto`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  const targetId = link.href.replace('#', '');
                  const elem = document.getElementById(targetId);
                  if (elem) {
                    e.preventDefault();
                    // Small delay to let the menu close animation start before scrolling, 
                    // though smooth scrolling usually looks fine concurrently.
                    setTimeout(() => {
                      elem.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', link.href);
                    }, 50);
                  }
                }}
                className={`text-3xl font-bold tracking-tight transition-colors ${
                  activeSection === link.id 
                    ? (navTheme === "light" ? "text-black" : "text-white")
                    : (navTheme === "light" ? "text-black/50" : "text-white/50")
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}
