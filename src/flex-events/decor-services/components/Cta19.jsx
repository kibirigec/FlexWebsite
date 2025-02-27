"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            Transform Your Event with Us
          </h2>
          <p className="md:text-md">
            Contact Flex Events today for personalized decor solutions that
            elevate your special occasions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Contact Us</Button>
            {/* <Button title="Schedule" variant="secondary">
              Schedule
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
