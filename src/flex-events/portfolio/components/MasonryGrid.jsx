"use client";

import React from "react";
import { motion } from "framer-motion";

export function MasonryGrid({ images }) {
  // Split images into 4 columns for large screens, 2 for medium
  const columns = [[], [], [], []];
  
  images.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="grid gap-4 content-start">
          {col.map((src, imgIndex) => (
             <motion.div
                key={imgIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
             >
                <img 
                  className="h-auto max-w-full rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full object-cover" 
                  src={src} 
                  alt={`Portfolio Item ${colIndex}-${imgIndex}`}
                  style={{ minHeight: '150px' }} 
                />
             </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
