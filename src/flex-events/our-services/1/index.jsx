import React, { useState } from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import FullEventPlanningForm from "./components/FullEventPlanningForm";
import HoverLink from "../../../globalComps/HoverLink";

function App() {
  const heroImage = "/images/event-planning-hero.jpg";

  // Accordion State
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Event Services Data
  const eventServices = [
    {
      title: "Event Concept Design & Development",
      description:
        "We start by truly understanding your goals and vision for the event. Our creative team works closely with you to craft a concept that is innovative and tailored to your objectives. Whether it’s a corporate conference with a professional tone or a personalized celebration, we ensure your event tells a compelling story.",
    },
    {
      title: "Event Planning & Vendor Sourcing",
      description:
        "At Flex Events, we handle everything from sourcing top-quality vendors to managing contracts and ensuring seamless coordination. Even if a service is beyond our scope, we take care of it by finding the right vendor, negotiating rates, and handling all logistics.",
    },
    {
      title: "Event Theming & Branding",
      description:
        "A well-branded event creates a lasting impact. We develop cohesive themes integrating decor, branding, and ambiance to reflect your identity. Whether it’s a corporate brand launch or a themed gala, we ensure a visually stunning experience.",
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
        "We ensure every aspect of the venue is prepped, from space layout to VIP guest experience. Whether it’s a high-profile event or an intimate gathering, we curate a premium experience for all attendees.",
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
      <div className=" bg-black">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Event planning and management"
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

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
            <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
              Full Event Planning & Management
            </h1>
            <p className="text-[17px]/6 mb-8 max-w-2xl">
              From concept to completion – Your vision, our expertise.
            </p>
            <Link to="/contact">
              <button className="px-4 py-2 text-white border border-white">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Seamless Event Planning & Execution
          </h2>
          <p className="text-lg text-gray-600">
            At Flex Events, we provide end-to-end event management, ensuring a
            flawless experience from planning to execution. Whether it’s a
            corporate conference, wedding, or product launch, we handle
            everything so you can focus on enjoying your event.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 ">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            How We Bring Your Event to Life
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {eventServices.map((service, index) => (
              <div
                key={index}
                className="border border-[#9bab3c] rounded-2xl  mx-auto  shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#9bab3c] text-white hover:bg-[#869433] transition"
                >
                  <span className="text-lg font-medium">
                    {index + 1}. {service.title}
                  </span>
                  <svg
                    className={`h-6 w-6 transform ${
                      openIndex === index ? "rotate-180" : ""
                    } transition-transform`}
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
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-800 border-t border-[#9bab3c]">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Flex Events Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Flex Events?
          </h2>
          <p className="text-lg/6 text-gray-600 text-center max-w-3xl mx-auto mb-8">
            At Flex Events, we provide a stress-free event planning experience,
            ensuring every detail is handled to perfection. With our expertise
            in event design, vendor sourcing, branding, and seamless execution,
            we bring your vision to life.
          </p>

          <ul className="flex flex-col max-w-3xl mx-auto space-y-0.5 text-gray-700 text-lg items-start ">
            {[
              "Tailored Planning – Every event is customized to your vision.",
              "Trusted Vendor Network – Quality service providers at competitive rates.",
              "Seamless Execution – On-site coordination and troubleshooting.",
              "Creative Event Design – Unique themes and branding.",
              "VIP Experience – High-profile and guest-focused planning.",
            ].map((text, index) => (
              <li key={index} className="flex items-center space-x-3 text-left">
                {/* Custom SVG Tick Icon */}
                <svg
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
                </svg>
                <span className=''>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#333] py-6 md:px-28 mx-auto ">
        <FullEventPlanningForm />
      </section>
      <HoverLink />

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
