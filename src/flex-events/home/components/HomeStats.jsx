"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Events Managed", desc: "Trusted by diverse industries" },
  { value: "98%", label: "Client Satisfaction", desc: "We prioritize your vision" },
  { value: "20+", label: "Years Experience", desc: "Unparalled expertise" },
];

export function HomeStats() {
  return (
    <section className="py-20 bg-[#86868b]/5 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-black/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center px-4 pt-8 md:pt-0"
            >
              <div className="text-5xl lg:text-6xl font-bold text-primary mb-2 font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-content-prominent mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-content-subtle">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
