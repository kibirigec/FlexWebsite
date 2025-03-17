import React, { useState } from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        "We start by truly understanding your goals and vision for the event...",
    },
    {
      title: "Event Planning & Vendor Sourcing",
      description:
        "We handle everything from sourcing high-quality vendors to managing contracts...",
    },
    {
      title: "Event Theming & Branding",
      description:
        "Branding is key to creating a memorable experience. We develop cohesive themes...",
    },
    {
      title: "Event Activations",
      description:
        "We specialize in interactive experiences, brand activations, and creative installations...",
    },
    {
      title: "Event Setup & Execution",
      description:
        "On the big day, we take over logistics—from coordinating deliveries to managing vendors...",
    },
    {
      title: "Venue & VIP Experience Coordination",
      description:
        "We ensure venues are prepped for seamless execution and VIP guests receive special attention...",
    },
    {
      title: "Event Vendor Management",
      description:
        "We act as the central point of contact for all vendors, managing schedules and contracts...",
    },
  ];

  // Carousel Images
  const carouselImages = [
    "/weddingmain.jpeg",
    "/weddingmainside.jpeg",
    "/weddingoutside.jpeg",
    "/weddingblue2.jpeg",
    "/wedding-decor.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Event planning and management"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Full Event Planning & Management
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            From concept to completion – Your vision, our expertise.
          </p>
          <Link to="/contact">
            <button className=" px-4 py-2 text-white border-white border-1 ">
              Get Started
            </button>
          </Link>{" "}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Seamless Event Planning & Execution
          </h2>
          <p className="text-lg text-gray-600">
            At Flex Events, we provide end-to-end event management, ensuring a
            flawless experience from planning to execution.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            How We Bring Your Event to Life
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {eventServices.map((service, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-100 transition"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {index + 1}. {service.title}
                  </span>
                  <svg
                    className={`h-6 w-6 text-gray-600 transform ${
                      openIndex === index ? "rotate-180" : ""
                    } transition-transform `}
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
                  <div className="px-6 py-4 bg-gray-50 text-gray-700">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Event Highlights
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full max-w-4xl mx-auto"
          >
            {carouselImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
