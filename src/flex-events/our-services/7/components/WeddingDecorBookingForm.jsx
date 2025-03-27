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
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Experience is everything.
          </h1>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-3">
              <span>
                Plot 2973, Kisaasi-Kyanja Road
                <br />
                Kyanja, Kampala, Uganda
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="tel:+256772406122"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +256 772 406 122
              </a>
            </div>
            <div className="flex items-center space-x-3">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="eventCity"
                value={formData.eventCity}
                onChange={handleChange}
                placeholder="Location(if known)"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <textarea
              name="additionalEventDetails"
              value={formData.additionalEventDetails}
              onChange={handleChange}
              placeholder="Tell us more about your event, needs, timeline."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
