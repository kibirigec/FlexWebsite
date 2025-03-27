"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../../../hooks/useFadeIn";

export function Header5() {
  useFadeIn();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentText, setCurrentText] = useState("Weddings");
  const [animating, setAnimating] = useState(false);
  const images = [
    "/weddingmain.jpeg",
    "/night-lights.jpeg",
    "/wedding-decor.jpeg",
    "/jameson-pov.jpeg",
    "/stages3.jpg",
    "/experential.jpg",
  ];
  const texts = [
    "Weddings",
    "Visuals",
    "Decor",
    "Sounds",
    "Stage Setups",
    "Experientials",
  ];
  const intervalRef = useRef(null);
  const animationDuration = 3000; // 3 seconds per image

  // Function to change slide
  const changeSlide = (direction) => {
    // Stop the current interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setAnimating(true);
    setTimeout(() => {
      // Calculate new index based on direction
      const newIndex = 
        direction === 'next' 
          ? (currentImageIndex + 1) % images.length
          : (currentImageIndex - 1 + images.length) % images.length;

      setCurrentImageIndex(newIndex);
      setCurrentText(texts[newIndex]);
      setAnimating(false);

      // Restart the interval
      startAutoSlide();
    }, 500);
  };

  // Function to start auto-sliding
  const startAutoSlide = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start a new interval
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setCurrentText((prev) => {
          const currentIndex = texts.indexOf(prev);
          return texts[(currentIndex + 1) % texts.length];
        });
        setAnimating(false);
      }, 500);
    }, animationDuration);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-12 text-white">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Creating Memorable
            <div className="h-20 overflow-hidden">
              <div
                className={`${
                  animating ? "text-animate-out" : "text-animate-in"
                }`}
              >
                <span className="inline-block">{currentText}</span>
              </div>
            </div>
          </h1>
        </div>

        <p className="mb-10 max-w-lg text-center text-lg md:text-xl">
          Let's make unforgettable experiences for your special occasion.
        </p>

        <div className="flex gap-6">
          <Link to="/contact">
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              className="px-6 py-3 text-lg"
            >
              Get a Quote{" "}
            </Button>
          </Link>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            className="px-6 py-3 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Segmented progress bar like in the image */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-8 md:px-12">
        <div className="flex w-full max-w-5xl justify-between items-center">
          <button 
            onClick={() => changeSlide('prev')} 
            className="text-white opacity-70 hover:opacity-100 transition-opacity px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>

          {images.map((_, index) => (
            <div
              key={index}
              className="relative h-[3px] flex-1 bg-[#9BAB3C]/30 mx-2"
            >
              {index < currentImageIndex && (
                <div className="absolute inset-0 bg-[#9BAB3C]" />
              )}
              {index === currentImageIndex && (
                <div
                  className="absolute inset-0 bg-[#9BAB3C] origin-left"
                  style={{
                    animation: `progress ${animationDuration}ms linear forwards`,
                  }}
                />
              )}
            </div>
          ))}

          <button 
            onClick={() => changeSlide('next')} 
            className="text-white opacity-70 hover:opacity-100 transition-opacity px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M14 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom CSS for text animation */}
      <style jsx>{`
        .text-animate-in {
          animation: slideUp 0.5s ease-out forwards;
        }

        .text-animate-out {
          animation: slideOut 0.5s ease-in forwards;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}