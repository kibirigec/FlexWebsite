"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom"
// import "./index.css"
// import "../../../assets/fonts/SFPRO-Regular.otf"

export function Layout1() {
  return (
    <section id="relume" className="bg-[#F5F5F7] md:px-27 py-16 md:py-24 lg:py-28 mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className=" fade-in3 mb-3 font-semibold md:mb-4 text-[#86868B]">Elegance</p>
            <h1 className="fade-in3 rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Why Choose <br /> FlexEvents for Your Next Event?
            </h1>
            <p className="fade-in2 md:text-md font-semibold text-[#86868B] lg:tracking-[.011em] lg:leading-[1.38]">
              With over 20 years of experience, FlexEvents brings unparalleled
              expertise to every occasion. Our bespoke solutions ensure that
              your event is uniquely tailored to your vision and needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link to="/about">
                <button className="px-4 py-2 text-black border-black border-1 ">
                  About Us
                </button>
              </Link>
             
            </div>
          </div>
          <div className="fade-in3">
            <img
              src="/weddingmainside.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
