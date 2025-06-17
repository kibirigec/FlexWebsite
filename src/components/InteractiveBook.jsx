import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

export const InteractiveBook = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleDownload = () => {
    // Create a link to the PDF file
    const link = document.createElement('a');
    link.href = '/portfolio-book.pdf'; // You'll need to add this PDF to your public folder
    link.download = 'FLEX-Portfolio-Book.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    try {
      // Check if the Web Share API is available (mobile devices)
      if (navigator.share) {
        await navigator.share({
          title: 'FLEX Interactive Portfolio Book',
          text: 'Check out this interactive 3D portfolio book!',
          url: url,
        });
      } else {
        // Fallback for desktop: copy to clipboard
        await navigator.clipboard.writeText(url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

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
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF Version
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {showCopied ? 'Copied!' : 'Share Book'}
            </button>
          </div>
        </div>
        
        {/* 
          Container height controls the overall size of the book viewport
          Adjust h-[600px] to make the container taller or shorter
        */}
        <div className="h-[600px] w-full relative">
          <UI />
          <Canvas
            shadows
            camera={{
              // Camera position controls the view of the book
              // x: left/right position (-0.5 is slightly left of center)
              // y: up/down position (1 is slightly above center)
              // z: distance from book (lower = closer, higher = further)
              // Adjust these values to change the book's position and size
              position: [-0.5, 1, 4.5], // Changed from 4 to 3 to make book appear larger
              fov: 45, // Field of view - lower = more zoomed in, higher = more zoomed out
              near: 0.1, // Closest visible distance
              far: 1000 // Furthest visible distance
            }}
            gl={{
              antialias: true, // Smooths edges
              alpha: true, // Allows transparency
              powerPreference: "high-performance" // Uses high-performance GPU mode
            }}
          >
            <color attach="background" args={["#f3f4f6"]} />
            <fog attach="fog" args={["#f3f4f6", 5, 20]} />
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
      </div>
    </section>
  );
}; 