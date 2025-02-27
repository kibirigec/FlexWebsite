"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Stay Updated with Flex Events
            </h2>
            <p className="md:text-md">
              Subscribe to our newsletter for the latest updates, promotions, and exclusive event insights.
            </p>
            <div className="mt-6 w-full max-w-sm md:mt-8">
              <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
                <Input id="email" type="email" placeholder="Your Email Here" />
                <Button>Join Now</Button>
              </form>
              <p className="text-xs">
                By clicking Sign Up you're confirming that you agree with our{" "}
                <a href="#" className="underline">
                  Terms and Conditions
                </a>.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
