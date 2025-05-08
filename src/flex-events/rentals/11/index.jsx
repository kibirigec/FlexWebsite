import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";
import BacklineEquipmentForm from "./components/BacklineEquipmentForm";

function App() {
  const heroImage = "/images/backline-hero.jpg";
  const eventImage = "/images/backline1.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Backline Equipment"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div
          className="absolute h-full inset-x-0 md:top-40 lg:top-40 w-full 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto"
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
            Professional Backline Equipment
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl">
            Complete backline solutions for bands, solo artists, and music events
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            Quality Equipment for Every Performance
          </h2>
          <p className="text-[17px]/6 text-[#86868b]">
            From amplifiers to complete drum kits, we provide professional-grade
            backline equipment that ensures your sound is perfect every time.
            Whether you're a touring band or local artist, our equipment meets
            the highest standards.
          </p>
        </div>
      </section>

      {/* Text and Image Section with List */}
      <section className="bg-[#333] text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Left Side - Image */}
            <div className="md:w-1/2">
              <img
                src={eventImage}
                alt="Backline Equipment"
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase">
                Our Backline Solutions
              </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>
                  High-quality amplifiers, guitars, and bass guitars
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>
                  Complete drum kits and percussion equipment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>
                  Delivery and setup services included
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>
                  Technical support and maintenance provided
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>
                  Flexible rental terms for any event duration
                </li>
              </ul>
            </div>
          </div>
        </div>
      <div className="min-h-[2px] mx-auto md:mb-20 mt-16 relative">
        <motion.div 
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#9BAB3C_50%,transparent_100%)] bg-[length:200%_100%]"
        />
      </div>
      </section>


      <BacklineEquipmentForm />

      <HoverLink />
      <Footer3 />
    </div>
  );
}

export default App; 