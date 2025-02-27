"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Client Feedback
          </h1>
          <p className="md:text-md">
            Their attention to detail made our event unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Flex Events transformed our vision into reality with precision
              and creativity."
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">Someone Doe</p>
                <p>Event Planner, ABC Corp</p>
              </div>
              {/* <div className="hidden w-px self-stretch bg-black md:block" /> */}
             
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
              <BiSolidStar className="size-6" />
            </div>
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "The equipment was top-notch, and the service was exceptional!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">John Smith</p>
                <p>Marketing Director, XYZ Ltd</p>
              </div>
              {/* <div className="hidden w-px self-stretch bg-black md:block" /> */}
              
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
