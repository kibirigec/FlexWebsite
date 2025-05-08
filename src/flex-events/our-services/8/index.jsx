import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";

function App() {
  const heroImage = "/images/backline-hero.jpg";

  const serviceSections = [
    {
      title: "Professional Backline Equipment",
      features: [
        "High-quality amplifiers, guitars, bass guitars, and drum kits for professional performances.",
        "Well-maintained equipment from top brands ensuring reliable sound quality.",
        "Complete backline solutions for bands, solo artists, and music events.",
      ],
      image: "/images/backline1.jpg",
    },
    {
      title: "Flexible Rental Options",
      features: [
        "Short-term and long-term rental options available.",
        "Delivery and setup services for your convenience.",
        "Technical support and maintenance included with rentals.",
      ],
      image: "/images/backline2.jpg",
    },
    {
      title: "Quality You Can Trust",
      features: [
        "Regular maintenance and quality checks on all equipment.",
        "Backup equipment available for peace of mind.",
        "Professional-grade gear suitable for any venue size.",
      ],
      image: "/images/backline3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Flex Backline Equipment"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Gradient (Fixed Height) */}
        <div
          className="absolute h-full inset-x-0 md:top-40 lg:top-40 w-full 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto"
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
            Professional Backline Equipment
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl">
            Elevate your performance with our premium backline equipment rentals.
            From amplifiers to complete drum kits, we provide the tools you need
            for an outstanding show.
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
            Complete Backline Solutions for Every Performance
          </h2>
          <p className="text-[17px]/6 text-[#86868b] text-start">
            Whether you're a touring band, local artist, or event organizer, our
            comprehensive backline equipment ensures your sound is perfect every
            time. We provide everything from individual instruments to complete
            stage setups, all maintained to the highest standards.
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
              <div className={`md:w-1/2 space-y-6`}>
                <h2
                  className={`text-[24px]/6 md:text-[30px]/8 font-bold ${
                    index == 1 ? "text-[#1D1D1F]" : ""
                  } uppercase`}
                >
                  {section.title}
                </h2>

                <div className="h-1 w-24 bg-[#9BAB3C]"></div>

                <ul
                  className={`space-y-1 text-[17px]/5 ${
                    index == 1 ? "text-[#86868b]" : "text-[#E0E0E0]"
                  }`}
                >
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

      <section className="bg-[#333] py-6 md:px-28 mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Ready to Elevate Your Performance?
          </h2>
          <p className="text-white text-center mb-8">
            Contact us to discuss your backline equipment needs and get a custom quote.
          </p>
          <div className="text-center">
            <Link to="/contact">
              <button className="px-6 py-3 bg-[#9BAB3C] text-white hover:bg-[#869433] transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <HoverLink />
      <Footer3 />
    </div>
  );
}

export default App; 