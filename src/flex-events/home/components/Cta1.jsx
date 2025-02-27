"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom"

export function Cta1() {
  return (
    <section
      id="relume"
      className="bg-[#F5F5F7] px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Let's Plan Your Perfect Event
            </h2>
            <p className="md:text-md">
              Contact us today to discuss your event needs and receive a
              personalized quote.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {/* <Button title="Get Quote">Get Quote</Button> */}
              <Link to="/contact">
                <button className="px-4 py-2 text-black border-black border-1 ">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/weddingplan.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
