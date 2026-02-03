import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PASystemAndDiscoForm from "./PASystemAndDiscoForm";

function App() {
  // Using images from the public folder
  const heroImage = "/linerary two speakers.jpeg";
  const eventImage = "/linerary two speakers.jpeg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative h-screen md:h-auto flex flex-col justify-end md:block bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Event backdrop"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Green Gradient Overlay */}
        <div
          className="absolute h-full inset-x-0 md:top-40 lg:top-40 w-full hidden md:block 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto
                  "
        ></div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:py-48 w-full">
          <h1 className="text-3xl/7 leading-tight md:text-[32px] lg:text-[40px] font-bold mb-2 text-white">
          P.A System & Music/Mobile Disco
          </h1>
          <p className="text-[17px]/6 mb-4 md:mb-8 max-w-2xl text-white">
          Bring the Party to Life with Our P.A. System & Mobile Disco

</p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-6 text-[#1d1d1f] tracking-tight">
            We Create Experiences That Last a Lifetime
          </h2>
          <p className="text-[17px]/6 text-[#86868b] leading-relaxed">
            Whether you're hosting a small gathering or a large event, our P.A.
            Systems and Mobile Disco setups will deliver clear, audible and
            powerful sound that gets everyone in the mood. Perfect for parties,
            Weddings, Introductions, Kuhingira, Conferences, or Outdoor events,
            including bar/club sound reinforcement.
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
                src={eventImage}
                alt="Service feature"
                className="w-full aspect-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase text-white">
Our P.A Solutions             </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Affordable, high-quality sound systems that cater to any size event.

                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Choose from a variety of setups tailored to your needs: from intimate gatherings to large parties
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>We provide expert technicians for quick setup and perfect sound tuning.

                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> No hidden fees – just simple, transparent pricing with multiple payment methods like Cash, PayPal, Visa, or Mobile Money for your convenience.

                </li>
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

      {/* Booking Form */}
      <section className="bg-white py-6 md:px-28 mx-auto ">
        <PASystemAndDiscoForm />
      </section>

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
