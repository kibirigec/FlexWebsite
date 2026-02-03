"use client";

import React from "react";
import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Charles Lwanga",
    role: "Founder & CEO",
    bio: "With over 25 years in event planning, Charles leads our team in ensuring every event is executed flawlessly.",
    image: "https://i.ibb.co/T1J9LD4/image-03-2.jpg", 
  },
  {
    name: "John Mukasa",
    role: "Creative Designer",
    bio: "John’s creative vision transforms every event into a breathtaking experience.",
    image: "https://i.ibb.co/8P6cvVy/image-01-1.jpg",
  },
  {
    name: "Mark Johnson",
    role: "Project Manager",
    bio: "Orchestrating complex logistics with precision and calm.",
    image: "https://i.ibb.co/30tGtjP/image-04.jpg",
  },
  {
    name: "Sophia Kim",
    role: "Marketing Specialist",
    bio: "Connecting our brand with the world through compelling storytelling.",
    image: "https://i.ibb.co/yVVT0Dp/image-02-2.jpg",
  }
];

export function AboutTeam() {
  return (
    <section className="py-24 bg-surface-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-content-prominent mb-4">Our Team</h2>
           <p className="text-lg text-content-subtle max-w-2xl mx-auto">
              Skilled professionals passionate about delivering high-quality events.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                 <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md bg-surface-subtle">
                    <div className="aspect-[3/4] overflow-hidden">
                       <img 
                         src={member.image} 
                         alt={member.name} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
                 
                 <h3 className="text-xl font-bold text-content-prominent">{member.name}</h3>
                 <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">{member.role}</p>
                 <p className="text-content-subtle text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
