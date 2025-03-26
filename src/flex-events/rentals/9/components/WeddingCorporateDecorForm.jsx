import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const WeddingCorporateDecorForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    venue: "",
    decorPackage: "",
    floralDecor: false,
    tableCenterpieces: false,
    drapery: false,
    stageDesign: false,
    lightingDecor: false,
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
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
      await addDoc(collection(db, "rentals"), {
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
        venue: "",
        decorPackage: "",
        floralDecor: false,
        tableCenterpieces: false,
        drapery: false,
        stageDesign: false,
        lightingDecor: false,
        additionalDetails: "",
      });

      alert("Wedding & Corporate Decor Booking submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit booking request.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Book Wedding & Corporate Decor
          </h1>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-3">
              📍 <span>Plot 2973, Kisaasi-Kyanja Road, Kyanja, Kampala, Uganda</span>
            </div>
            <div className="flex items-center space-x-3">
              📞{" "}
              <a
                href="tel:+256772406122"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                +256 772 406 122
              </a>
            </div>
            <div className="flex items-center space-x-3">
              ✉️{" "}
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
            <h2 className="text-2xl font-bold mb-4">Decor Rental Booking</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Event Type *</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Gala Dinner">Gala Dinner</option>
              <option value="Product Launch">Product Launch</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />

            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Event Venue *"
              required
              className="w-full px-3 py-2 border rounded-md"
            />

            <select
              name="decorPackage"
              value={formData.decorPackage}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Decor Package *</option>
              <option value="Basic">Basic (Tables & Chairs + Simple Setup)</option>
              <option value="Standard">Standard (Floral + Drapery + Lighting)</option>
              <option value="Premium">Premium (Full Luxury Setup)</option>
            </select>

            <div className="space-y-2">
              <label className="block font-semibold">Additional Decor Features</label>
              <div className="flex flex-col space-y-2">
                {["floralDecor", "tableCenterpieces", "drapery", "stageDesign", "lightingDecor"].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      id={feature}
                      name={feature}
                      checked={formData[feature]}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={feature}>{feature.replace(/([A-Z])/g, " $1")}</label>
                  </div>
                ))}
              </div>
            </div>

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details or Requests"
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
            ></textarea>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeddingCorporateDecorForm;
