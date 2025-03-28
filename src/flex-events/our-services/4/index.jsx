import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import HomeAudioForm from "./components/HomeAudioForm";
import HoverLink from "../../../globalComps/HoverLink";

function App() {
  const heroImage = "/hero1.jpg";

  const serviceSections = [
    {
      title: "Powerful Sound for Small Spaces",
      features: [
        "Crystal-clear audio tailored for home entertainment, garden parties, and small venues.",
        "Rich bass, clear treble, and balanced midrange—perfect for music, movies, and karaoke.",
        "Compact yet powerful audio systems designed to enhance your space with immersive sound.",
      ],
      image: "/home1.jpg",
    },
    {
      title: "Seamless & Portable Setup",
      features: [
        "Lightweight and easy to transport—set up your sound system anywhere in minutes.",
        "Wireless and Bluetooth-enabled for seamless audio streaming.",
        "User-friendly controls for effortless sound customization.",
      ],
      image: "/home2.jpg",
    },
    {
      title: "Premium Sound Without the Premium Price",
      features: [
        "High-quality audio at budget-friendly prices—experience professional sound without breaking the bank.",
        "Perfect for karaoke nights, intimate home gatherings, and small venue events.",
        "Designed to bring a professional audio experience to any personal or social setting.",
      ],
      image: "/home3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Flex Home Audio Setup"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Green Gradient - Full Width & Covers Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9BAB3C]/50 to-transparent w-full my-auto h-[50vh] z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Small Spaces, Crystal-Clear Sound
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Elevate your home gatherings with Flex Home Audio—perfect for
            karaoke nights, small garden parties, and immersive home
            entertainment.
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border-white border-1">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Bring the Party Home with Flex Audio
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're hosting a backyard BBQ, singing along to your
            favorite tunes, or setting the mood for a cozy movie night, our
            advanced audio systems deliver premium sound quality for any
            occasion. Experience sound that fills the room and elevates every
            moment.
          </p>
        </div>
      </section>

      {/* Dynamic Sections with Alternating Layout */}
      {serviceSections.map((section, index) => (
        <section
          key={index}
          className={`py-20 ${index === 1 ? "bg-[#fafafa]" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col md:flex-row items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  {section.title}
                </h2>

                <ul className="space-y-4 mb-6">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
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
                          {feature}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 h-[400px]">
                <img
                  src={section.image}
                  alt={`${section.title} setup`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="bg-[#828282] py-6">
        <HomeAudioForm />

      </section>

        <HoverLink />
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
