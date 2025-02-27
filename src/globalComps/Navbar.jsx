"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // The active page is always the current location pathname.
  const activePage = location.pathname;

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-black/65">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
        {/* Logo */}
        <div className="flex my-auto mx-auto self-center">

        <Link to="/" className="flex items-center space-x-1 rtl:space-x-reverse">
          <img src="./Group 16.svg" alt="Flex Logo"  />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            FlexEvents
          </span> */}
        </Link>
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="flex-1 flex items-center justify-center md:ml-8">
          <ul className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Portfolio", "FAQ", "DashBoard"].map((item, index) => {
              const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              return (
                <li key={index}>
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
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Button & Hamburger */}
        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black transition-colors">
              Contact
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          } w-full md:hidden absolute top-full left-0 bg-black/95 mt-2`}
        >
          <ul className="flex flex-col p-4">
            {["Home", "About", "Services", "Portfolio", "FAQ"].map((item, index) => {
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
