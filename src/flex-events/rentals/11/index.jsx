import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";
import BacklineEquipmentForm from "./components/BacklineEquipmentForm";

function App() {
  const heroImage = "/concertt.jpeg";
  const eventImage = "/equipment.jpeg";

  const serviceSections = [
    {
      title: "Professional Backline Equipment",
      features: [
        "High-quality amplifiers, guitars, bass guitars, and drum kits for professional performances.",
        "Well-maintained equipment from top brands ensuring reliable sound quality.",
        "Complete backline solutions for bands, solo artists, and music events.",
      ],
      image: "/equipment.jpeg",
    },
    {
      title: "Flexible Rental Options",
      features: [
        "Short-term and long-term rental options available.",
        "Delivery and setup services for your convenience.",
        "Technical support and maintenance included with rentals.",
      ],
      image: "/concert.jpeg",
    },
    {
      title: "Quality You Can Trust",
      features: [
        "Regular maintenance and quality checks on all equipment.",
        "Backup equipment available for peace of mind.",
        "Professional-grade gear suitable for any venue size.",
      ],
      image: "/concert3.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen md:h-auto flex flex-col justify-end md:block bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Backline Equipment"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30" />
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
            Professional Backline Equipment
          </h1>
          <p className="text-[17px]/6 md:text-xl text-white/90 mb-4 md:mb-8 max-w-2xl font-light">
            Complete backline solutions for bands, solo artists, and music events
          </p>
          <Link to="/contact">
            <button className="px-8 py-3  text-white hover:bg-[#869433] transition-colors border border-white  font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl/7 md:text-4xl font-bold mb-6 text-[#1d1d1f]">
            Quality Equipment for Every Performance
          </h2>
          <p className="text-[17px]/6 text-[#86868b] leading-relaxed">
            From amplifiers to complete drum kits, we provide professional-grade
            backline equipment that ensures your sound is perfect every time.
            Whether you're a touring band or local artist, our equipment meets
            the highest standards.
          </p>
        </div>
      </section>

      {/* Dynamic Sections with Alternating Layout */}
      {serviceSections.map((section, index) => (
        <section
          key={index}
          className={`bg-[#333] text-white py-20 ${
            index == 1 ? "bg-[#F2F2F2]" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side - Image */}
              <div className="md:w-1/2">
                <img
                  src={section.image}
                  alt={`${section.title} setup`}
                  className="w-full aspect-[16/9] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className={`md:w-1/2 space-y-6`}>
                <h2
                  className={`text-3xl md:text-4xl font-bold ${
                    index == 1 ? "text-[#1D1D1F]" : "text-white"
                  }`}
                >
                  {section.title}
                </h2>

                <div className="h-1 w-24 bg-[#9BAB3C]"></div>

                <ul
                  className={`space-y-3 text-lg ${
                    index == 1 ? "text-[#86868b]" : "text-[#E0E0E0]"
                  }`}
                >
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#9BAB3C] text-xl">•</span> {feature}
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

      <section className="bg-[#333] py-12 md:px-6 mx-auto">
         <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Book Your Equipment
             </h2>
             <BacklineEquipmentForm />
         </div>
      </section>

      <HoverLink />
      <Footer3 />
    </div>
  );
}

export default App; 