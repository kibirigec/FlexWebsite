"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Let's Bring Your Vision to Life
            </h2>
            <p className="md:text-md">
              Contact us today to discuss how we can make your event
              unforgettable and stress-free.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {/* <Button title="Inquire">Inquire</Button> */}
              <Button title="Consult" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
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
