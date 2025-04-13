import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer3 } from "../../globalComps/Footer3";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Wedding Decor",
      category: "weddings",
      image: "/weddingmain.jpeg",
      description: "Elegant wedding setup with custom decor",
    },
    {
      id: 2,
      title: "Corporate Event",
      category: "corporate",
      image: "/corporate.jpeg",
      description: "Professional corporate event setup",
    },
    {
      id: 3,
      title: "Concert Setup",
      category: "concerts",
      image: "/concertt.jpeg",
      description: "Dynamic concert stage design",
    },
    {
      id: 4,
      title: "Festival Decor",
      category: "festivals",
      image: "/festival3.jpeg",
      description: "Vibrant festival atmosphere",
    },
    {
      id: 5,
      title: "Sound System",
      category: "equipment",
      image: "/audio1.jpg",
      description: "Professional sound equipment setup",
    },
    {
      id: 6,
      title: "Stage Design",
      category: "stages",
      image: "/stages3.jpg",
      description: "Custom stage design and setup",
    },
    {
      id: 7,
      title: "Lighting Setup",
      category: "lighting",
      image: "/night-lights.jpeg",
      description: "Dynamic lighting arrangement",
    },
    {
      id: 8,
      title: "Carnival Decor",
      category: "festivals",
      image: "/carnival-decor.jpeg",
      description: "Colorful carnival decorations",
    },
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Discover our finest work and get inspired for your next event
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {["all", "weddings", "corporate", "concerts", "festivals", "equipment", "stages", "lighting"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#9BAB3C] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Create Your Perfect Event?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Let's bring your vision to life with our expert event planning and management services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <button className="px-8 py-3 bg-[#9BAB3C] text-white rounded-full font-medium hover:bg-[#8A9A2B] transition-colors duration-300">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer3 />
    </div>
  );
};

export default Portfolio;
