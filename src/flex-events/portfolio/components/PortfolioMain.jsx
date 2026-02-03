"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeddingsSection } from "../sections/WeddingsSection";
import { ExposSection } from "../sections/ExposSection";
import { CarnivalsSection } from "../sections/CarnivalsSection";
import { ConcertsSection } from "../sections/ConcertsSection";
import { ProductLaunchesSection } from "../sections/ProductLaunchesSection";

const TABS = [
  { id: "weddings", label: "Weddings" },
  { id: "expos", label: "Expos" },
  { id: "carnivals", label: "Carnivals" },
  { id: "concerts", label: "Concerts" },
  { id: "productlaunches", label: "Product Launches" },
];

export function PortfolioMain() {
  const [activeTab, setActiveTab] = useState("weddings");

  const renderSection = () => {
    switch (activeTab) {
      case "weddings": return <WeddingsSection />;
      case "expos": return <ExposSection />;
      case "carnivals": return <CarnivalsSection />;
      case "concerts": return <ConcertsSection />;
      case "productlaunches": return <ProductLaunchesSection />;
      default: return <WeddingsSection />;
    }
  };

  return (
    <section className="pt-32 pb-24 bg-surface-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-content-prominent mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-content-subtle max-w-2xl mx-auto leading-relaxed"
          >
            From intimate gatherings to massive celebrations, explore how we transform visions into reality.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="inline-flex bg-surface-subtle p-1.5 rounded-full border border-black/5">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap z-10 ${
                  activeTab === tab.id ? "text-white" : "text-content-subtle hover:text-content-default"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[500px]"
        >
           {renderSection()}
        </motion.div>

      </div>
    </section>
  );
}
