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
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Company Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Custom High-Performance Speakers
          </h1>
          <p className="text-gray-600 mb-4">
            Flex Audio specializes in tailor-made loudspeakers for events, studios, homes, and businesses.
          </p>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-3">
              📍 <span>Plot 2973, Kisaasi-Kyanja Road, Kyanja, Kampala, Uganda</span>
            </div>
            <div className="flex items-center space-x-3">
              📞{" "}
              <a href="tel:+256772406122" className="block text-sm underline">
                +256 772 406 122
              </a>
            </div>
            <div className="flex items-center space-x-3">
              ✉️{" "}
              <a href="mailto:info@flexevents.ug" className="block text-sm underline">
                info@flexevents.ug
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Request a Custom Speaker</h2>

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
              name="speakerType"
              value={formData.speakerType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
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
              className="w-full px-3 py-2 border rounded-md"
            /> */}

            <select
              name="usageScenario"
              value={formData.usageScenario}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Intended Use *</option>
              <option value="Home Entertainment">Home Entertainment</option>
              <option value="Outdoor Events">Outdoor Events</option>
              <option value="Professional Studio">Professional Studio</option>
              <option value="Church/Worship Center">Church/Worship Center</option>
            </select>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              placeholder="Additional Details or Custom Specifications"
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
            ></textarea>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomSpeakerForm;
