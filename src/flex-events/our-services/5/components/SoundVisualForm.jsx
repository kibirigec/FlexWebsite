import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const SoundVisualForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    installationType: "",
    roomSize: "",
    soundNeeds: [],
    visualPreferences: [],
    screenType: "",
    resolutionPreference: "",
    budgetRange: "",
    additionalDetails: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter(item => item !== value)
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

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        installationType: "",
        roomSize: "",
        soundNeeds: [],
        visualPreferences: [],
        screenType: "",
        resolutionPreference: "",
        budgetRange: "",
        additionalDetails: ""
      });

      alert("Sound & Visual Installation request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request.");
    }
  };

  return (
    <div className="border border-gray-400 max-w-4xl mx-auto p-8 font-sans my-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Branding */}
        <div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Elevate Your Space with Professional Sound & Visuals
          </h1>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center space-x-3">
              <span>📍 Plot 2973, Kisaasi-Kyanja Road, Kyanja, Kampala</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="tel:+256772406122" className="text-sm underline">📞 +256 772 406 122</a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="mailto:info@flexevents.ug" className="text-sm underline">📧 info@flexevents.ug</a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Sound & Visual Installation</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number *" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select name="installationType" value={formData.installationType} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                <option value="">Installation Type *</option>
                <option value="Home Theater">Home Theater</option>
                <option value="Conference Room">Conference Room</option>
                <option value="Outdoor Setup">Outdoor Setup</option>
                <option value="Club/Bar">Club / Bar</option>
              </select>
              <select name="roomSize" value={formData.roomSize} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                <option value="">Room Size *</option>
                <option value="Small">Small (Under 150 sq ft)</option>
                <option value="Medium">Medium (150-300 sq ft)</option>
                <option value="Large">Large (300-500 sq ft)</option>
                <option value="Extra Large">Extra Large (500+ sq ft)</option>
              </select>
            </div>

            {/* Sound System Needs */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold">Sound System Needs *</label>
              <div className="grid md:grid-cols-3 gap-2">
                {["Surround Sound", "Concert-Grade Speakers", "Smart Audio", "PA System", "Wireless Audio"].map((sound) => (
                  <div key={sound} className="flex items-center">
                    <input type="checkbox" id={sound} name="soundNeeds" value={sound} checked={formData.soundNeeds.includes(sound)} onChange={handleChange} className="mr-2" />
                    <label htmlFor={sound}>{sound}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Preferences */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold">Visual Setup Preferences *</label>
              <div className="grid md:grid-cols-3 gap-2">
                {["LED Video Wall", "Projector", "OLED TV", "Interactive Whiteboard", "Digital Signage"].map((visual) => (
                  <div key={visual} className="flex items-center">
                    <input type="checkbox" id={visual} name="visualPreferences" value={visual} checked={formData.visualPreferences.includes(visual)} onChange={handleChange} className="mr-2" />
                    <label htmlFor={visual}>{visual}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Screen Type and Resolution */}
            <div className="grid md:grid-cols-2 gap-4">
              <select name="screenType" value={formData.screenType} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                <option value="">Screen Type *</option>
                <option value="Flat Screen">Flat Screen</option>
                <option value="Curved Screen">Curved Screen</option>
                <option value="Projection Screen">Projection Screen</option>
              </select>
              <select name="resolutionPreference" value={formData.resolutionPreference} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                <option value="">Resolution Preference *</option>
                <option value="4K">4K</option>
                <option value="8K">8K</option>
                <option value="Full HD">Full HD (1080p)</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SoundVisualForm;
