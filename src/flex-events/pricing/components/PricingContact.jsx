import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../utils/firebaseConfig";
import { toast } from "react-toastify";

export function PricingContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Concert/Festival",
    "Product Launch",
    "Carnival",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "pricing-inquiries"), {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      
      toast.success("Request submitted! We'll send you a custom quote soon.");
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
        Request a Custom Quote
      </h3>
      <p className="text-sm text-gray-600 mb-5">
        Get a personalized pricing package for your event.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BAB3C] focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BAB3C] focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BAB3C] focus:border-transparent transition-all"
              placeholder="+256 772 406 122"
            />
          </div>
        </div>

        <div>
          <label htmlFor="eventType" className="block text-xs font-semibold text-gray-700 mb-1">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BAB3C] focus:border-transparent transition-all"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
            Event Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BAB3C] focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your event..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#9BAB3C] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#8a9a35] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Or call us at{" "}
        <a href="tel:+256772406122" className="text-[#9BAB3C] font-semibold hover:underline">
          +256 772 406 122
        </a>
      </p>
    </div>
  );
}
