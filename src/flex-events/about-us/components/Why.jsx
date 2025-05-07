"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Why() {
  useFadeIn();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#F5F5F7]">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="fade-in3 mb-3 font-semibold md:mb-4 text-[black]">
              Why choose us?{" "}
            </p>
            <p className="fade-in md:text-md text-[#86868B] font-semibold">
              FlexEvents Management stands out for its ability to integrate creative decor, advanced technical services, and bespoke sound solutions. We handle every aspect of your event, from concept to execution, ensuring a flawless and memorable experience.
            </p>

            {/* Key Benefits List */}
            <div className="fade-in mt-6  self-center">
              <p className="font-semibold text-black">Key Benefits:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold npmmt-2">
                <li>End-to-End Event Management</li>
                <li>Tailored Solutions for Every Event Type</li>
                <li>High-Quality, Locally Made Sound Equipment</li>
                <li>Bespoke Decor for Every Occasion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
