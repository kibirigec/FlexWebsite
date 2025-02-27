"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout6() {
  useFadeIn();


  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="fade-in3 mb-3 text-[#86868B] font-semibold md:mb-4">
              3. Decor
            </p>

            <h1 className="fade-in3 rb-5 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Transform Your Event with Our Bespoke Decor Solutions Tailored
              Just for You
            </h1>
            <p className="fade-in2 mb-6 md:mb-8 md:text-md text-[#86868B]">
            Our custom decor services are designed to make your event stand out. Whether it’s a corporate gala, wedding, or product launch, our decor will create the perfect atmosphere."
            </p>
            <div className="mt-6  self-center">
              <p className="font-semibold text-black">What We Offer:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold mt-2">
                <li>Thematic décor tailored to the vision of the event.</li>
                <li>Flower arrangements, table settings, and signage.</li>
                <li>Stage setups and event installations.</li>
                <li>Premium finishes such as luxury seating and custom-built designs.</li>
              </ul>
            </div>
            <div>
            <Link to="/decor">
                <button className="px-4 py-2 text-black border-black border-1 ">
                Start Designing Your Event Décor
                </button>
              </Link>
            </div>
            {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Custom Designs
                </h6>
                <p>
                  We craft unique designs that reflect your brand and event
                  theme perfectly.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Expert Team
                </h6>
                <p>
                  Our experienced team ensures every detail is meticulously
                  planned and executed.
                </p>
              </div>
            </div> */}
          </div>
          <div>
            <img
              src="/wedding-decor.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
