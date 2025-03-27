import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";


export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: [],
    eventDescription: "",
  });

  const servicesOptions = [
    "Full Event Management and Planning",
    "Corporate/Wedding Services",
    "Sound/Visual/Audio/Lighting",
    "Sound and Visual Installation",
    "Flex Brand Manufacturing"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const selectedServices = prev.selectedServices.includes(option)
        ? prev.selectedServices.filter((service) => service !== option)
        : [...prev.selectedServices, option];

      return { ...prev, selectedServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      await addDoc(collection(db, "inquiries"), formData);
      alert("Inquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        selectedServices: [],
        eventDescription: "",
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#828282] flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl overflow-hidden max-w-6xl w-full p-10">
        <h2 className="text-3xl font-bold text-[#333] mb-6">MAKE AN INQUIRY</h2>
        <p className="text-lg text-[#86868B] mb-6">
          Let us help you plan your event! Choose your services and submit your inquiry.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="NAME*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
            required
          />

          <p className="font-semibold text-[#86868B]">Select Services:</p>
          <div className="grid grid-cols-2 gap-2">
            {servicesOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="selectedServices"
                  value={option}
                  checked={formData.selectedServices.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="form-checkbox text-[#9BAB3C] focus:ring-[#9BAB3C]"
                />
                <span className="text-[#86868B]">{option}</span>
              </label>
            ))}
          </div>

          <textarea
            name="eventDescription"
            placeholder="TELL US ABOUT YOUR EVENT"
            value={formData.eventDescription}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-[#9BAB3C] text-white rounded-lg hover:bg-[#829433] transition duration-300 ease-in-out transform hover:scale-105"
          >
            SEND INQUIRY
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
