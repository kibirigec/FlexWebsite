"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom"

export function Cta27() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center mx-auto">
        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
          Transform Your Sound Experience Today
        </h2>
        <p className="text-text-alternative md:text-md">
          Contact us now for a personalized consultation or to receive a
          tailored quote for sound equipment.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Link to="/contact">
            <button className="px-4 py-2 text-black border-black border-1 ">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
    </section>
  );
}
