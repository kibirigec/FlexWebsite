// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PowerGeneratorsForm from "./components/PowerGeneratorsForm";

function App() {
  // Using images from the public folder
  const heroImage = "/GEN2-C-01.jpg";
  const eventImage = "/GEN2-C-01.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative h-[100dvh] md:h-auto flex flex-col justify-end md:block bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Event backdrop"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div
          className="absolute h-full inset-x-0 md:top-40 lg:top-40 w-full hidden md:block 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto
                  "
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:py-48 w-full">
          <h1 className="text-3xl leading-tight md:text-[32px] lg:text-[40px] font-bold mb-2 text-white">
            Power & Generators
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl text-white">
            Ensure Uninterrupted Power with Our Reliable Generators
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      {/* Centered Text Section */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            Unlimited Power | Unlimited Possibilites{" "}
          </h2>
          <p className="text-[17px]/6 text-[#86868b] ">
            From luxurious wedding decorations to professional corporate event
            setups, we offer stunning decor that transforms any venue into a
            beautiful, memorable space.
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
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase text-white">
              Our Power Solutions
              </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Affordable rates for peace of mind.

                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Available in various sizes to suit your event’s needs.

                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Quick setup and high-quality service at affordable prices.

                </li> */}
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Fully maintained and ready to go for any event.

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
      <PowerGeneratorsForm />
      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
