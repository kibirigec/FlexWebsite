import React, { useState, useEffect, useRef } from "react";
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
  const [isInteracting, setIsInteracting] = useState(false);
  const isMobile = !isMdOrLg;
  const bookRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdOrLg(window.innerWidth >= 768); // md breakpoint is 768px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-disable interaction when scrolling away
  useEffect(() => {
    if (!bookRef.current || !isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isInteracting) {
            setIsInteracting(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when only 10% is visible (scrolled away)
    );

    observer.observe(bookRef.current);

    return () => {
      if (bookRef.current) observer.unobserve(bookRef.current);
    };
  }, [isMobile, isInteracting]);

  return (
    <section className="py-16 bg-white">
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
              className="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-md text-black  hover:bg-[#869433] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9BAB3C] transition-colors duration-200"
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
        <div ref={bookRef} className="relative w-full">
          {/* Mobile Overlay - Tap to Interact */}
          {isMobile && !isInteracting && (
            <div 
              onClick={() => setIsInteracting(true)}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition-colors cursor-pointer rounded-xl h-[600px]"
            >
              <div className=" p-4 rounded-full shadow-lg mb-3 transform transition-transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000000" id="Hand-Tap--Streamline-Phosphor" height="32" width="32">
                  <desc>Hand Tap Streamline Icon: https://streamlinehq.com</desc>
                  <path d="M2.7847 4.50681875c0.00126875 -3.34618125 3.6244125 -5.436175 6.52165625 -3.76198125 1.3436 0.77640625 2.17139375 2.21019375 2.17198125 3.76198125 0 0.4461625 -0.482975 0.72500625 -0.8693625 0.50193125 -0.17931875 -0.10353125 -0.2897875 -0.29486875 -0.2897875 -0.50193125 0 -2.45386875 -2.6563875 -3.98753125 -4.7815 -2.7606 -0.98626875 0.569425 -1.5938375 1.62175625 -1.5938375 2.7606 0 0.4461625 -0.48298125 0.72500625 -0.8693625 0.50193125 -0.179325 -0.10353125 -0.2897875 -0.29486875 -0.2897875 -0.50193125Zm10.14258125 3.18766875c-0.33809375 -0.00036875 -0.67088125 0.084075 -0.96789375 0.2456 -0.37665625 -1.16558125 -1.69255625 -1.7339625 -2.79935 -1.20914375v-2.224125c0 -1.56155 -1.69043125 -2.53751875 -3.042775 -1.75674375 -0.627625 0.36235625 -1.0142625 1.032025 -1.0142625 1.75674375v5.7957625l-0.27674375 -0.4441c-0.78551875 -1.34990625 -2.73778125 -1.34325 -3.514075 0.01198125 -0.36028125 0.6289625 -0.35764375 1.40235625 0.0069125 2.02885l2.12415 3.62235c0.2011 0.39826875 0.757925 0.42948125 1.00228125 0.05619375 0.1271125 -0.1941875 0.126125 -0.44548125 -0.0025125 -0.6386625l-2.121975 -3.62235c-0.3452 -0.57334375 0.0597125 -1.3053625 0.7288375 -1.31764375 0.32190625 -0.0059125 0.62071875 0.166575 0.7766125 0.448275l0.01014375 0.0166625 1.35330625 2.1734125c0.235025 0.3792375 0.79245 0.3618375 1.00336875 -0.03131875 0.04538125 -0.08459375 0.0690375 -0.1791375 0.06885 -0.27513125V4.50681875c0.00056875 -0.6692375 0.72539375 -1.08689375 1.30468125 -0.75178125 0.2684 0.15525625 0.43378125 0.44171875 0.43404375 0.75178125v4.9264c0 0.44615625 0.48298125 0.72500625 0.86936875 0.501925 0.17931875 -0.10353125 0.2897875 -0.2948625 0.2897875 -0.501925v-0.8693625c0.00056875 -0.6692375 0.7253875 -1.0869 1.30468125 -0.7517875 0.26839375 0.1552625 0.43378125 0.44171875 0.43404375 0.7517875v1.4489375c0 0.44615625 0.48298125 0.72500625 0.86936875 0.50193125 0.17931875 -0.10353125 0.2897875 -0.29486875 0.2897875 -0.50193125v-0.2897875c0.0005625 -0.6692375 0.7253875 -1.08689375 1.30468125 -0.7517875 0.26839375 0.1552625 0.43378125 0.44171875 0.43404375 0.7517875v2.60809375c0 1.56558125 -0.514375 2.629825 -0.51871875 2.63851875 -0.142975 0.2862875 -0.02686875 0.63426875 0.2593625 0.77735625 0.0804 0.04065625 0.1692625 0.06175625 0.25935625 0.06158125 0.2196125 0.00015625 0.42044375 -0.123825 0.518725 -0.32021875 0.0268 -0.05288125 0.64115625 -1.30404375 0.64115625 -3.1572375v-2.60809375c0 -1.1206 -0.90864375 -2.02891875 -2.02924375 -2.02851875Z" strokeWidth="0.0625"></path>
                </svg>
              </div>
              <span className="font-semibold text-black bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                Tap to Interact
              </span>
            </div>
          )}

          {/* Mobile Exit Interaction Button */}
          {isMobile && isInteracting && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsInteracting(false);
              }}
              className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white text-gray-800 transition-all border border-gray-200"
              aria-label="Exit interaction"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Canvas Container */}
          <div 
            className={`h-[600px] w-full relative transition-opacity duration-300 ${
              isMobile && !isInteracting ? "pointer-events-none opacity-50" : "pointer-events-auto opacity-100"
            }`}
          >
            <Canvas
              shadows
              camera={{
                position: isMdOrLg ? [-0.7, 1, 2.5] : [-0.7, 1, 6],
                fov: 45,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}
              style={{ touchAction: 'pan-y' }}
            >
              <color attach="background" args={["#fbfbfb"]} />
              <fog attach="fog" args={["#fbfbfb", 5, 20]} />
              <Suspense fallback={null}>
                <Experience isMobile={isMobile} />
              </Suspense>
            </Canvas>
            <Loader />
          </div>
        </div>

        <div className={`flex justify-center mt-4 gap-4 transition-all duration-500 transform ${
          isMobile && !isInteracting 
            ? "opacity-0 blur-sm pointer-events-none translate-y-4" 
            : "opacity-100 blur-0 translate-y-0"
        }`}>
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className="px-6 py-2 border-2 border-black   text-black bg-transparent rounded-full hover:bg-black hover:text-white transition-colors font-medium"
          >
            ← Back
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, pages.length))}
            className="px-6 py-2 border-2 border-black text-black bg-transparent rounded-full hover:bg-black hover:text-white transition-colors font-medium"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}; 