"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout41() {

  useFadeIn();
  return (
    <section id="relume" className="bg-[#F5F5F7] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            {/* <p className="mb-3 font-semibold md:mb-4">Excellence</p> */}
            <h2 className=" fade-in3 text-5xl font-bold md:text-5xl lg:text-6xl">
              Our Story: <br />20 Years of Event Mastery
            </h2>
          </div>
          <div className="fade-in"> 
            <p className="md:text-md text-[#86868B]">
            FlexEvents Management has grown from a local provider into a leading player across East Africa. We offer a diverse range of event services, from intimate gatherings to large-scale corporate functions. Our mission is to provide seamless event experiences through creative designs, advanced technical support, and world-class service
            </p>
            {/* <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Join Us"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Join Us
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
