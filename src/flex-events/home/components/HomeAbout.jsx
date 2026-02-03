"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../../../globalComps/Button";

export function HomeAbout() {
  return (
    <section className="py-24 lg:py-32 bg-surface-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance text-content-prominent leading-tight">
              Your Vision, Our Creation
            </h2>
            <p className="text-lg text-content-subtle leading-relaxed mb-6">
              At Flex Events Management, we assume the responsibility of ensuring your event is a masterpiece. 
              From corporate conferences to stunning weddings, we specialize in transforming ideas into unforgettable realities.
            </p>
            <p className="text-lg text-content-subtle leading-relaxed mb-8">
              With over 20 years of experience, we bring specific expertise to every occasion, ensuring that your event is uniquely 
              tailored to your vision and needs.
            </p>
            <Button to="/about" className="!shadow-none !bg-transparent !border !border-[#9bac3c] !text-black">Discover More</Button>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-surface-subtle shadow-xl">
               <img 
                 src="/weddingmainside.jpeg" 
                 alt="Flex Events Experiences" 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-surface-subtle -z-10 rounded-full blur-2xl opacity-60" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 -z-10 rounded-full blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
