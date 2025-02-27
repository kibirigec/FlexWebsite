"use client";

import React from "react";

export function PortfolioHeader4() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="absolute inset-0 -z-[1]">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image 1"
          className="size-full object-cover"
        />
        <span className="absolute inset-0 z-10 bg-black/50" />
      </div>
      <div className="flex min-h-svg justify-center">
        <div className="max-w-lg py-16 text-center">
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl text-start">
            Corporate Gala Event
          </h1>
          <p className="text-text-alternative md:text-md text-start">
            A stunning corporate gala that showcased our expertise in event
            management and bespoke decor solutions.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Corporate Event
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Gala Dinner
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Event Management
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
