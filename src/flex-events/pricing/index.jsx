import React from "react";
import { PricingContact } from "./components/PricingContact";
import { Link } from "react-router-dom";
import { Footer3 } from "../../globalComps/Footer3";

export default function PricingPage() {
  return (
    <>
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9BAB3C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9BAB3C]/5 rounded-full blur-3xl"></div>

      <div className="relative h-full flex items-center justify-center px-4 md:px-8 py-8">
        <div className="container mx-auto max-w-7xl h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
            
            {/* Left Column - Info */}
            <div className="text-center lg:text-left space-y-6">
              {/* Under Construction Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Under Construction
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Custom Pricing for Your{" "}
                  <span className="text-[#9BAB3C]">Perfect Event</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We offer customized quotes tailored to your specific event needs, budget, and vision.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-[#9BAB3C]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-[#9BAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900">Transparent</h3>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-[#9BAB3C]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-[#9BAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900">Flexible</h3>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-[#9BAB3C]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-[#9BAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900">Fast</h3>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#9BAB3C] hover:text-[#8a9a35] transition-colors">
                  Event Services →
                </Link>
                <Link to="/hire" className="inline-flex items-center gap-2 text-sm font-semibold text-[#9BAB3C] hover:text-[#8a9a35] transition-colors">
                  Equipment Rental →
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-[#9BAB3C] hover:text-[#8a9a35] transition-colors">
                  Portfolio →
                </Link>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:max-h-[85vh] overflow-y-auto scrollbar-hide">
              <PricingContact />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer3 />
    </>
  );
}
