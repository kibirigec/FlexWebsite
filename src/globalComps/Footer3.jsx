"use client";

import React from "react";
import { Link } from "react-router-dom";

export function Footer3() {
  return (
    <footer className="bg-[#111111] text-white py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/NewFlexLogo1.png"
                alt="Flex Events"
                className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </Link>
            
            <div className="space-y-4 text-sm leading-relaxed text-[#A1A1A6]">
              <div>
                <h4 className="font-semibold text-white mb-1">Address</h4>
                <p>Plot 2973, Kisaasi-Kyanja Road<br />Kyanja, Kampala, Uganda</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-1">Contact</h4>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+256772406122" className="hover:text-primary transition-colors">+256 772 406 122</a>
                  <a href="mailto:info@flexeventsug.com" className="hover:text-primary transition-colors">info@flexevents.ug</a>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  { name: "Weddings", path: "/services/1" },
                  { name: "Invitation Cards", path: "/services/2" },
                  { name: "Audio Systems", path: "/services/3" },
                  { name: "Home Audio", path: "/services/4" },
                  { name: "AV Installations", path: "/services/5" },
                  { name: "Custom Manufacturing", path: "/services/6" },
                  { name: "Event Management", path: "/services/7" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-[#A1A1A6] hover:text-primary transition-colors duration-200 block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Rentals</h3>
              <ul className="space-y-2">
                {[
                  { name: "P.A System", path: "/rentals/1" },
                  { name: "Line Array Sound System", path: "/rentals/2" },
                  { name: "Pro Lights & Effects", path: "/rentals/3" },
                  { name: "Aluminium Stages", path: "/rentals/4" },
                  { name: "LED Screens", path: "/rentals/5" },
                  { name: "Karaoke Machines", path: "/rentals/6" },
                  { name: "Projectors & Screens", path: "/rentals/7" },
                  { name: "DJ Equipment", path: "/rentals/8" },
                  { name: "Wedding Decor", path: "/rentals/9" },
                  { name: "Power/Generators", path: "/rentals/10" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-sm text-[#A1A1A6] hover:text-primary transition-colors duration-200 block py-0.5">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#6E6E73]">
          <p>© {new Date().getFullYear()} FlexEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
