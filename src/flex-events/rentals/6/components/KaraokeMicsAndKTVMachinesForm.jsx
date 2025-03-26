import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../utils/firebaseConfig";

const KaraokeMicsAndKTVMachinesForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    venue: "",
    micQuantity: "",
    ktvMachineType: "",
    songLibrarySize: "",
    speakerSystem: "",
    wirelessMics: false,
    discoLights: false,
    liveRecording: false,
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
        micQuantity: "",
        ktvMachineType: "",
        songLibrarySize: "",
        speakerSystem: "",
        wirelessMics: false,
        discoLights: false,
        liveRecording: false,
        additionalDetails: "",
      });

      alert("Karaoke Mics & KTV Machines Booking submitted successfully!");
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
            Book Karaoke Mics & KTV Machines
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
            <h2 className="text-2xl font-bold mb-4">Karaoke & KTV Booking</h2>

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
              <option value="Karaoke Night">Karaoke Night</option>
              <option value="Private Party">Private Party</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Birthday Party">Birthday Party</option>
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

            <input
              type="number"
              name="micQuantity"
              value={formData.micQuantity}
              onChange={handleChange}
              placeholder="Number of Microphones *"
              required
              className="w-full px-3 py-2 border rounded-md"
            />

            <select
              name="ktvMachineType"
              value={formData.ktvMachineType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select KTV Machine Type *</option>
              <option value="Standard">Standard</option>
              <option value="Professional">Professional</option>
            </select>

            <select
              name="songLibrarySize"
              value={formData.songLibrarySize}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Song Library *</option>
              <option value="500+ songs">500+ songs</option>
              <option value="1000+ songs">1000+ songs</option>
              <option value="Unlimited">Unlimited</option>
            </select>

            <select
              name="speakerSystem"
              value={formData.speakerSystem}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Speaker System *</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
            </select>

            <div className="space-y-2">
              <label className="block font-semibold">Additional Features</label>
              <div className="flex flex-col space-y-2">
                {["wirelessMics", "discoLights", "liveRecording"].map((feature) => (
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

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KaraokeMicsAndKTVMachinesForm;
