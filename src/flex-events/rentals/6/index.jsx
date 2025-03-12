// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";

function App() {
  // Using images from the public folder
  const heroImage = "/images/hero-image.jpg";
  const eventImage = "/images/event-image.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold text-[#9BAB3C]">Eventique</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#9BAB3C] transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#9BAB3C] transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-[#9BAB3C] transition">Gallery</a>
            <a href="#" className="text-gray-600 hover:text-[#9BAB3C] transition">About</a>
            <a href="#" className="text-gray-600 hover:text-[#9BAB3C] transition">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Event backdrop"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {/* Crafting Unforgettable<br />Moments Together */}
            Karaoke Mics / KTv Machines
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Sing Your Heart Out with Karaoke Mics & KTV Machines{" "}
          </p>
          <button className=" px-4 py-2 text-white border-white border-1 ">
            Get Started
          </button>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            We Create Experiences That Last a Lifetime
          </h2>
          <p className="text-lg text-gray-600">
            Make your event unforgettable with Karaoke Mics & KTV Machines!
            Whether it's a birthday, corporate event, or casual gathering, our
            karaoke systems add fun and excitement.{" "}
          </p>
        </div>
      </section>

      {/* Text and Image Section */}
      {/* Text and Image Section with List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Karaoke Solutions
              </h2>

              <ul className="space-y-4 mb-6">
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
                    	Easy-to-use equipment for all skill levels.                    </h3>
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
                    	Affordable rental packages to suit every event size.
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
                	No more boring parties—let the fun begin!
Book today and pay through your preferred method (Mobile Money, PayPal, etc.).

                    </h3>
                  </div>
                </li>
              </ul>

              {/* <button className="bg-white border border-[#9BAB3C] text-[#9BAB3C] hover:bg-[#9BAB3C] hover:text-white px-6 py-3 rounded-full text-base font-medium transition">
                View All Services
              </button> */}
            </div>
            <div className="md:w-1/2">
              <img
                src={eventImage}
                alt="Sound system setup"
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
