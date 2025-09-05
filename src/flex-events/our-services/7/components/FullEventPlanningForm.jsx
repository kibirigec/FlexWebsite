import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const FullEventPlanningForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    venuePreference: "",
    guestCount: "",
    budgetRange: "",
    requiredServices: [],
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        requiredServices: checked
          ? [...prevState.requiredServices, value]
          : prevState.requiredServices.filter((item) => item !== value),
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
        eventType: "",
        eventDate: "",
        venuePreference: "",
        guestCount: "",
        budgetRange: "",
        requiredServices: [],
        additionalDetails: "",
      });

      alert("Event Planning Consultation Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit Event Planning Consultation request.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6 bg-white">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Event Info */}
        <div>
          <h1 className="text-[30px]/7 font-bold mb-6 text-[#1D1D1F]">
            Plan your perfect event <br /> with us{" "}
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
              Event Planning Consultation
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
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            >
              <option value="">Select Event Type *</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Conference">Conference</option>
              <option value="Concert">Concert</option>
              <option value="Other">Other</option>
            </select>

            {/* <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            /> */}

            <input
              type="text"
              name="venuePreference"
              value={formData.venuePreference}
              onChange={handleChange}
              placeholder="Preferred Venue (or location)"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            />

            <input
              type="text"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="Expected Number of Guests *"
              required
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            />

            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
            >
              <option value="">Budget Range *</option>
              <option value="500-1000">UGX 500,000 - 1,000,000</option>
              <option value="1000-5000">UGX 1,000,000 - 5,000,000</option>
              <option value="5000-10000">UGX 5,000,000 - 10,000,000</option>
              <option value="10000+">UGX 10,000,000+</option>
            </select>

            <div className="space-y-2">
              <label className="block font-semibold">Required Services *</label>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  "Catering",
                  "Photography",
                  "Videography",
                  "Décor",
                  "Entertainment",
                  "Other",
                ].map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      name="requiredServices"
                      value={service}
                      checked={formData.requiredServices.includes(service)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={service}>{service}</label>
                  </div>
                ))}
              </div>
            </div>

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details or Special Requests"
              className="w-full px-3 py-2 border-2 border-[#9BAB3C] rounded-md"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullEventPlanningForm;
