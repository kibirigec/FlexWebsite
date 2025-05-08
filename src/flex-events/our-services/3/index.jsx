//

// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import AudioVisualLightingForm from "./components/AudioVisualLightingForm";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";

function App() {
  // Using images from the public folder
  const heroImage = "/night-lights.jpeg";
  const serviceImage = "/night-lights.jpeg";

  return (
    <div className=" min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="py-12 relative bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Event audio-visual setup"
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
        {/* Green Gradient Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
            Pro-Audio & Visual/Lighting
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl">
            Elevate your event with cutting-edge audio, visuals, and lighting
            solutions.
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
            Our Audio-Visual & Lighting Services
          </h2>
          <p className="text-[17px]/6 text-[#86868b] text-start">
            At Flex Events, we know that a great event is more than just
            decor—it’s about setting the right mood. With our state-of-the-art
            sound, lighting, and visual solutions, we ensure that every moment
            is immersive. From high-energy concerts to corporate events, we
            create experiences that engage, excite, and leave a lasting impact.
          </p>
        </div>
      </section>

      {/* Text and Image Section */}
      <section className="bg-[#333] text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Left Side - Image */}
            <div className="md:w-1/2">
              <img
                src="/night-lights.jpeg"
                alt="Service feature"
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase">
                Our Decor Services
              </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Professional-grade
                  sound systems for clear, dynamic audio.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Stunning LED screens
                  and projections for a visually captivating event.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Intelligent lighting
                  systems to create the perfect ambiance.
                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Unique corporate
                  branding elements for business events.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div 
          className="min-h-[2px] mx-auto md:mb-20 hidden-sm mt-16 relative"
        >
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

      <section className="bg-[#333] py-6 md:px-28 mx-auto ">
        <AudioVisualLightingForm />
      </section>

      <HoverLink />
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
