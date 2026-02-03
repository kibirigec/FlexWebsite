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
          type="button"
          disabled={isSubmitting}
          onClick={async () => {
            if (!formData.phone.trim()) {
              toast.error("Please enter a valid phone number.");
              return;
            }
        
            if (!formData.name.trim() || !formData.email.trim()) {
              toast.error("Please fill in all required fields.");
              return;
            }

            const message = `*New Pricing Inquiry via Website*\n\n` +
                  `*Name:* ${formData.name}\n` +
                  `*Email:* ${formData.email}\n` +
                  `*Phone:* ${formData.phone}\n` +
                  `*Event Type:* ${formData.eventType || 'N/A'}\n` +
                  `*Details:* ${formData.message || 'N/A'}`;
              
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/256772406122?text=${encodedMessage}`, '_blank');

            setIsSubmitting(true);
        
            try {
              await addDoc(collection(db, "pricing-inquiries"), {
                ...formData,
                timestamp: new Date().toISOString(),
              });
              
              toast.success("Request logged! We'll allow you to continue on WhatsApp.");
              
              setFormData({
                name: "",
                email: "",
                phone: "",
                eventType: "",
                message: "",
              });
            } catch (error) {
              console.error("Error submitting form:", error);
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.2 53.7 21.8 57.4 2.6 3.7 37.8 59 91.8 80.8 53.8 21.9 53.8 14.6 63.9 13.6 10.1-1 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
          {isSubmitting ? "Processing..." : "Request via WhatsApp"}
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
