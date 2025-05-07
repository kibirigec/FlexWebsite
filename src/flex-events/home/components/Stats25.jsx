"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            {/* <p className="mb-3 font-semibold md:mb-4 text-[#86868B]">
              Perfection
            </p> */}
            <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px]/8 font-bold ">
              Celebrating Over <br /> 20 Years of Success
            </h2>
          </div>
          <div>
            <p className="md:text-md lg:leading-[1.38] lg:tracking-[.011em] text-[#86868B] font-semibold">
              With over two decades of experience, we have successfully managed
              countless events. Our commitment to excellence ensures that every
              detail is meticulously executed. Join the ranks of our satisfied
              clients who trust us for their most important occasions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div className="border border-border-primary p-8">
            <p className=" fade-in3 mb-8 text-6xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] text-[#9BAB3C]">
              500+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Events Managed
            </h3>
            <p className="mt-2 text-[#86868B]">
              Trusted by clients across various industries.
            </p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="fade-in2 mb-8 text-6xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] text-[#9BAB3C]">
              98%
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Client Satisfaction Rate
            </h3>
            <p className="mt-2 text-[#86868B]">
              We prioritize your vision and goals.
            </p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="fade-in mb-8 text-6xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem] text-[#9BAB3C]">
              20+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Years in Business
            </h3>
            <p className="mt-2 text-[#86868B]">Experience you can rely on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
