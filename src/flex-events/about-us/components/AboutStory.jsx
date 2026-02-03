"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="py-24 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-content-prominent mb-6">
                Our Story: <br/> 20 Years of Mastery
              </h2>
              <div className="h-1 w-20 bg-primary mb-8" />
              
              <div className="space-y-6 text-lg text-content-subtle leading-relaxed">
                 <p>
                    FlexEvents Management has evolved from a passionate local provider into a leading force across East Africa. 
                    Our journey is defined by a relentless pursuit of perfection.
                 </p>
                 <p>
                    We offer a diverse range of event services, scaling from intimate gatherings to large-scale corporate functions. 
                    Our mission is simple yet ambitious: to provide seamless event experiences through creative designs, 
                    advanced technical support, and world-class service.
                 </p>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
           >
              <div className="grid grid-cols-2 gap-4">
                 <img src="/stages3.jpg" alt="Stage Setup" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" />
                 <img src="/wedding-decor.jpeg" alt="Wedding Decor" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
