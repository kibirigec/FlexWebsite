"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Customized Wedding Planning for Your Perfect Day
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-[#86868B]">
              FlexEvents excels in crafting unforgettable weddings that
              capture your unique love story. Our tailored planning and
              execution services ensure every detail is flawless, allowing you
              to enjoy your special day without stress.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl text-[#9BAB3C]">
                  50%
                </h3>
                <p>Personalized services for an unforgettable wedding experience.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl text-[#9BAB3C]">
                  50%
                </h3>
                <p>Expert planners committed to your wedding vision.</p>
              </div>
            </div>
            {/* <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Inquire" variant="secondary">
                Inquire
              </Button>
              <Button
                title="Learn More"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn More
              </Button>
            </div> */}
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
