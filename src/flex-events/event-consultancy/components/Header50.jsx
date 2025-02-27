"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-36 md:py-24 lg:py-48">
      <div className="container">
        <div className="w-full max-w-lg">
          {/* <p className="mb-3 font-semibold text-text-alternative md:mb-4">
            Guidance
          </p> */}
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Expert Event Consultancy
          </h1>
          <p className="text-text-alternative md:text-md">
            Transform your vision into reality with our tailored event
            consultancy services designed for success.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {/* <Button title="Learn More">Learn More</Button> */}
            {/* <Button title="Sign Up" variant="secondary-alt">
              Contact Us
            </Button> */}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
