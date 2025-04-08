import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const CustomSpeakerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    speakerType: "",
    powerRequirements: "",
    usageScenario: "",
    budgetRange: "",
    quantity: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "speaker_requests"), {
        ...formData,
        submittedAt: new Date(),
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        speakerType: "",
        powerRequirements: "",
        usageScenario: "",
        budgetRange: "",
        quantity: "",
        additionalDetails: "",
      });

      alert("Custom Speaker Inquiry submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit Custom Speaker Inquiry.");
    }
  };

  return (
    <div className=" max-w-7xl mx-auto p-8 font-sans my-6 bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Company Info */}
        <div>
          <h1 className="text-[30px]/7 font-bold mb-6 text-[#1D1D1F]">
            Custom High Perfomance Speakers{" "}
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
            <h2 className="text-2xl font-bold mb-4">
              Request a Custom Speaker
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
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
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              />
            </div>

            <select
              name="speakerType"
              value={formData.speakerType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            >
              <option value="">Speaker Type *</option>
              <option value="Home Audio">Home Audio</option>
              <option value="Event PA System">Event PA System</option>
              <option value="Studio Monitors">Studio Monitors</option>
              <option value="Custom Build">Custom Build</option>
            </select>

            {/* <input
              type="text"
              name="powerRequirements"
              value={formData.powerRequirements}
              onChange={handleChange}
              placeholder="Power Requirements (Watts, Voltage, etc.)"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            /> */}

            <select
              name="usageScenario"
              value={formData.usageScenario}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            >
              <option value="">Intended Use *</option>
              <option value="Home Entertainment">Home Entertainment</option>
              <option value="Outdoor Events">Outdoor Events</option>
              <option value="Professional Studio">Professional Studio</option>
              <option value="Church/Worship Center">
                Church/Worship Center
              </option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              >
                <option value="">Budget Range *</option>
                <option value="500-1000">UGX 500,000 - 1,000,000</option>
                <option value="1000-2500">UGX 1,000,000 - 2,500,000</option>
                <option value="2500-5000">UGX 2,500,000 - 5,000,000</option>
                <option value="5000+">UGX 5,000,000+</option>
              </select>

              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Quantity Required *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              />
            </div>

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details or Custom Specifications"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomSpeakerForm;
