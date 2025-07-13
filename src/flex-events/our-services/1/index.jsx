import React, { useState } from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import FullEventPlanningForm from "./components/FullEventPlanningForm";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";

function App() {
  const heroImage = "/images/event-planning-hero.jpg";

  // Accordion State
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // Event Services Data
  const eventServices = [
    {
      title: "Event Concept Design & Development",
      description:
        "We start by truly understanding your goals and vision for the event. Our creative team works closely with you to craft a concept that is innovative and tailored to your objectives. Whether it's a corporate conference with a professional tone or a personalized celebration, we ensure your event tells a compelling story.",
    },
    {
      title: "Event Planning & Vendor Sourcing",
      description:
        "At Flex Events, we handle everything from sourcing top-quality vendors to managing contracts and ensuring seamless coordination. Even if a service is beyond our scope, we take care of it by finding the right vendor, negotiating rates, and handling all logistics.",
    },
    {
      title: "Event Theming & Branding",
      description:
        "A well-branded event creates a lasting impact. We develop cohesive themes integrating decor, branding, and ambiance to reflect your identity. Whether it's a corporate brand launch or a themed gala, we ensure a visually stunning experience.",
    },
    {
      title: "Event Activations",
      description:
        "We specialize in creating engaging experiences, from live demonstrations to immersive brand activations. Our interactive approach captivates guests and transforms ordinary events into unforgettable experiences.",
    },
    {
      title: "Event Setup & Execution",
      description:
        "On the big day, we oversee logistics—from coordinating deliveries to ensuring all vendors are in place. Our team supervises the setup, manages event flow, and handles troubleshooting, allowing you to enjoy a flawless event.",
    },
    {
      title: "Venue & VIP Experience Coordination",
      description:
        "We ensure every aspect of the venue is prepped, from space layout to VIP guest experience. Whether it's a high-profile event or an intimate gathering, we curate a premium experience for all attendees.",
    },
    {
      title: "Event Vendor Management",
      description:
        "As the central point of contact for vendors, we manage schedules, contracts, and quality control. Our expert coordination ensures all service providers work seamlessly together, letting you focus on your guests.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black">
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Event planning and management"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="absolute h-full inset-x-0 md:top-40 lg:top-40 w-full 
                   md:h-[218px] lg:h-[300px] 
                  bg-gradient-to-r from-[#9BAB3C]/50 to-transparent z-0 
                  my-auto"></div>

          {/* Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2"
            >
              Full Event Planning & Management
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-[17px]/6 mb-8 max-w-2xl"
            >
              From concept to completion – Your vision, our expertise.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <button className="px-4 py-2 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Introduction Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-50 text-center px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Seamless Event Planning & Execution
          </h2>
          <p className="text-lg text-gray-600">
            At Flex Events, we provide end-to-end event management, ensuring a
            flawless experience from planning to execution. Whether it's a
            corporate conference, wedding, or product launch, we handle
            everything so you can focus on enjoying your event.
          </p>
        </div>
      </motion.section>

      {/* Accordion Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
          >
            How We Bring Your Event to Life
          </motion.h2>

          {/* Accordion */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {eventServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-[#9bab3c] rounded-2xl mx-auto shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#9bab3c] text-white hover:bg-[#869433] transition"
                >
                  <span className="text-lg font-medium">
                    {index + 1}. {service.title}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-white text-gray-800 border-t border-[#9bab3c]">
                    {service.description}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Flex Events Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
          >
            Why Choose Flex Events?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg/6 text-gray-600 text-center max-w-3xl mx-auto mb-8"
          >
            At Flex Events, we provide a stress-free event planning experience,
            ensuring every detail is handled to perfection. With our expertise
            in event design, vendor sourcing, branding, and seamless execution,
            we bring your vision to life.
          </motion.p>

          <motion.ul 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col max-w-3xl mx-auto space-y-0.5 text-gray-700 text-lg items-start"
          >
            {[
              "Tailored Planning – Every event is customized to your vision.",
              "Trusted Vendor Network – Quality service providers at competitive rates.",
              "Seamless Execution – On-site coordination and troubleshooting.",
              "Creative Event Design – Unique themes and branding.",
              "VIP Experience – High-profile and guest-focused planning.",
            ].map((text, index) => (
              <motion.li 
                key={index} 
                variants={listItem}
                className="flex items-center space-x-3 text-left"
              >
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#9BAB3C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="bg-[#333] py-6 md:px-28 mx-auto">
        <FullEventPlanningForm />
      </section>
      <HoverLink />

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
