// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import DLPProjectorsAndScreensForm from "./components/DLPProjectorsAndScreensForm";
function App() {
  // Using images from the public folder
  const heroImage = "/alex-litvin-MAYsdoYpGuk-unsplash.jpg";
  const eventImage = "/alex-litvin-MAYsdoYpGuk-unsplash.jpg";

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

        <div
          className="absolute  h-full inset-x-0 md:top-40 lg:top-40 w-full 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto
                  "
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
          DLP Projectors & Screens
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl">
          Clear Presentations with DLP Projectors & Screens

</p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            We Create Experiences That Last a Lifetime
          </h2>
          <p className="text-[17px]/6 text-[#86868b] ">
            Deliver flawless presentations with our DLP Projectors & Screens.
            Whether for a corporate seminar, wedding video, or educational
            session, we ensure your visuals are crystal clear.
          </p>
        </div>
      </section>

      {/* Text and Image Section */}
      {/* Text and Image Section with List */}
      <section className="bg-[#333] text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Left Side - Image */}
            <div className="md:w-1/2">
              <img
                src={eventImage}
                alt="Service feature"
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase">
              Our LED Solutions
              </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Sharp, vivid images with DLP technology.



                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Available in multiple sizes to fit your venue.



                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Quick setup and high-quality service at affordable prices.

                </li> */}
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Pay easily via Mobile Money, Visa, or PayPal, and have your event shine!

                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Unique corporate
                  branding elements for business events.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <DLPProjectorsAndScreensForm />
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
