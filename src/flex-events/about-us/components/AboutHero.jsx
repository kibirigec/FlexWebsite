"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-content-prominent mb-8"
          >
            Creating <span className="text-primary italic">Unforgettable</span> Moments
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-content-subtle leading-relaxed"
          >
            At <span className="text-content-prominent font-medium">FlexEvents</span>, we don't just plan events; we orchestrate experiences that leave a lasting imprint. Turning your boldest visions into extraordinary realities.
          </motion.p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-surface-subtle rounded-full blur-3xl" />
      </div>
    </section>
  );
}
