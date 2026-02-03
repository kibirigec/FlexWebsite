"use client";

import React from "react";
import { motion } from "framer-motion";

export function FAQHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-surface-white overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-content-prominent mb-6"
        >
          Frequently Asked <span className="text-primary italic">Questions</span>
        </motion.h1>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-xl text-content-subtle leading-relaxed"
        >
          Everything you need to know about our services, process, and commitment to excellence.
        </motion.p>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none" />
    </section>
  );
}
