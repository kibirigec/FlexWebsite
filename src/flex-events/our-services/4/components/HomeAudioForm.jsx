import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const HomeAudioForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    homeType: "",
    roomSize: "",
    audioInterests: [],
    musicPreferences: "",
    budgetRange: "",
    installationType: "",
    acousticConcerns: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        audioInterests: checked
          ? [...prevState.audioInterests, value]
          : prevState.audioInterests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "services"), {
        ...formData,
        submittedAt: new Date(),
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        homeType: "",
        roomSize: "",
        audioInterests: [],
        musicPreferences: "",
        budgetRange: "",
        installationType: "",
        acousticConcerns: "",
        additionalDetails: "",
      });

      alert("Home Audio Consultation Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit Home Audio Consultation request.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-7xl mx-auto p-8 font-sans my-6 z-50 bg-white ">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Branding */}
        <div>
          <h1 className="text-[30px]/7 font-bold mb-6 text-[#1D1D1F]">
            Transform Your Home with Premium Audio
          </h1>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#9BAB3C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                Plot 2973, Kisaasi-Kyanja Road
                <br />
                Kyanja, Kampala, Uganda
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#9BAB3C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+256772406122"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +256 772 406 122
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#9BAB3C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:info@flexevents.ug"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@flexevents.ug
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Home Audio Consultation</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              >
                <option value="">Home Type *</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Villa">Villa</option>
                <option value="Other">Other</option>
              </select>
              <select
                name="roomSize"
                value={formData.roomSize}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              >
                <option value="">Room Size *</option>
                <option value="Small (up to 150 sq ft)">
                  Small (up to 150 sq ft)
                </option>
                <option value="Medium (150-300 sq ft)">
                  Medium (150-300 sq ft)
                </option>
                <option value="Large (300-500 sq ft)">
                  Large (300-500 sq ft)
                </option>
                <option value="Extra Large (500+ sq ft)">
                  Extra Large (500+ sq ft)
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold">
                Audio Interests *
              </label>
              <div className="grid md:grid-cols-3 gap-2">
                {[
                  "Stereo System",
                  "Surround Sound",
                  "Home Theater",
                  "Multi-Room Audio",
                  "Smart Speakers",
                  "Vinyl Setup",
                ].map((interest) => (
                  <div key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      id={interest}
                      name="audioInterests"
                      value={interest}
                      checked={formData.audioInterests.includes(interest)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={interest}>{interest}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              >
                <option value="">Budget Range *</option>
                <option value="500-1000">UGX 500,000 - 1,000,000</option>
                <option value="1000-2500">UGX 1,000,000 - 2,500,000</option>
                <option value="2500-5000">UGX 2,500,000 - 5,000,000</option>
                <option value="5000+">UGX 5,000,000+</option>
              </select>
              <select
                name="installationType"
                value={formData.installationType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              >
                <option value="">Installation Type *</option>
                <option value="Wireless">Wireless</option>
                <option value="Wired">Wired</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Consultation">Need Consultation</option>
              </select>
            </div>

            {/* <input
              type="text"
              name="musicPreferences"
              value={formData.musicPreferences}
              onChange={handleChange}
              placeholder="Your Music Preferences (Genres, Artists)"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
            />

            <textarea
              name="acousticConcerns"
              value={formData.acousticConcerns}
              onChange={handleChange}
              placeholder="Any Specific Acoustic Concerns or Room Challenges"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              rows="3"
            ></textarea> */}

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details or Special Requirements
(Room challenges, etc)"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Request Home Audio Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeAudioForm;
