"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout241() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col mt-36">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="lg:mx-auto w-full max-w-lg">
              <p className="fade-in3 mb-3 font-semibold md:mb-4 text-center text-[#86868B] ">Services</p>
              <h2 className="fade-in2 mb-5 text-5xl text-center font-bold md:mb-6 md:text-5xl lg:text-5xl lg:text-center">
                Comprehensive Solutions for Every Event
              </h2>
              <p className="fade-in md:text-md text-[#86868B] font-semibold text-center">
                At FlexEvents, we specialize in transforming your vision into
                unforgettable experiences. Our diverse range of services ensures
                that every detail is meticulously planned and executed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Expert Events Management Tailored to You
              </h3>
              <p>From corporate gatherings to weddings, we handle it all.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Top-Quality Equipment Hire for Your Events
              </h3>
              <p>We provide state-of-the-art lighting, sound, and staging.</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Bespoke Decor Services for Unique Experiences
              </h3>
              <p>Our decor solutions are tailored to reflect your style.</p>
            </div>
          </div>
          {/* <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Learn More</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Sign Up
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
