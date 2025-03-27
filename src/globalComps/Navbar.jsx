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
    "Full Event Management and Planning"
  ];

  // Check if the location is in the rentals or services sections
  const isRentalsPage = activePage.startsWith("/rentals");
  const isServicesPage = activePage.startsWith("/services");

  // Get the active rental or service item based on the URL
  const activeRentalIndex = isRentalsPage ? parseInt(activePage.split('/')[2]) - 1 : -1;
  const activeServiceIndex = isServicesPage ? parseInt(activePage.split('/')[2]) - 1 : -1;

  // Get the active page name
  const activeRentalName = activeRentalIndex >= 0 && activeRentalIndex < rentalItems.length 
    ? rentalItems[activeRentalIndex] 
    : "";
  const activeServiceName = activeServiceIndex >= 0 && activeServiceIndex < serviceItems.length 
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
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-black/65">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2">
        {/* Logo */}
        <div className="flex items-center ml-4 md:ml-0">
          <Link
            to="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img src="./Group 16.svg" alt="Flex Logo" />
          </Link>
        </div>

        {/* Navigation Menu (Desktop) - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {/* Home Link */}
            <div>
              <Link
                to="/"
                className={`relative py-4 px-4 md:hover:text-[#9BAB3C] border-0 transition-colors duration-300
                  ${activePage === "/" ? "text-[#9BAB3C] dark:text-[#9BAB3C] dark:border-0" : "text-white"}
                  before:content-[''] before:absolute before:inset-0 before:w-full 
                  before:bg-[#9BAB3C]/20 before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out 
                  before:border-b-[0px] hover:before:border-b-2 before:border-[#9BAB3C]
                  hover:before:scale-x-100`}
              >
                Home
              </Link>
            </div>

            {/* Services Dropdown */}
            <div ref={servicesDropdownRef} className="relative">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setRentalsDropdownOpen(false);
                  }}
                  className={`relative py-4 px-4 md:hover:text-[#9BAB3C] flex items-center transition-colors duration-300
                    ${isServicesPage ? "text-[#9BAB3C] dark:text-[#9BAB3C] dark:border-0" : "text-white"}
                    before:content-[''] before:absolute before:inset-0 before:w-full 
                    before:bg-[#9BAB3C]/20 before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out 
                    before:border-b-[0px] hover:before:border-b-2 before:border-[#9BAB3C]
                    ${isServicesPage ? 'before:scale-x-100 before:border-b-2' : 'before:scale-x-0'}
                    hover:before:scale-x-100`}
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
                {/* {isServicesPage && activeServiceName && (
                  <span className="text-xs text-[#9BAB3C] mt-1 max-w-[200px] text-center truncate ">
                    {activeServiceName}
                  </span>
                )} */}
                </button>
                
                {/* Display active service name */}
              </div>

              <div
                className={`absolute left-0 mt-2 w-72 bg-black/95 border border-[#9BAB3C] rounded-md shadow-xl z-30 overflow-hidden transition-all duration-500 ${
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
                      className={`block px-4 py-2 text-sm hover:bg-[#9BAB3C] hover:text-white transition-all duration-500 ${
                        activeServiceIndex === index 
                          ? "bg-[#9BAB3C]/30 text-[#9BAB3C]" 
                          : "text-white"
                      }`}
                      style={{
                        opacity: servicesDropdownOpen ? 1 : 0,
                        transform: servicesDropdownOpen
                          ? "translateY(0)"
                          : "translateY(-10px)",
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Rentals Dropdown */}
            <div ref={rentalsDropdownRef} className="relative">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => {
                    setRentalsDropdownOpen(!rentalsDropdownOpen);
                    setServicesDropdownOpen(false);
                  }}
                  className={`relative py-4 px-4 md:hover:text-[#9BAB3C] flex items-center transition-colors duration-300
                    ${isRentalsPage ? "text-[#9BAB3C] dark:text-[#9BAB3C] dark:border-0" : "text-white"}
                    before:content-[''] before:absolute before:inset-0 before:w-full 
                    before:bg-[#9BAB3C]/20 before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out 
                    before:border-b-[0px] hover:before:border-b-2 before:border-[#9BAB3C]
                    ${isRentalsPage ? 'before:scale-x-100 before:border-b-2' : 'before:scale-x-0'}
                    hover:before:scale-x-100`}
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
                
                {/* Display active rental name */}
                {/* {isRentalsPage && activeRentalName && (
                  <span className="text-xs text-[#9BAB3C] mt-1 max-w-[200px] text-center truncate">
                    {activeRentalName}
                  </span>
                )} */}
              </div>

              <div
                className={`absolute left-0 mt-2 w-72 bg-black/95 border border-[#9BAB3C] rounded-md shadow-xl z-30 overflow-hidden transition-all duration-500 ${
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
                      className={`block px-4 py-2 text-sm hover:bg-[#9BAB3C] hover:text-white transition-all duration-300 ${
                        activeRentalIndex === index 
                          ? "bg-[#9BAB3C]/30 text-[#9BAB3C]" 
                          : "text-white"
                      }`}
                      style={{
                        opacity: rentalsDropdownOpen ? 1 : 0,
                        transform: rentalsDropdownOpen
                          ? "translateY(0)"
                          : "translateY(-10px)",
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {rental}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div>
              <Link
                to="/faq"
                className={`relative py-4 px-4 md:hover:text-[#9BAB3C] border-0 transition-colors duration-300
                  ${activePage === "/faq" ? "text-[#9BAB3C] dark:text-[#9BAB3C] dark:border-0" : "text-white"}
                  before:content-[''] before:absolute before:inset-0 before:w-full 
                  before:bg-[#9BAB3C]/20 before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out 
                  before:border-b-[0px] hover:before:border-b-2 before:border-[#9BAB3C]
                  hover:before:scale-x-100`}
              >
                FAQ
              </Link>
            </div>

            {/* Pricing Link */}
            <div>
              <Link
                to="/pricing"
                className={`relative py-4 px-4 md:hover:text-[#9BAB3C] border-0 transition-colors duration-300
                  ${activePage === "/pricing" ? "text-[#9BAB3C] dark:text-[#9BAB3C] dark:border-0" : "text-white"}
                  before:content-[''] before:absolute before:inset-0 before:w-full 
                  before:bg-[#9BAB3C]/20 before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out 
                  before:border-b-[0px] hover:before:border-b-2 before:border-[#9BAB3C]
                  hover:before:scale-x-100`}
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: About and Contact buttons */}
        <div className="flex items-center mr-4 md:mr-0 space-x-4">
          {/* About Link */}
          <Link
            to="/about"
            className={`relative py-4 px-4 md:hover:text-[#9BAB3C] border-0 transition-colors duration-300 hidden md:block
              ${activePage === "/about" ? "text-[#9BAB3C] dark:text-[#9BAB3C] dark:border-0" : "text-white"}
              before:content-[''] before:absolute before:inset-0 before:w-full 
              before:bg-[#9BAB3C]/20 before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out 
              before:border-b-[0px] hover:before:border-b-2 before:border-[#9BAB3C]
              hover:before:scale-x-100`}
          >
            About
          </Link>

          {/* Contact Button */}
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black transition-colors">
              Contact
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:hidden absolute top-full left-0 bg-black/95 mt-2 transition-all duration-300`}
        >
          <ul className="flex flex-col p-4">
            {/* Home Link */}
            <li className="mb-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 ${
                  activePage === "/" ? "text-[#9BAB3C] dark:text-[#9BAB3C]" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown for Mobile */}
            <li className="mb-2">
              <div>
                <button
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setRentalsDropdownOpen(false);
                  }}
                  className={`flex items-center justify-between w-full py-2 px-3 ${
                    isServicesPage ? "text-[#9BAB3C] dark:text-[#9BAB3C]" : "text-white"
                  }`}
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
                
                {/* Display active service name for mobile */}
                {isServicesPage && activeServiceName && !servicesDropdownOpen && (
                  <span className="text-xs text-[#9BAB3C] mt-1 pl-3 block truncate">
                    {activeServiceName}
                  </span>
                )}
              </div>

              <div
                className={`pl-4 mt-2 overflow-hidden transition-all duration-500 ${
                  servicesDropdownOpen
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
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
                    className={`block py-2 text-sm hover:text-[#9BAB3C] ${
                      activeServiceIndex === index 
                        ? "text-[#9BAB3C] bg-[#9BAB3C]/10" 
                        : "text-white"
                    }`}
                    style={{
                      opacity: servicesDropdownOpen ? 1 : 0,
                      transform: servicesDropdownOpen
                        ? "translateY(0)"
                        : "translateY(-10px)",
                      transition: "opacity 300ms, transform 300ms",
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </li>

            {/* Rentals Dropdown for Mobile */}
            <li className="mb-2">
              <div>
                <button
                  onClick={() => {
                    setRentalsDropdownOpen(!rentalsDropdownOpen);
                    setServicesDropdownOpen(false);
                  }}
                  className={`flex items-center justify-between w-full py-2 px-3 ${
                    isRentalsPage ? "text-[#9BAB3C] dark:text-[#9BAB3C]" : "text-white"
                  }`}
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
                
                {/* Display active rental name for mobile */}
                {isRentalsPage && activeRentalName && !rentalsDropdownOpen && (
                  <span className="text-xs text-[#9BAB3C] mt-1 pl-3 block truncate">
                    {activeRentalName}
                  </span>
                )}
              </div>

              <div
                className={`pl-4 mt-2 overflow-hidden transition-all duration-500 ${
                  rentalsDropdownOpen
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
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
                    className={`block py-2 text-sm hover:text-[#9BAB3C] ${
                      activeRentalIndex === index 
                        ? "text-[#9BAB3C] bg-[#9BAB3C]/10" 
                        : "text-white"
                    }`}
                    style={{
                      opacity: rentalsDropdownOpen ? 1 : 0,
                      transform: rentalsDropdownOpen
                        ? "translateY(0)"
                        : "translateY(-10px)",
                      transition: "opacity 300ms, transform 300ms",
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {rental}
                  </Link>
                ))}
              </div>
            </li>

            {/* FAQ Link */}
            <li className="mb-2">
              <Link
                to="/faq"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 ${
                  activePage === "/faq" ? "text-[#9BAB3C] dark:text-[#9BAB3C]" : "text-white"
                }`}
              >
                FAQ
              </Link>
            </li>

            {/* Pricing Link */}
            <li className="mb-2">
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 ${
                  activePage === "/pricing" ? "text-[#9BAB3C] dark:text-[#9BAB3C]" : "text-white"
                }`}
              >
                Pricing
              </Link>
            </li>

            {/* About Link */}
            <li className="mb-2">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 ${
                  activePage === "/about" ? "text-[#9BAB3C] dark:text-[#9BAB3C]" : "text-white"
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}