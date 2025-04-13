"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [rentalsDropdownOpen, setRentalsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const rentalsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // The active page is always the current location pathname.
  const activePage = location.pathname;

  // Define the navigation items first
  const rentalItems = [
    "P.A System & Music/Mobile Disco",
    "Line Array Sound System",
    "Pro-Lights & Effects",
    "Aluminum Truss & Stages",
    "LED Screens & Video Walls",
    "Karaoke Mics / KTv Machines",
    "DLP Projectors & Screens",
    "DJ Equipment",
    "Wedding & Corporate Decor Rentals",
    "Power / Generators",
  ];

  const serviceItems = [
    "Wedding & Corporate Decor",
    "Invitation Cards",
    "Pro-Audio & Visual/Lighting",
    "Home Audio",
    "Systems Installations",
    "Flex Audio Brand ",
    "Full Event Management and Planning",
  ];

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  // Check if the location is in the rentals or services sections
  const isRentalsPage = activePage.startsWith("/rentals");
  const isServicesPage = activePage.startsWith("/services");

  // Get the active rental or service item based on the URL
  const activeRentalIndex = isRentalsPage
    ? parseInt(activePage.split("/")[2]) - 1
    : -1;
  const activeServiceIndex = isServicesPage
    ? parseInt(activePage.split("/")[2]) - 1
    : -1;

  // Get the active page name
  const activeRentalName =
    activeRentalIndex >= 0 && activeRentalIndex < rentalItems.length
      ? rentalItems[activeRentalIndex]
      : "";
  const activeServiceName =
    activeServiceIndex >= 0 && activeServiceIndex < serviceItems.length
      ? serviceItems[activeServiceIndex]
      : "";

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        rentalsDropdownRef.current &&
        !rentalsDropdownRef.current.contains(event.target)
      ) {
        setRentalsDropdownOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-controls="navbar-sticky"]')
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-40 top-0 start-0 backdrop-filter backdrop-blur-lg bg-black/80">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-3 px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="/FooterLogo.svg"
              alt="Logo image"
              className="inline-block min-w-[80px] w-[90px] h-auto"
            />
          </Link>
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-auto">
          <div className="flex items-center space-x-8 border border-[#9BAB3C]">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-white hover:text-[#9BAB3C] transition-colors duration-300
                  ${activePage === item.path ? "text-[#9BAB3C]" : ""}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:bg-[#9BAB3C] after:transform after:scale-x-0 after:transition-transform after:duration-300
                  hover:after:scale-x-100 ${activePage === item.path ? "after:scale-x-100" : ""}`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div ref={servicesDropdownRef} className="relative">
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setRentalsDropdownOpen(false);
                }}
                className={`relative py-2 text-white hover:text-[#9BAB3C] flex items-center transition-colors duration-300
                  ${isServicesPage ? "text-[#9BAB3C]" : ""}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:bg-[#9BAB3C] after:transform after:scale-x-0 after:transition-transform after:duration-300
                  hover:after:scale-x-100 ${isServicesPage ? "after:scale-x-100" : ""}`}
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-72 bg-black/95 border border-[#9BAB3C]/20 rounded-lg shadow-xl z-30 overflow-hidden transition-all duration-300 ${
                  servicesDropdownOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-2">
                  {serviceItems.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${index + 1}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm hover:bg-[#9BAB3C] hover:text-white transition-all duration-300 ${
                        activeServiceIndex === index
                          ? "bg-[#9BAB3C]/20 text-[#9BAB3C]"
                          : "text-white"
                      }`}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Rentals Dropdown */}
            <div ref={rentalsDropdownRef} className="relative">
              <button
                onClick={() => {
                  setRentalsDropdownOpen(!rentalsDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`relative py-2 text-white hover:text-[#9BAB3C] flex items-center transition-colors duration-300
                  ${isRentalsPage ? "text-[#9BAB3C]" : ""}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:bg-[#9BAB3C] after:transform after:scale-x-0 after:transition-transform after:duration-300
                  hover:after:scale-x-100 ${isRentalsPage ? "after:scale-x-100" : ""}`}
              >
                Flex Rentals
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                    rentalsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-72 bg-black/95 border border-[#9BAB3C]/20 rounded-lg shadow-xl z-30 overflow-hidden transition-all duration-300 ${
                  rentalsDropdownOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-2">
                  {rentalItems.map((rental, index) => (
                    <Link
                      key={index}
                      to={`/rentals/${index + 1}`}
                      onClick={() => setRentalsDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm hover:bg-[#9BAB3C] hover:text-white transition-all duration-300 ${
                        activeRentalIndex === index
                          ? "bg-[#9BAB3C]/20 text-[#9BAB3C]"
                          : "text-white"
                      }`}
                    >
                      {rental}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: About and Contact buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <Link to="/about">
            <button className="px-4 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black">
              About
            </button>
          </Link>
          {/* vertical separator */}
          <div className="h-[36px] bg-white w-[1px]" />
          <Link to="/contact">
            <button className="px-4 py-2 text-white transition-all duration-300 hover:bg-white hover:text-black">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-[#9BAB3C] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden bg-black/95 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 text-white hover:text-[#9BAB3C] transition-colors duration-300 ${
                activePage === item.path ? "text-[#9BAB3C]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Services Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`w-full text-left py-2 px-3 text-white hover:text-[#9BAB3C] transition-colors duration-300 ${
                isServicesPage ? "text-[#9BAB3C]" : ""
              }`}
            >
              Services
            </button>
            <div
              className={`pl-4 space-y-1 transition-all duration-300 ${
                servicesDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {serviceItems.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${index + 1}`}
                  onClick={() => {
                    setServicesDropdownOpen(false);
                    setIsOpen(false);
                  }}
                  className={`block py-2 px-3 text-sm text-white hover:text-[#9BAB3C] transition-colors duration-300 ${
                    activeServiceIndex === index ? "text-[#9BAB3C]" : ""
                  }`}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Rentals Dropdown */}
          <div className="py-2">
            <button
              onClick={() => setRentalsDropdownOpen(!rentalsDropdownOpen)}
              className={`w-full text-left py-2 px-3 text-white hover:text-[#9BAB3C] transition-colors duration-300 ${
                isRentalsPage ? "text-[#9BAB3C]" : ""
              }`}
            >
              Flex Rentals
            </button>
            <div
              className={`pl-4 space-y-1 transition-all duration-300 ${
                rentalsDropdownOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {rentalItems.map((rental, index) => (
                <Link
                  key={index}
                  to={`/rentals/${index + 1}`}
                  onClick={() => {
                    setRentalsDropdownOpen(false);
                    setIsOpen(false);
                  }}
                  className={`block py-2 px-3 text-sm text-white hover:text-[#9BAB3C] transition-colors duration-300 ${
                    activeRentalIndex === index ? "text-[#9BAB3C]" : ""
                  }`}
                >
                  {rental}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}