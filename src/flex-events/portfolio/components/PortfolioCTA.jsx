"use client";

import React from "react";
import Button from "../../../globalComps/Button";

export function PortfolioCTA() {
  return (
    <section className="py-24 bg-surface-subtle border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-content-prominent mb-6 tracking-tight">
          Ready to Create Your Own <span className="text-primary italic">Masterpiece?</span>
        </h2>
        <p className="text-xl text-content-subtle mb-10 leading-relaxed">
          Let us bring your vision to life with our expertise and passion for perfection.
        </p>
        <div className="flex justify-center gap-4">
           <Button to="/contact" variant="primary" size="lg">Start Planning</Button>
           <Button to="/services" variant="outline" size="lg">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
