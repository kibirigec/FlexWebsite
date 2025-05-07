"use client";

import React from "react";

import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout1() {
  useFadeIn();

  return (
    <section id="relume" className="px-[5%] py-10 md:py-10 lg:py-10 bg-[#F5F5F7]">
      <div className="container mx-auto items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="rb-12 w-full max-w-lg text-center">
            <p className="fade-in3 mb-3 font-semibold md:mb-4 text-[#000]">
              Our Vision
            </p>
            {/* <h2 className="fade-in2 rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
              Your Vision, Our Creation
            </h2> */}
            <p className="fade-in md:text-md text-[#86868B] font-semibold flex justify-center items-center">
              At FlexEvents, we bring your ideas to life through exceptional
              event management and execution. Our dedicated team ensures every
              detail is meticulously handled — creating unforgettable
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
