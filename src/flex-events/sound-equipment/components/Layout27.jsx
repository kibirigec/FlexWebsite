"use client";

import React from "react";

export function Layout27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Experience Unmatched Craftsmanship in Bespoke Sound Systems
              Tailored Just for You
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-[#86868B]">
              At FlexEvents, we pride ourselves on our ability to create sound
              systems that are not only high-quality but also uniquely designed
              to meet your specific requirements. Our expert team combines
              innovation with craftsmanship to deliver exceptional audio
              experiences.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-3xl lg:text-4xl">
                  Craftsmanship
                </h3>
                <p className="text-[#86868B]">Tailored sound systems for every unique event.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-3xl lg:text-4xl">
                  Quality
                </h3>
                <p className="text-[#86868B]">Locally crafted for superior sound performance.</p>
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
