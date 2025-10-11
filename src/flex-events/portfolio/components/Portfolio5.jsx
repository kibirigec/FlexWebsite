"use client";

import React, { useState, useRef } from "react";
// Import your section components
import { WeddingsSection } from "../sections/WeddingsSection";
import { ExposSection } from "../sections/ExposSection";
import { CarnivalsSection } from "../sections/CarnivalsSection";
import { ConcertsSection } from "../sections/ConcertsSection";
import { ProductLaunchesSection } from "../sections/ProductLaunchesSection";

export function Portfolio5() {
  const [activeSection, setActiveSection] = useState("weddings");
  const sectionRef = useRef(null);

  const renderSection = () => {
    switch (activeSection) {
      case "weddings":
        return <WeddingsSection />;
      case "expos":
        return <ExposSection />;
      case "carnivals":
        return <CarnivalsSection />;
      case "concerts":
        return <ConcertsSection />;
      case "productlaunches":
        return <ProductLaunchesSection />;
      default:
        return <WeddingsSection />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="px-[5%] py-56 md:py-24 lg:py-28"
    >
      <div className="container">
        {/* Title Section */}
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 text-[#86868B]">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-6xl">
            Our Exceptional Events
          </h2>
          <p className="md:text-md text-[#86868B] font-semibold">
          Browse our portfolio to see how we've transformed concepts into successful, memorable events. Our work speaks for itself, with a diverse range of events, from intimate weddings to large corporate conferences          </p>
        </div>

        {/* Navbar Section */}
        <div className="static lg:sticky lg:top-26 bg-[#EBEBEB] w-full md:w-[70vw] lg:w-[50vw] mx-auto rounded-2xl lg:rounded-4xl overflow-hidden">
          <nav className="flex flex-nowrap justify-start md:justify-center gap-x-1 md:gap-x-2 px-2 py-2 md:py-3 lg:py-4 overflow-x-auto scrollbar-hide">
            {["Weddings", "Corporate Events", "Carnivals", "Concerts", "Product Launches"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase().replace(" ", ""))}
                className={`font-semibold transition-all duration-300 rounded-2xl md:rounded-3xl px-3 py-2 text-xs md:text-sm lg:text-base lg:px-4 lg:py-1 whitespace-nowrap flex-shrink-0 ${
                  activeSection === item.toLowerCase().replace(" ", "")
                    ? "text-white !bg-black"
                    : "text-gray-700 hover:text-[#9BAB3C]"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Section */}
        <div className="mt-8">{renderSection()}</div>
      </div>
    </section>
  );
}
