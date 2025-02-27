"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Header5() {
  useFadeIn();

  


  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-lg">
            <h1 className=" fade-in text-white lg:mt-24 text-4xl mb-4 font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-6xl">
              Beautiful Events, Unforgettable Experiences
            </h1>
            <p className="fade-in2 text-text-alternative md:text-md text-white lg:leading-[1.38] lg:tracking:[.011em]">
            Welcome to Flex Events Management – Your Partner in Seamless Event Planning Across East Africa
            </p>
            <div className="fade-in3 mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link to="/booking"> 
              {/* goes to form */}
                <button className=" px-4 py-2 text-white border-white border-1 ">
                  Get Started
                </button>
                {/* goes to calendar */}
                <button className="px-4 py-2 text-white border-white border-1 ml-2 lg:ml-4">
                  Book your event 
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
