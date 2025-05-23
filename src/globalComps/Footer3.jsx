"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer3() {
  return (
    <footer
      id="relume"
      className="bg-[#333] text-white lg:h-[90vh] py-12 md:py-18 lg:py-20 w-full mb-0 overflow-hidden"
    >
      <div className="max-w-screen-xl container mx-auto px-8 md:px-0 lg:px-8">
        <div className="lg:mt-[-48px] grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8 lg:mt-[-38px]">
              <a href="#">
                <img
                  src="/FooterLogo.svg"
                  alt="Logo image"
                  className="inline-block min-w-[80px] w-[100px] h-auto"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm ">Address:</p>
              <p className="mb-5 text-sm md:mb-6 flex">
                Plot 2973, Kisaasi-Kyanja Road
                <br />
                Kyanja, Kampala, Uganda
              </p>
              <p className="mb-1 text-sm ">Contact:</p>
              <a
                href="tel:+256772406122"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +256 772 406 122
              </a>
              <a
                href="mailto:info@flexevents.ug"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@flexevents.ug
              </a>
            </div>
            {/* <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoFacebookCircle className="size-6" />
              </a>
              <a href="#">
                <BiLogoInstagram className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <BiLogoYoutube className="size-6" />
              </a>
            </div> */}
          </div>
          <div className="lg:mt-4 grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-lg  text-[#C4C4C4]">
                Services:
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/1"><span className="text-[17px] mr-2">•</span>Weddings</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/2"><span className="text-[17px] mr-2">•</span>Invitation Cards</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/3"><span className="text-[17px] mr-2">•</span>Audio Systems</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/4"><span className="text-[17px] mr-2">•</span>Home Audio</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/5"><span className="text-[17px] mr-2">•</span>AV Installations</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/6"><span className="text-[17px] mr-2">•</span>Custom Manufacturing</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/services/7"><span className="text-[17px] mr-2">•</span>Event Management</a>
              </li>
            </ul>
            <ul>
              <li className="py-1 text-lg  text-[#C4C4C4]">
                Rentals:
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/1"> <span className="text-[17px] mr-2">•</span>P.A System</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/2"><span className="text-[17px] mr-2">•</span>Line Array Sound System</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/3"><span className="text-[17px] mr-2">•</span>Pro Lights & Effects</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/4"><span className="text-[17px] mr-2">•</span>Aluminium Stages</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/5"><span className="text-[17px] mr-2">•</span>LED Screens</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/6"><span className="text-[17px] mr-2">•</span>Karaoke Machines</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/7"><span className="text-[17px] mr-2">•</span>Projectors & Screens</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/8"><span className="text-[17px] mr-2">•</span>DJ Equipment</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C] ">
                <a href="/rentals/9"><span className="text-[17px] mr-2">•</span>Wedding Decor</a>
              </li>
              <li className="py-1 text-sm  hover:text-[#9BAB3C]">
                <a href="/rentals/10"><span className="text-[17px] mr-2">•</span>Power/Generators</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black lg:mt-[-56px]" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">
            © 2025 FlexEvents. All rights reserved.
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {/* <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
