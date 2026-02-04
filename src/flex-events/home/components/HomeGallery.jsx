"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../../globalComps/Button";

export function HomeGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-24 bg-surface-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
         >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-content-prominent">
                Event Showcase
            </h2>
            <p className="text-lg text-content-subtle max-w-2xl mx-auto">
                Explore our stunning events that speak for themselves.
            </p>
         </motion.div>
      </div>

      <div ref={containerRef} className="w-full max-w-[90vw] mx-auto mb-16 relative">
         <motion.div 
            style={{ scale, y }}
            className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative"
         >
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/experential.jpg" // Fallback image
            >
                <source src="/WhatsApp Video 2025-02-23 at 18.47.47.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
         </motion.div>
      </div>

      <div className="text-center">
         <Button to="/portfolio" size="lg" className="!shadow-none !bg-white !border !border-primary !text-black !rounded-sm !hover:bg-primary/5 !hover:text-primary">View Full Portfolio</Button>
      </div>
    </section>
  );
}
