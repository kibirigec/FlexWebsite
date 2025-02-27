"use client";

import React from "react";

export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
          <div>
          <p className="mb-3 font-semibold md:mb-4 text-[#86868B]">Stages</p>

            <h2 className="rb-5 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Explore Our Versatile Staging Options for Every Event's Unique
              Needs
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-[#86868B]">
              Our staging options include modular stages that can be customized
              to fit any venue. With a focus on safety and durability, we ensure
              your event runs smoothly and impressively.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-5xl">
                  Safety
                </h3>
                <p className="text-[#86868B]">Safety features you can trust for every event.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-5xl">
                  Custom
                </h3>
                <p className="text-[#86868B]">Tailored designs to match your event's vision.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
