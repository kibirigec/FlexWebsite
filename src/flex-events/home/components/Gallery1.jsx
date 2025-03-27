"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom"

export function Gallery1() {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"], // Adjust zoom effect timing
  });

  // Scale effect: Prevents excessive zooming beyond screen width
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.195]);

  return (
    <section id="relume" className="mx-auto px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Title Section */}
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Event Showcase
          </h2>
          <p className="md:text-md text-[#86868B] font-semibold">
            Explore our stunning events that speak for themselves.
          </p>
        </div>

        {/* Video Section with Controlled Zoom & Margin */}
        <div className="mx-auto max-w-[85vw] md:max-w-[80vw] lg:max-w-[75vw] mb-24">
          <a href="#" className="block">
            <motion.div
              ref={videoRef}
              className="w-full overflow-hidden rounded-lg" // Added rounded corners for better aesthetics
              style={{ scale }}
            >
              <video
                className="w-full h-[100vh] object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/WhatsApp Video 2025-02-23 at 18.47.47.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </a>
        </div>

        {/* Button Section */}
        <div className="text-center">
          <Link to="/portfolio">
            <button className="px-4 py-2 text-black border-black border-1 ">
               Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
