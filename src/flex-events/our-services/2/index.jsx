// App.jsx
import React from "react";
import { Footer3 } from "../../../globalComps/Footer3";
import { Link } from "react-router-dom";
function App() {
  // Using images from the public folder
  const heroImage = "/7984652.jpg";
  const inviteImage = "/7984652.jpg";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with CTA */}
      <section className="relative bg-gray-900 text-white ">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Invitation backdrop"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Invitation Cards
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Set the Tone with Personalized Invitations
          </p>
          <Link to="/contact">
            <button className=" px-4 py-2 text-white border-white border-1 ">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Centered Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Your special occasion deserves a special invite – and we’re here to
            make it happen.
          </h2>
          <p className="text-lg text-gray-600">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Invitation Services
              </h2>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C] mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Custom-designed invitations to match your event theme and
                      style.
                    </h3>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C] mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Premium quality printing with various finishes including
                      matte, glossy, and foil-stamped.
                    </h3>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#9BAB3C] mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-800">
                      Digital invitation options for easy sharing via email and
                      social media.
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={inviteImage}
                alt="Beautifully designed invitations"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer3 />
    </div>
  );
}

export default App;
