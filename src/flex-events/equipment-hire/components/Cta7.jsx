"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container   grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full ">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-4xl lg:text-5xl">
              Premium Equipment,<br /> Professional Execution
            </h2>
            <p className="md:text-md">
              Get a tailored quote for your event equipment today!
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4 mt-6 lg:mt-6 ">
          <Button title="Contact Us" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
