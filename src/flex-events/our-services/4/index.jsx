import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import HomeAudioForm from "./components/HomeAudioForm";

function App() {
  // Using images from the public folder
  const heroImage = "/equipment.jpeg";
  const serviceImage = "/equipment.jpeg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury home theater setup"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="absolute bg-gradient-to-r from-[#9BAB3C]/40 to-[#9BAB3C]/0 h-[250px] w-full left-[-50px] lg:w-full lg:left-[-100px] -z-50 " />

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bring the Cinema to Your Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience premium surround sound and immersive entertainment with
            Flex Audio Systems.
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
            Transform Your Home into the Ultimate Entertainment Hub
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're a movie enthusiast, a gamer, or a music lover, Flex
            Events offers high-quality home audio solutions designed for the
            ultimate sound experience. Our advanced audio systems deliver
            crystal-clear, immersive sound tailored to your space and
            preferences. Let us create the perfect atmosphere for your
            entertainment needs.
          </p>
        </div>
      </section>

      {/* Text and Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Home Audio Solutions
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
                      Custom surround sound installation for a true cinematic
                      experience.
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
                      Smart home integration for seamless control of audio
                      settings.
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
                      Expert calibration for optimal sound quality in every
                      room.
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={serviceImage}
                alt="Premium home audio setup"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <HomeAudioForm />

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
