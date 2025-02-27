"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header50() {
  return (
    <section id="relume" className="lg:mt-18 mt-12 relative px-[5%] py-16 md:py-24 lg:py-48">
      <div className="container">
        <div className="w-full max-w-lg">
        
          <h1 className="text-white mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Get <br /> in Touch
          </h1>
          <p className="text-text-alternative md:text-md text-white">
            We’re here to assist you with all your event management needs. Reach
            out today!
          </p>
          {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button className="text-white" title="Contact">Contact Us</Button>
            
          </div> */}
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1531592937781-344ad608fabf?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
