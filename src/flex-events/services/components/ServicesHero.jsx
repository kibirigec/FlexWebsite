"use client";

import React from "react";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-content-prominent mb-6"
        >
          Our <span className="text-primary">Services</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-content-subtle max-w-2xl mx-auto leading-relaxed"
        >
          Comprehensive event solutions tailored to your unique vision. From concept to execution, we cover every detail.
        </motion.p>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-0 pointer-events-none" />
    </section>
  );
}
