// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
import InvitationCardDesignForm from "./components/InvitationCardDesignForm";
import HoverLink from "../../../globalComps/HoverLink";

function App() {
  // Using images from the public folder
  const heroImage = "/7984652.jpg";
  const inviteImage = "/7984652.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Invitation backdrop"
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

        {/* Green Gradient Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-[30px]/7 md:text-[32px] lg:text-[40px] font-bold mb-2">
            Invitation Cards
          </h1>
          <p className="text-[17px]/6 mb-8 max-w-2xl">
            Set the Tone with Personalized Invitations
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 text-white border border-white">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-[28px]/7 md:text-[32px] lg:text-[30px] font-bold mb-4 text-[#1d1d1f]">
            Your special occasion deserves a special invite – and we’re here to
            make it happen.
          </h2>
          <p className="text-[17px]/6 text-[#86868b] ">
            Your invitation is the first impression guests will have of your
            event – let it reflect the elegance and excitement to come! At Flex
            Events, we specialize in creating personalized, high-quality
            invitation cards for all types of events. Whether it’s for a
            wedding, corporate event, or birthday celebration, we offer stylish
            designs, custom printing, and attention to detail that matches your
            event’s theme. Choose from a wide variety of styles – from classic
            and elegant to modern and creative – and get an invitation that
            excites your guests before they even arrive.
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
                src="/7984652.jpg"
                alt="Service feature"
                className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[24px]/6 md:text-[30px]/8 font-bold uppercase">
                Our Decor Services
              </h2>

              <div className="h-1 w-24 bg-[#9BAB3C]"></div>

              <ul className="space-y-1 text-[17px]/5 text-[#E0E0E0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Custom-designed
                  invitations to match your event theme and style.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span>Premium quality
                  printing with various finishes including matte, glossy, and
                  foil-stamped.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Digital invitation
                  options for easy sharing via email and social media.
                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="text-[#9BAB3C]">•</span> Unique corporate
                  branding elements for business events.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#9BAB3C] min-h-[2px] mx-auto w-full md:mb-20 hidden-sm mt-16" />

      </section>
      <section className="bg-[#333] py-6 md:px-28 mx-auto ">
        <InvitationCardDesignForm />
      </section>

      <HoverLink />

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
