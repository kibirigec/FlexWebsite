"use client";

import React from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout24() {
  useFadeIn();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            {/* <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo"
              />
            </div> */}
            <p className="fade-in3 mb-3 text-[#86868B] font-semibold md:mb-4">
              1. Event Planning & Execution
            </p>

            <h3 className="fade-in3 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Comprehensive Events Management Tailored to Your Unique Vision and
              Needs
            </h3>
            <p className="fade-in2 md:text-md text-[#86868B]">
            From corporate events to weddings and everything in between, we offer full-scale event planning and execution to ensure your event goes smoothly."
            </p>
            <div className="mt-6  self-center">
              <p className="font-semibold text-black">What we provide:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold mt-2">
                <li>Initial consultation to understand event objectives and goals.</li>
                <li>Detailed event timeline and schedule creation.</li>
                <li>Venue selection and vendor management.</li>
                <li>Day-of coordination to ensure flawless execution</li>
              </ul>
            </div>
            <div className="mt-6">
              <Link to="/management">
                <button className="px-4 py-2 text-black border-black border-1 ">
                Request a Consultation
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="cpaaaaa.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
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
