"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Expertise</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Team
          </h2>
          <p className="md:text-md">
            Meet our dedicated equipment hire team, committed to delivering
            exceptional service and quality.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Open Positions" variant="secondary">
              Open Positions
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">John Doe</h5>
                <h6 className="md:text-md">Equipment Specialist</h6>
              </div>
              <p>
                Bringing over 10 years of experience in managing high-quality
                equipment for events.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">Jane Smith</h5>
                <h6 className="md:text-md">Logistics Manager</h6>
              </div>
              <p>
                Expert in coordinating logistics to ensure seamless equipment
                delivery and setup.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">
                  Mark Johnson
                </h5>
                <h6 className="md:text-md">Technical Director</h6>
              </div>
              <p>
                Leading the technical team to ensure top-notch sound and
                lighting solutions for every event.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
