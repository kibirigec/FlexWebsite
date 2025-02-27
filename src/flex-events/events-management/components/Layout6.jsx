"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Transforming Your Vision into Unforgettable Concert Experiences
            </h1>
            <p className="mb-6 md:mb-8 md:text-md text-[#86868B]">
            With a keen eye for detail, our expert team delivers seamless concert planning and execution, crafting unforgettable experiences for your audience.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Expert Coordination
                </h6>
                <p className="text-[#86868B]">
                  From logistics to artist management, we handle every aspect of
                  your concert.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Tailored Solutions
                </h6>
                <p className="text-[#86868B]">
                  Our bespoke services are designed to meet your unique concert
                  requirements.
                </p>
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
