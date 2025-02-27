"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Tailored Corporate Events: <br /> Elevate Your Brand with Unforgettable
              Experiences
            </h1>
            <p className="md:text-md text-[#86868B]">
              Our corporate events services encompass everything from impactful
              seminars and dynamic product launches to engaging team-building
              activities. We ensure every detail aligns with your vision,
              creating memorable experiences that resonate with your audience.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
