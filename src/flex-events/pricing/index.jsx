import React from "react";
import { Footer3 } from "../../globalComps/Footer3";
import { PricingContact } from "./components/PricingContact";
import { Link } from "react-router-dom";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-[5%] py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#9BAB3C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9BAB3C]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Under Construction Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Under Construction
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Custom Pricing for Your{" "}
              <span className="text-[#9BAB3C]">Perfect Event</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We're crafting a detailed pricing page to help you plan better. In the meantime, 
              we offer customized quotes tailored to your specific event needs, budget, and vision.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#9BAB3C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#9BAB3C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Transparent</h3>
                <p className="text-sm text-gray-600">
                  No hidden fees, just honest pricing
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#9BAB3C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#9BAB3C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Flexible</h3>
                <p className="text-sm text-gray-600">
                  Packages that fit your budget
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#9BAB3C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#9BAB3C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-sm text-gray-600">
                  Quote within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-[5%] py-16 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <PricingContact />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="px-[5%] py-16 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/services"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#9BAB3C]"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#9BAB3C] transition-colors">
                Event Services
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Full event planning and management
              </p>
              <span className="text-[#9BAB3C] text-sm font-semibold">
                Learn more →
              </span>
            </Link>

            <Link
              to="/hire"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#9BAB3C]"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#9BAB3C] transition-colors">
                Equipment Rental
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Professional audio, lighting & stages
              </p>
              <span className="text-[#9BAB3C] text-sm font-semibold">
                Learn more →
              </span>
            </Link>

            <Link
              to="/portfolio"
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#9BAB3C]"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#9BAB3C] transition-colors">
                Our Portfolio
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                See our past work and success stories
              </p>
              <span className="text-[#9BAB3C] text-sm font-semibold">
                View gallery →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer3 />
    </div>
  );
}
