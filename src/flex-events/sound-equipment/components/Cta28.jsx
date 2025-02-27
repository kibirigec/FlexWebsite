"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta28() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Stay Updated on Sound Equipment
          </h2>
          <p className="text-text-alternative md:text-md">
            Subscribe to our newsletter for the latest updates on sound
            equipment and exclusive promotions.
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Sign up"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Sign up
              </Button>
            </form>
            <p className="text-xs text-text-alternative">
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </p>
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
