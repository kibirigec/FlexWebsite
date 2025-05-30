import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";
import { toast } from "react-toastify";

const BacklineEquipmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    venue: "",
    equipmentNeeded: "",
    deliveryRequired: false,
    setupRequired: false,
    technicianRequired: false,
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
        serviceType: "Backline Equipment",
        submittedAt: new Date(),
      });
      toast.success("Backline Equipment Rental Request submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        eventType: "",
        eventDate: "",
        venue: "",
        equipmentNeeded: "",
        deliveryRequired: false,
        setupRequired: false,
        technicianRequired: false,
        additionalDetails: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div>
          <h1 className="text-[30px]/7 font-bold mb-6 text-[#1D1D1F]">
            Get Professional Backline Equipment for Your Event
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
            <h2 className="text-2xl font-bold mb-4">Backline Equipment Rental</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                required
                className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
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
                className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
              />
            </div>

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
            >
              <option value="">Select Event Type *</option>
              <option value="Concert">Concert</option>
              <option value="Festival">Festival</option>
              <option value="Private Event">Private Event</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
            />

            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Event Venue *"
              required
              className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
            />

            <select
              name="equipmentNeeded"
              value={formData.equipmentNeeded}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
            >
              <option value="">Select Equipment Needed *</option>
              <option value="Full Band Setup">Full Band Setup</option>
              <option value="Amplifiers Only">Amplifiers Only</option>
              <option value="Drum Kit">Drum Kit</option>
              <option value="Guitars & Basses">Guitars & Basses</option>
              <option value="Custom Setup">Custom Setup</option>
            </select>

            <div className="space-y-2">
              <label className="block font-semibold">Additional Services</label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="deliveryRequired"
                    checked={formData.deliveryRequired}
                    onChange={handleChange}
                    className="rounded border-[#9bab3c] text-[#9bab3c] focus:ring-[#9bab3c]"
                  />
                  <span>Delivery Service Required</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="setupRequired"
                    checked={formData.setupRequired}
                    onChange={handleChange}
                    className="rounded border-[#9bab3c] text-[#9bab3c] focus:ring-[#9bab3c]"
                  />
                  <span>Setup Service Required</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="technicianRequired"
                    checked={formData.technicianRequired}
                    onChange={handleChange}
                    className="rounded border-[#9bab3c] text-[#9bab3c] focus:ring-[#9bab3c]"
                  />
                  <span>On-site Technician Required</span>
                </label>
              </div>
            </div>

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details (Optional)"
              rows="4"
              className="w-full px-3 py-2 border border-[#9bab3c] rounded-md"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#9bab3c] text-white py-3 rounded-md hover:bg-[#869433] transition-colors duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BacklineEquipmentForm; 