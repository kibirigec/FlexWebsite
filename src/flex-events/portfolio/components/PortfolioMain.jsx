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
    if (activeTab !== "weddings") {
      return (
         <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
               <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Portfolio Update in Progress</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We are currently curating and updating our portfolio for {TABS.find(t => t.id === activeTab)?.label}. 
              Please check back soon to see our latest work in this category!
            </p>
         </div>
      );
    }
    
    return <WeddingsSection />;
  };

  return (
    <section className="pt-32 pb-24 bg-surface-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-content-prominent mb-2"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[17px]/6 text-content-subtle max-w-2xl mx-auto leading-relaxed"
          >
            From intimate gatherings to massive celebrations, explore how we transform visions into reality.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-3 w-full px-4 md:w-auto md:px-0 md:gap-0 md:inline-flex md:bg-surface-subtle md:p-1.5 md:rounded-full md:border md:border-black/5">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                  activeTab === tab.id 
                    ? "text-white" 
                    : "text-content-subtle hover:text-content-default bg-gray-100 md:bg-transparent"
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
