import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { pageAtom, pages } from "./UI";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

export const InteractiveBook = () => {
  const [isMdOrLg, setIsMdOrLg] = useState(false);
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdOrLg(window.innerWidth >= 768); // md breakpoint is 768px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Portfolio Book
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Explore our work in an immersive 3D flip book experience. Click and drag to interact, 
            or use the controls to navigate through our portfolio.
          </p>
          <div className="flex justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#9BAB3C] hover:bg-[#869433] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9BAB3C] transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Full Portfolio
            </Link>
          </div>
        </div>
        
        {/* 
          Container height controls the overall size of the book viewport
          Adjust h-[600px] to make the container taller or shorter
        */}
        <div className="h-[600px] w-full relative" style={{touchAction: 'pan-y'}}>
          <UI />
          <Canvas
            shadows
            camera={{
              // Camera position controls the view of the book
              // x: left/right position (-0.5 is slightly left of center)
              // y: up/down position (1 is slightly above center)
              // z: distance from book (lower = closer, higher = further)
              // Responsive positioning: closer on md/lg screens for bigger book, further on mobile
              position: isMdOrLg ? [-0.7, 1, 2.5] : [-0.7, 1, 6], // Wider book, closer on desktop, further on mobile
              fov: 45, // Field of view - lower = more zoomed in, higher = more zoomed out
              near: 0.1, // Closest visible distance
              far: 1000 // Furthest visible distance
            }}
            gl={{
              antialias: true, // Smooths edges
              alpha: true, // Allows transparency
              powerPreference: "high-performance" // Uses high-performance GPU mode
            }}
            style={{touchAction: 'none'}} // Let container handle touch actions
          >
            <color attach="background" args={["#f3f4f6"]} />
            <fog attach="fog" args={["#f3f4f6", 5, 20]} />
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
        {/* TEMPORARY: Next/Back buttons for page navigation */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, pages.length))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}; 