"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const SERVICES = [
  { id: 1, title: "Wedding & Corporate Decor", desc: "Transform your vision into stunning reality with custom decor.", img: "/wedding-decor.jpeg" },
  { id: 2, title: "Invitation Cards", desc: "Set the tone with personalized, high-quality invitations.", img: "/7984652.jpg" },
  { id: 3, title: "Pro-Audio & Visual", desc: "Cutting-edge sound and lighting for immersive experiences.", img: "/night-lights.jpeg" },
  { id: 4, title: "Flex Home Audio", desc: "Premium audio solutions for your home entertainment.", img: "/home1.jpg" },
  { id: 5, title: "AV Installations", desc: "Professional sound and visual setups for any venue.", img: "/lineraynight.jpeg" },
  { id: 6, title: "Flex Audio Brand", desc: "Custom-manufactured loudspeakers for superior sound.", img: "/audio1.jpg" },
  { id: 7, title: "Full Event Planning", desc: "End-to-end management ensuring flawless execution.", img: "/images/event-planning-hero.jpg" },
  { id: 8, title: "Backline Equipment", desc: "Top-tier instruments and gear for live performances.", img: "/images/backline-hero.jpg" },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                   <img 
                     src={service.img} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-content-prominent mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-content-subtle leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold tracking-wide uppercase text-sm group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowLongRightIcon className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
