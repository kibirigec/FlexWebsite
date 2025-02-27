"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout1() {
  useFadeIn();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="fade-in3 mb-3 text-[#86868B] font-semibold md:mb-4">
              4. Sound
            </p>

            <h1 className="fade-in3 rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Custom Sound Solutions for Every Event
            </h1>
            <p className="fade-in2 md:text-md text-[#86868B]">
              Our in-house sound equipment manufacturing service ensures
              high-quality, reliable sound systems that are perfect for any
              event."
            </p>
            <div className="mt-6  self-center">
              <p className="font-semibold text-black">What We Offer:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold mt-2">
                <li>Both locally and imported made, durable sound systems.</li>
                <li>Customizable solutions based on your event needs.</li>
                <li>Full installation and technical support.</li>
              </ul>
            </div>
            <div className="mt-6  self-center">
              <p className="font-semibold text-black">Products Available:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold mt-2">
                <li>Portable sound systems for small events.</li>
                <li>Professional-grade speakers, amplifiers, and mixers.</li>
                <li>Full-stage audio systems for concerts and expos.</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link to="/sound">
                <button className="px-4 py-2 text-black border-black border-1 ">
                Inquire About Our Sound Systems
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/linerary.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
