import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const EventProposalForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventBudget: "",
    targetEventDate: "",
    expectedGuestCount: "",
    eventCity: "",
    additionalEventDetails: "",
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
        eventBudget: "",
        targetEventDate: "",
        expectedGuestCount: "",
        eventCity: "",
        additionalEventDetails: "",
      });

      alert("Proposal submitted successfully!");
    } catch (error) {
      console.error("Error submitting proposal:", error);
      alert("Failed to submit proposal.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-7xl mx-auto p-8 font-sans my-6 bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-[30px]/7 font-bold mb-6 text-[#1D1D1F]">
            Experience is everything{" "}
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

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Request Proposal</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
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
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="date"
                  name="targetEventDate"
                  value={formData.targetEventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none  peer"
                />
                <label className="absolute left-3 top-[-17px] text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 transition-all">
                  Select event date
                </label>
              </div>

              <select
                name="eventBudget"
                value={formData.eventBudget}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              >
                <option value="">Event Budget</option>
                <option value="Below 1M">Below UGX 1M</option>
                <option value="1M - 5M">1M - 5M</option>
                <option value="5M - 12M">5M - 12M</option>
                <option value="12M - 20M">12M - 20M</option>
                <option value="20M+">20M+</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="expectedGuestCount"
                value={formData.expectedGuestCount}
                onChange={handleChange}
                placeholder="Expected Guest Count"
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              />
              <input
                type="text"
                name="eventCity"
                value={formData.eventCity}
                onChange={handleChange}
                placeholder="Location(if known)"
                required
                className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              />
            </div>
            <textarea
              name="additionalEventDetails"
              value={formData.additionalEventDetails}
              onChange={handleChange}
              placeholder="Tell us more about your event, needs, timeline."
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md focus:outline-none "
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Submit Your Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventProposalForm;
