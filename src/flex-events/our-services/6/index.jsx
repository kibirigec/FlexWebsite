// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import BrandManufacturingForm from "./components/BrandManufacturingForm";

function App() {
  const heroImage = "/audio1.jpg";
  const serviceImage = "/audio2.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Premium Audio Solutions"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience Unmatched Audio Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            High-performance, customized loudspeakers designed for exceptional sound clarity and durability.
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border-white border-1 ">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Professional Audio Solutions Tailored for You
          </h2>
          <p className="text-lg text-gray-600">
            At <strong>Flex Audio</strong>, we engineer custom loudspeakers and audio systems trusted by professionals worldwide. Whether for a nightclub, lounge, event, or place of worship, our premium-quality sound systems ensure superior clarity and durability.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Why Choose Flex Audio?
              </h2>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#9BAB3C] font-bold mr-2">✔</span>
                  <span className="text-lg font-medium text-gray-800">
                    Industry-recognized sound systems used in concerts, festivals, and touring setups.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BAB3C] font-bold mr-2">✔</span>
                  <span className="text-lg font-medium text-gray-800">
                    Custom-built loudspeakers tailored to your unique audio needs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BAB3C] font-bold mr-2">✔</span>
                  <span className="text-lg font-medium text-gray-800">
                    Designed for durability, ensuring long-lasting and high-quality performance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9BAB3C] font-bold mr-2">✔</span>
                  <span className="text-lg font-medium text-gray-800">
                    Proven track record in venues ranging from nightclubs to worship spaces.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={serviceImage}
                alt="High-quality Audio Systems"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <BrandManufacturingForm />

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;