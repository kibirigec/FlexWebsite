"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Layout12() {
  useFadeIn();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="fade-in3 mb-3 text-[#86868B] font-semibold md:mb-4">
              2. Hire Services
            </p>

            <h1 className="fade-in3 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
              Elevate Your Events with Our Premier Equipment Hire Services
            </h1>
            <p className="fade-in2 mb-6 md:mb-8 md:text-md text-[#86868B]">
            We provide state-of-the-art event equipment, including lighting, sound systems, LED walls, and staging, ensuring your event looks and sounds perfect
            </p>
            <div className="mt-6  self-center">
              <p className="font-semibold text-black">Equipment available:</p>
              <ul className="list-disc list-inside text-[#86868B] font-semibold mt-2">
                <li>Sound systems (ranging from small gatherings to large-scale events).</li>
                <li>LED walls and projectors for dynamic presentations.</li>
                <li>Lighting setups (ambient, stage lighting, special effects).</li>
                <li>Custom staging and furniture arrangements.</li>
              </ul>
            </div>
            {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Audio Visual
                </h6>
                <p>
                  High-quality sound systems and visual equipment for
                  unforgettable experiences.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Lighting Solutions
                </h6>
                <p>
                  Stunning lighting setups to create the perfect ambiance for
                  your event.
                </p>
              </div>
            </div> */}
            <div className="mt-6">
            <Link to="/hire">
                <button className="px-4 py-2 text-black border-black border-1 ">
                  Browsse our equipment hire options
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/linerymaim.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
