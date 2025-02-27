"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Transform Your Event with Our Bespoke, World-Class Decor Solutions
            </h1>
            <p className="md:text-md text-[#86868B]">
              We specialize in creating stunning decor that
              reflects your unique vision. Our team collaborates closely with
              you to design and execute custom solutions that elevate any
              occasion.
            </p>
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
