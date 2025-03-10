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

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (rentalsDropdownRef.current && !rentalsDropdownRef.current.contains(event.target)) {
        setRentalsDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    "Power / Generators"
  ];

  const serviceItems = [
    "Wedding & Corporate Decor",
    "Invitation Cards",
    "Pro-Audio & Visual/Lighting",
    "Home Audio",
    "Sound & Visual Installations",
    "Flex Brand Manufacturing"
  ];

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-black/65">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2">
        {/* Logo */}
        <div className="flex items-center ml-4 md:ml-0">
          <Link to="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <img src="./Group 16.svg" alt="Flex Logo" />
          </Link>
        </div>

        {/* Navigation Menu (Desktop) - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {["Home", "About", "Portfolio", "FAQ"].map((item, index) => {
              const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              return (
                <div key={index}>
                  <Link 
                    to={path}
                    className={`py-2 px-3 md:hover:text-[#9BAB3C] ${
                      activePage === path
                        ? "text-[#9BAB3C] dark:text-[#9BAB3C]"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </Link>
                </div>
              );
            })}
            
            {/* Rentals Dropdown */}
            <div ref={rentalsDropdownRef} className="relative">
              <button
                onClick={() => {
                  setRentalsDropdownOpen(!rentalsDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`py-2 px-3 md:hover:text-[#9BAB3C] flex items-center ${
                  activePage.startsWith('/rentals')
                    ? "text-[#9BAB3C] dark:text-[#9BAB3C]"
                    : "text-white"
                }`}
              >
                Flex Rentals
                <svg 
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${rentalsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`absolute left-0 mt-2 w-72 bg-black/95 border border-gray-700 rounded-md shadow-xl z-30 overflow-hidden transition-all duration-300 ${rentalsDropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-2">
                  {rentalItems.map((rental, index) => (
                    <Link
                      key={index}
                      to={`/rentals/${index + 1}`}
                      onClick={() => setRentalsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-[#9BAB3C] transition-all duration-300"
                      style={{ 
                        opacity: rentalsDropdownOpen ? 1 : 0,
                        transform: rentalsDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                        transitionDelay: `${index * 50}ms` 
                      }}
                    >
                      {rental}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div ref={servicesDropdownRef} className="relative">
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setRentalsDropdownOpen(false);
                }}
                className={`py-2 px-3 md:hover:text-[#9BAB3C] flex items-center ${
                  activePage.startsWith('/services')
                    ? "text-[#9BAB3C] dark:text-[#9BAB3C]"
                    : "text-white"
                }`}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`absolute left-0 mt-2 w-72 bg-black/95 border border-gray-700 rounded-md shadow-xl z-30 overflow-hidden transition-all duration-500 ${servicesDropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-2">
                  {serviceItems.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${index + 1}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-[#9BAB3C] transition-all duration-300"
                      style={{ 
                        opacity: servicesDropdownOpen ? 1 : 0,
                        transform: servicesDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                        transitionDelay: `${index * 50}ms` 
                      }}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex items-center mr-4 md:mr-0">
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
            {["Home", "About", "Portfolio", "FAQ", "DashBoard"].map((item, index) => {
              const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              return (
                <li key={index} className="mb-2">
                  <Link 
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 ${
                      activePage === path
                        ? "text-[#9BAB3C] dark:text-[#9BAB3C]"
                        : "text-white"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
            
            {/* Rentals Dropdown for Mobile */}
            <li className="mb-2">
              <button
                onClick={() => {
                  setRentalsDropdownOpen(!rentalsDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`flex items-center justify-between w-full py-2 px-3 ${
                  activePage.startsWith('/rentals')
                    ? "text-[#9BAB3C] dark:text-[#9BAB3C]"
                    : "text-white"
                }`}
              >
                Flex Rentals
                <svg 
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${rentalsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`pl-4 mt-2 overflow-hidden transition-all duration-500 ${rentalsDropdownOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {rentalItems.map((rental, index) => (
                  <Link
                    key={index}
                    to={`/rentals/${index + 1}`}
                    onClick={() => {
                      setRentalsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                    className="block py-2 text-sm text-white hover:text-[#9BAB3C]"
                    style={{ 
                      opacity: rentalsDropdownOpen ? 1 : 0,
                      transform: rentalsDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                      transition: 'opacity 300ms, transform 300ms',
                      transitionDelay: `${index * 50}ms` 
                    }}
                  >
                    {rental}
                  </Link>
                ))}
              </div>
            </li>
            
            {/* Services Dropdown for Mobile */}
            <li className="mb-2">
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setRentalsDropdownOpen(false);
                }}
                className={`flex items-center justify-between w-full py-2 px-3 ${
                  activePage.startsWith('/services')
                    ? "text-[#9BAB3C] dark:text-[#9BAB3C]"
                    : "text-white"
                }`}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className={`pl-4 mt-2 overflow-hidden transition-all duration-500 ${servicesDropdownOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {serviceItems.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${index + 1}`}
                    onClick={() => {
                      setServicesDropdownOpen(false);
                      setIsOpen(false);
                    }}
                    className="block py-2 text-sm text-white hover:text-[#9BAB3C]"
                    style={{ 
                      opacity: servicesDropdownOpen ? 1 : 0,
                      transform: servicesDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                      transition: 'opacity 300ms, transform 300ms',
                      transitionDelay: `${index * 50}ms` 
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}