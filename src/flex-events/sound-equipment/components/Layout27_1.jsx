"use client";

import React from "react";

export function Layout27_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Tailored Sound Solutions for Every Event Size and Type
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-[#86868B]">
              At FlexEvents, we understand that every event is unique. That's
              why we offer customizable sound equipment options, ensuring that
              your specific needs are met, whether for an intimate gathering or
              a grand celebration.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-6xl lg:text-7xl">
                  Small
                </h3>
                <p className="text-[#86868B]">
                  Perfect for intimate gatherings and personal celebrations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-6xl lg:text-7xl">
                  Large
                </h3>
                <p className="text-[#86868B]">Ideal for conferences, concerts, and large events.</p>
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
