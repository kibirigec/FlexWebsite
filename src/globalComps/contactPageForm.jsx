import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export function ContactPageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: [],
    eventDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const servicesOptions = [
    "Full Event Management",
    "Corporate/Wedding Services",
    "Lighting & Audio",
    "Screens & Visuals",
    "Brand Manufacturing",
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
    setLoading(true);
    setStatus(null);

    if (!formData.phone.trim()) {
      alert("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        submittedAt: new Date(),
        type: "contact_page"
      });
      setStatus("success");
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
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
              Contact Us
           </h1>
           <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              We would love to speak with you. Reach out to discuss your vision and receive a complimentary consultation.
           </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.5fr] min-h-[600px]">
            {/* Left Column - Contact Info */}
            <div className="bg-gray-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-6">
                   Let's work <span className="text-[#9BAB3C]">together</span>
                </h2>
                <div className="space-y-4 text-gray-500 text-lg leading-relaxed mb-12">
                  <p>
                    If your inquiry requires immediate attention, please feel free to
                    contact us directly. Our team is available to assist you.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <ContactItem 
                  icon={<EnvelopeIcon className="w-5 h-5" />}
                  label="Email"
                  value="info@flexevents.ug"
                  href="mailto:info@flexevents.ug"
                />
                
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 text-[#9BAB3C]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1d1d1f] text-sm uppercase tracking-wide mb-1">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+256772406122" className="text-lg text-gray-500 hover:text-[#9BAB3C] transition-colors">+256 772 406 122</a>
                      <a href="tel:+256708406122" className="text-lg text-gray-500 hover:text-[#9BAB3C] transition-colors">+256 708 406 122</a>
                    </div>
                  </div>
                </div>

                <ContactItem 
                  icon={<MapPinIcon className="w-5 h-5" />}
                  label="Address"
                  value={<>Plot 2973, Kisaasi-Kyanja Road<br />Kyanja, Kampala, Uganda</>}
                />

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 text-[#9BAB3C]">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1d1d1f] text-sm uppercase tracking-wide mb-1">Hours</h3>
                    <div className="text-lg text-gray-500">
                        <p>Mon-Fri: 9:00AM - 7:30PM</p>
                        <p>Sat: 9:00AM - 6:30PM</p>
                        <p>Sun: <span className="text-red-500 font-medium">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-8 md:p-12 lg:p-16 relative bg-white">
              <AnimatePresence>
                 {status === 'success' ? (
                    <motion.div 
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8 text-center"
                    >
                       <CheckCircleIcon className="w-20 h-20 text-[#9BAB3C] mb-6" />
                       <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Message Sent!</h3>
                       <p className="text-gray-500 max-w-md">
                          Thank you for reaching out. We have received your details and will get back to you shortly.
                       </p>
                       <button 
                          onClick={() => setStatus(null)}
                          className="mt-8 text-[#9BAB3C] font-medium hover:underline"
                       >
                          Send another message
                       </button>
                    </motion.div>
                 ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
                    <div className="space-y-8">
                      <div className="relative group">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full py-3 px-4 bg-white border border-gray-300 focus:border-black focus:ring-1 focus:ring-black/5 text-gray-900 placeholder:text-gray-400 transition-all outline-none rounded-lg shadow-sm"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                           <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Email</label>
                           <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-white border border-gray-300 focus:border-black focus:ring-1 focus:ring-black/5 text-gray-900 placeholder:text-gray-400 transition-all outline-none rounded-lg shadow-sm"
                            placeholder="john@example.com"
                            required
                           />
                        </div>
                        <div className="relative group">
                           <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Phone</label>
                           <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full py-3 px-4 bg-white border border-gray-300 focus:border-black focus:ring-1 focus:ring-black/5 text-gray-900 placeholder:text-gray-400 transition-all outline-none rounded-lg shadow-sm"
                            placeholder="+256 700 ..."
                            required
                           />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">I'm interested in</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {servicesOptions.map((option) => (
                            <label
                              key={option}
                              className={`flex items-center space-x-3 cursor-pointer group`}
                            >
                              <input
                                type="checkbox"
                                name="selectedServices"
                                value={option}
                                checked={formData.selectedServices.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black"
                              />
                              <span className={`text-sm ${formData.selectedServices.includes(option) ? 'text-black font-medium' : 'text-gray-500'} group-hover:text-black transition-colors`}>
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Message</label>
                        <textarea
                          name="eventDescription"
                          value={formData.eventDescription}
                          onChange={handleChange}
                          className="w-full py-3 px-4 bg-white border border-gray-300 focus:border-black focus:ring-1 focus:ring-black/5 text-gray-900 placeholder:text-gray-400 transition-all outline-none rounded-lg shadow-sm min-h-[100px] resize-y"
                          placeholder="Tell us about your event..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="button"
                            onClick={() => {
                                const message = `*New Inquiry via Contact Page*\n\n` +
                                    `*Name:* ${formData.name}\n` +
                                    `*Email:* ${formData.email}\n` +
                                    `*Phone:* ${formData.phone}\n` +
                                    `*Interested Services:* ${formData.selectedServices.length > 0 ? formData.selectedServices.join(', ') : 'None selected'}\n` +
                                    `*Message:* ${formData.eventDescription || 'N/A'}`;
                                
                                const encodedMessage = encodeURIComponent(message);
                                window.open(`https://wa.me/256772406122?text=${encodedMessage}`, '_blank');
                            }}
                            className="w-full bg-black text-white font-medium py-4 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide uppercase flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.2 53.7 21.8 57.4 2.6 3.7 37.8 59 91.8 80.8 53.8 21.9 53.8 14.6 63.9 13.6 10.1-1 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                            WhatsApp
                        </button>
                    </div>
                  </form>
                 )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1 text-[#9BAB3C]">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-[#1d1d1f] text-sm uppercase tracking-wide mb-1">{label}</h3>
      {href ? (
        <a href={href} className="text-lg text-gray-500 hover:text-[#9BAB3C] transition-colors">{value}</a>
      ) : (
        <p className="text-lg text-gray-500">{value}</p>
      )}
    </div>
  </div>
);

export default ContactPageForm;
