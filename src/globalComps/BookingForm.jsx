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

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => {
                  const message = `*New Inquiry via Website*\n\n` +
                      `*Name:* ${formData.name}\n` +
                      `*Email:* ${formData.email}\n` +
                      `*Phone:* ${formData.phone}\n` +
                      `*Interested Services:* ${formData.selectedServices.length > 0 ? formData.selectedServices.join(', ') : 'None selected'}\n` +
                      `*Message:* ${formData.eventDescription || 'N/A'}`;
                  
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/256772406122?text=${encodedMessage}`, '_blank');
              }}
              className="w-full p-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.2 53.7 21.8 57.4 2.6 3.7 37.8 59 91.8 80.8 53.8 21.9 53.8 14.6 63.9 13.6 10.1-1 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
