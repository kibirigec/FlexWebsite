"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    // <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
    //   <div className="container">
    //     <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
    //       <div className="w-full max-w-lg">
    //         <p className="mb-3 font-semibold md:mb-4">Quality</p>
    //         <h1 className="text-6xl font-bold md:text-7xl lg:text-8xl">
    //           Top-Notch Equipment
    //         </h1>
    //       </div>
    //       <div className="w-full max-w-lg">
    //         <p className="md:text-md">
    //           At FlexEvents, we provide a comprehensive range of equipment hire
    //           services tailored to elevate your event. From sound systems to
    //           stunning lighting, we ensure your vision comes to life.
    //         </p>
    //         <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
    //           <Button title="Learn More">Learn More</Button>
    //           <Button title="Sign Up" variant="secondary">
    //             Sign Up
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="relume" className="relative px-[5%] py-36 md:py-24 lg:py-48">
      <div className="container">
        <div className="w-full max-w-lg">
          {/* <p className="mb-3 font-semibold text-text-alternative md:mb-4">
                Transform
              </p> */}
          <h1 className="mb-5 text-6xl font-bold text-white text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Hire Outstanding Equipment
          </h1>
          <p className="text-text-alternative md:text-md text-white">
            At FlexEvents, we provide a comprehensive range of equipment hire
            services tailored to elevate your event. From sound systems to
            stunning lighting, we ensure your vision comes to life.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Contact Us</Button>
          
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
