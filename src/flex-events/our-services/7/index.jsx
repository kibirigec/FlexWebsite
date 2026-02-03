import React, { useState } from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import FullEventPlanningForm from "./components/FullEventPlanningForm";
import HoverLink from "../../../globalComps/HoverLink";
import { motion } from "framer-motion";

function App() {
  const heroImage = "/weddingplan.jpeg";

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
      <div className="bg-black">
        <section className="relative h-[100dvh] flex flex-col justify-end bg-gray-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Event planning and management"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl/10 md:text-6xl/10 font-bold mb-4 leading-tight !text-white"
            >
              Full Event Planning & Management
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light"
            >
              From concept to completion – Your vision, our expertise.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <button className="px-8 py-3 border border-white border-1 text-white hover:bg-[#869433] transition-colors duration-300  font-medium">
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
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-6 text-[#1d1d1f]">
            Seamless Event Planning & Execution
          </h2>
          <p className="text-[17px]/6 text-[#86868b]">
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
            className="space-y-4 max-w-4xl mx-auto"
          >
            {eventServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border-b border-gray-200 last:border-0 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-6 flex justify-between items-center group"
                >
                  <span className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${openIndex === index ? "text-[#9bab3c]" : "text-[#1d1d1f] group-hover:text-[#9bab3c]"}`}>
                    {service.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${openIndex === index ? "bg-[#9bab3c] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#9bab3c] group-hover:text-white"}`}
                  >
                    <svg
                      className="h-5 w-5"
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
                    </svg>
                  </motion.div>
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
                  <div className="pb-8 text-[17px]/7 text-[#86868b]">
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
            className="flex flex-col max-w-3xl mx-auto space-y-2 text-gray-700 text-base items-start"
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
                className="flex items-start space-x-3 text-left"
              >
                <span className="text-[#9BAB3C] text-xl leading-none mt-1">•</span>
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
