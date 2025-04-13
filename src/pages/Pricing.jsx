import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  // Service pricing data
  const servicePricing = [
    {
      title: "Wedding & Corporate Decor",
      description: "Complete event decoration services including venue setup, floral arrangements, and theme design",
      price: "2,500,000",
      features: [
        "Full venue decoration",
        "Custom theme design",
        "Floral arrangements",
        "Lighting setup",
        "On-site coordination"
      ]
    },
    {
      title: "Pro-Audio & Visual/Lighting",
      description: "Professional audio, visual, and lighting services for events",
      price: "3,000,000",
      features: [
        "Sound system setup",
        "Lighting design",
        "Visual effects",
        "Technical support",
        "Equipment operation"
      ]
    },
    {
      title: "Home Audio Systems",
      description: "Premium home audio system installation and setup",
      price: "1,500,000",
      features: [
        "System design",
        "Equipment installation",
        "Sound calibration",
        "Warranty support",
        "Maintenance service"
      ]
    },
    {
      title: "Full Event Management",
      description: "Complete event planning and management services",
      price: "5,000,000",
      features: [
        "Event planning",
        "Vendor coordination",
        "Budget management",
        "Timeline management",
        "On-site supervision"
      ]
    }
  ];

  // Rental pricing data
  const rentalPricing = [
    {
      title: "P.A System & Music/Mobile Disco",
      description: "Complete sound system for events and parties",
      price: "800,000",
      duration: "per day",
      features: [
        "Professional speakers",
        "Mixer console",
        "Microphones",
        "DJ equipment",
        "Technical support"
      ]
    },
    {
      title: "Line Array Sound System",
      description: "High-end professional sound system for large events",
      price: "1,500,000",
      duration: "per day",
      features: [
        "Line array speakers",
        "Power amplifiers",
        "Digital processor",
        "Cables and accessories",
        "Technical crew"
      ]
    },
    {
      title: "LED Screens & Video Walls",
      description: "High-resolution LED display systems",
      price: "2,000,000",
      duration: "per day",
      features: [
        "LED panels",
        "Video processor",
        "Mounting system",
        "Content management",
        "Technical support"
      ]
    },
    {
      title: "Pro-Lights & Effects",
      description: "Professional lighting and special effects",
      price: "1,200,000",
      duration: "per day",
      features: [
        "Moving head lights",
        "Laser effects",
        "Fog machines",
        "DMX controller",
        "Lighting technician"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our <span className="text-[#9BAB3C]">Pricing</span>
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Transparent pricing for all our services and equipment rentals. All prices are in Ugandan Shillings (UGX).
        </p>
      </div>

      {/* Services Pricing Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#9BAB3C]">Services</span> Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePricing.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="text-3xl font-bold text-[#9BAB3C] mb-6">
                UGX {service.price}
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-[#9BAB3C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-[#9BAB3C] text-white text-center py-3 rounded-lg hover:bg-[#8a9a35] transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Rental Pricing Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-[#9BAB3C]">Rental</span> Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rentalPricing.map((rental, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">{rental.title}</h3>
              <p className="text-gray-400 mb-6">{rental.description}</p>
              <div className="text-3xl font-bold text-[#9BAB3C] mb-2">
                UGX {rental.price}
              </div>
              <div className="text-gray-400 text-sm mb-6">{rental.duration}</div>
              <ul className="space-y-3 mb-8">
                {rental.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-[#9BAB3C] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-[#9BAB3C] text-white text-center py-3 rounded-lg hover:bg-[#8a9a35] transition-colors duration-300"
              >
                Rent Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Solutions Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a <span className="text-[#9BAB3C]">Custom Solution</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We understand that every event is unique. Contact us for customized packages and special arrangements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#9BAB3C] text-white px-8 py-3 rounded-lg hover:bg-[#8a9a35] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 