"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout237() {
  useFadeIn();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-8 lg:mb-8">
            <p className="fade-in3  font-semibold md:mb-4 text-[#86868B] ">
              About
            </p>
            <h2 className="fade-in2 rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
              Your Vision, Our Creation
            </h2>
            <p className="fade-in md:text-md text-[#86868B] font-semibold">
              At Flex Events Management, we offer personalized event planning
              and management solutions designed to bring your vision to life.
              From corporate conferences to stunning weddings, we specialize in
              transforming ideas into unforgettable events
            </p>
          </div>

          <div className="mt-0 flex items-center gap-4 md:mt-0 lg:mt-0">
            <Link to="/about">
              <button className="px-4 py-2 text-black border-black border-1 hover:cursor-pointer">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
