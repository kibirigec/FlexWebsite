"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../globalComps/Button";

const HERO_CONTENT = [
  { img: "/weddingmain.jpeg", text: "Weddings", link: "/services/1" },
  { img: "/night-lights.jpeg", text: "Visuals", link: "/services/3" },
  { img: "/wedding-decor.jpeg", text: "Decor", link: "/services/1" },
  { img: "/jameson-pov.jpeg", text: "Sounds", link: "/services/3" },
  { img: "/stages3.jpg", text: "Stage Setups", link: "/rentals/4" },
  { img: "/experential.jpg", text: "Experientials", link: "/services/7" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = HERO_CONTENT[currentIndex];

  const changeSlide = (index) => {
    setCurrentIndex(index);
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Images with AnimatePresence for smooth crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute inset-0 z-0"
        >
          <img
            src={currentItem.img}
            alt={currentItem.text}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-balance text-white leading-[0.9]">
              Creating Memorable <br />
              <span className="text-primary inline-block min-w-[3ch]">
                 <AnimatePresence mode="wait">
                    <motion.span
                        key={currentItem.text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="block"
                    >
                        {currentItem.text}
                    </motion.span>
                 </AnimatePresence>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
               Designing unforgettable experiences grounded in precision, clarity, and elegance for your most special occasions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="white" size="lg">Let's Talk</Button>
                <Button to={currentItem.link} variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:border-white hover:text-white">Learn More</Button>
            </div>
        </motion.div>
      </div>

       {/* Pagination / Indicators */}
       <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {HERO_CONTENT.map((_, idx) => (
             <button
               key={idx}
               onClick={() => changeSlide(idx)}
               className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-primary' : 'w-6 bg-white/30 hover:bg-white/50'}`}
               aria-label={`Go to slide ${idx + 1}`}
             />
          ))}
       </div>
    </section>
  );
}
