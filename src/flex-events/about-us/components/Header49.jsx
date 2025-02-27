"use client";

import React from "react";
import { motion } from "framer-motion";

export function Header49() {
  return (
    <section id="relume" className="relative px-[5%] py-36 md:py-28 lg:py-40 ">
      <div className="container">
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl "
          >
            <h1 className="text-5xl font-extrabold  md:text-6xl lg:text-7xl text-gray-900">
              Creating <span className="text-[#9BAB3C]">Unforgettable Moments</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 md:text-xl">
              At <span className="font-semibold text-[#9BAB3C]">FlexEvents</span>, we turn visions into extraordinary experiences. 
            </p>
          </motion.div>

          {/* Right Content - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-lg"
          >
            {/* <p className="text-lg text-gray-600 md:text-xl">
              Our expertise ensures seamless event management that leaves a lasting impact.
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
