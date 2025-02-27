"use client";

import React, { use } from "react";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Header54() {
  useFadeIn();
  return (
    <section id="relume" className="lg:mt-24 relative px-[5%] py-36 md:py-48 lg:py-56">
      <div className="container mx-auto">
        <div className="w-full max-w-lg ">
          <h1 className="fade-in mb-5 text-white text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-6xl">
            Unleashing Event Excellence
          </h1>
          <p className="fade-in2 text-text-alternative md:text-md text-white">
          At Flex Events Management, we specialize in comprehensive event solutions that cater to all types of events. Whether you need expert planning, unique decor, or advanced technical setups, we’re here to deliver a seamless experience
          </p>
        </div>
      </div>
      <div className="absolute inset-0 lg:inset-6 -z-10 mx-auto">
        <img
          src="https://plus.unsplash.com/premium_photo-1661402174489-ea6d7f6d6b5e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50 " />
      </div>
    </section>
  );
}
