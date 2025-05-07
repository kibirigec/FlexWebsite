"use client";

import React from "react";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout22() {
  useFadeIn();

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-10 bg-[white]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="rb-12  w-full max-w-lg text-center ">
            <p className="fade-in3 mb-3 font-semibold md:mb-4 text-[#000]">
              Our Mission
            </p>

            <p className="fade-in md:text-md text-[#86868B] font-semibold">
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
