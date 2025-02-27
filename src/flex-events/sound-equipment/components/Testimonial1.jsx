"use client";

import React from "react";

export function Testimonial1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 mx-auto">
      <div className="container w-full max-w-lg mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 md:mb-8">
          
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            "The sound equipment from Flex Events transformed our conference
            into an unforgettable experience. Their attention to detail and
            quality made all the difference!"
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar"
                className="size-16 min-h-16 min-w-16 rounded-full object-cover"
              />
            </div>
            <p className="font-semibold">Jane Doe</p>
            <p>Event Planner, ABC Corp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
