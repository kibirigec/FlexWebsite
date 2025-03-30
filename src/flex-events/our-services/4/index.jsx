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
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Flex Home Audio Setup"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#9BAB3C]/50 to-transparent w-full h-[50vh] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-2 leading-tight">
            Small Spaces, Crystal-Clear Sound
          </h1>
          <p className="text-[17px] mb-8 max-w-2xl">
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
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px] md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            Bring the Party Home with Flex Audio
          </h2>
          <p className="text-[17px] text-[#86868b]">
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
          className={`bg-[#333] text-white py-16 ${
            index == 1 ? "bg-[#F2F2F2]" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2">
                <img
                  src={section.image}
                  alt={`${section.title} setup`}
                  className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Content */}
              <div className={`md:w-1/2 space-y-6 `}>
                <h2 className= {`text-[24px]/6 md:text-[30px]/8 font-bold ${ index == 1 ? "text-[#1D1D1F]" : ""} uppercase`}>
                  {section.title}
                </h2>

                <div className="h-1 w-24 bg-[#9BAB3C]"></div>

                <ul className={`space-y-1  text-[17px]/5 ${ index ==1 ? "text-[#86868b]" : "text-[#E0E0E0]"} `}>
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#9BAB3C]">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#333] py-6 md:px-28 mx-auto ">
        <div className="bg-[#9BAB3C] min-h-[2px] mx-auto w-full md:mb-20 hidden-sm" />
        <HomeAudioForm />
      </section>

      <HoverLink />
      <Footer3 />
    </div>
  );
}

export default App;
