import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ServicesSlider = () => {
  const services = [
    { name: "Full Event Planning", desc: "Comprehensive management for flawless events.", imageUrl: "/images/event-planning-hero.jpg", link: "/services/7" },
    { name: "Invitation Cards", desc: "Custom designs to set the perfect tone.", imageUrl: "/7984652.jpg", link: "/services/2" },
    { name: "Pro-Audio & Visual", desc: "Immersive sound and lighting experiences.", imageUrl: "/night-lights.jpeg", link: "/services/3" },
    { name: "Home Audio", desc: "Premium audio for your personal space.", imageUrl: "/home1.jpg", link: "/services/4" },
    { name: "AV Installations", desc: "Permanent setups for venues and offices.", imageUrl: "/lineraynight.jpeg", link: "/services/5" },
    { name: "Flex Audio Brand", desc: "Custom-manufactured professional gear.", imageUrl: "/audio1.jpg", link: "/services/6" },
    { name: "Wedding Decor", desc: "Stunning visuals for your special day.", imageUrl: "/wedding-decor.jpeg", link: "/services/1" }
  ];

  return (
    <section className="py-24 bg-surface-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex items-end justify-between">
         <div>
            <h2 className="text-3xl md:text-4xl font-bold text-content-prominent mb-2">Explore All Services</h2>
            <p className="text-content-subtle">Everything you need for a spectacular event.</p>
         </div>
         <div className="hidden md:flex gap-2">
            {/* Navigation buttons could go here if using a real slider library, 
                but for now we'll use a horizontal scroll container */}
         </div>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-8 px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar">
        {services.map((service, index) => (
          <Link 
            to={service.link} 
            key={index}
            className="group relative min-w-[300px] md:min-w-[350px] aspect-[3/4] rounded-3xl overflow-hidden snap-center bg-gray-100"
          >
            <img
              src={service.imageUrl}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
               <p className="text-white/80 text-sm mb-4 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-opacity duration-300 transform">
                 {service.desc}
               </p>
               <div className="flex items-center text-primary font-medium text-sm mt-2 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 delay-100 transform">
                  <span>View Service</span>
                  <ArrowLongRightIcon className="w-4 h-4 ml-2" />
               </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider;
