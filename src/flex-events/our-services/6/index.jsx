// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";

function App() {
  // Using images from the public folder
  const heroImage = "/images/flex-print-hero.jpg";
  const serviceImage = "/images/flex-print-services.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Custom flex branding"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="absolute bg-gradient-to-r from-[#9BAB3C]/40 to-[#9BAB3C]/0 h-[250px] w-full left-[-50px] lg:w-full lg:left-[-100px] -z-50 " />

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Boost Your Brand Presence with Custom Flex Prints
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            High-quality, durable branding solutions designed to make an impact.
          </p>
          <Link to="/contact">
            <button className=" px-4 py-2 text-white border-white border-1 ">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Make Your Brand Stand Out with Custom Flex Prints
          </h2>
          <p className="text-lg text-gray-600">
            In today’s crowded marketplace, visibility is everything. At **Flex
            Events**, we specialize in **custom flex brand manufacturing**,
            delivering eye-catching banners, signage, and displays that make
            your brand unforgettable. Whether you're promoting a product,
            decorating your storefront, or making an impact at events, our
            high-quality prints ensure you stand out.
          </p>
        </div>
      </section>

      {/* Text and Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Flex Branding Services
              </h2>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C]  mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      High-quality flex banners with vibrant colors and sharp
                      graphics.
                    </h3>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C]  mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Custom signage for storefronts, offices, and event
                      promotions.
                    </h3>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C]  mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Large-scale event displays, backdrops, and promotional
                      setups.
                    </h3>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C] mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Custom wall wraps to transform your business space or
                      interior.
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={serviceImage}
                alt="Custom flex prints and branding"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
