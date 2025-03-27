"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom"
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout237() {
  useFadeIn();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="fade-in3 mb-3 font-semibold md:mb-4 text-[#86868B]">
              About
            </p>
            <h2 className="fade-in2 rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
              Your Vision, Our Creation
            </h2>
            <p className="fade-in md:text-md text-[#86868B] font-semibold">
            At Flex Events Management, we offer personalized event planning and management solutions designed to bring your vision to life. From corporate conferences to stunning weddings, we specialize in transforming ideas into unforgettable events
            </p>
          </div>
          {/* <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl text-start">
                Comprehensive Event Management Services for you
              </h3>
              <p className="text-[#86868B] ">
                From corporate gatherings to weddings, we manage it all.
              </p>
            </div>
            <div className="flex w-full flex-col items-center lg:text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Top-Notch Equipment Hire for Every Occasion
              </h3>
              <p className="text-[#86868B] ">
                We provide state-of-the-art sound, lighting, and staging.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl lg:text-end">
                Bespoke Decor Solutions Tailored to You
              </h3>
              <p className="text-[#86868B] ">
                Transform your space with our stunning decor services.
              </p>
            </div>
          </div> */}

          {/* <div className="w-full h-[40vh] bg-black justify-center">
            <p className="text-white justify-center items-center">
                Space for the carousel
            </p>

          </div> */}
          {/*Goes to services */}
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Link to="/about">
              <button className="px-4 py-2 text-black border-black border-1 ">
                  About Us
                </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
