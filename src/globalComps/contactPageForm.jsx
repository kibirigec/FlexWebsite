import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export function ContactPageForm() {
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
    "Lighting",
    "Sound and Visual Installation",
    "Flex Brand Manufacturing",
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
    <div className="min-h-screen bg-gradient-to-br from-[#f7fafc] via-[#f0f4ef] to-[#e9f5e1] text-black pt-24 pb-24 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-2 md:px-8">
        {/* Card Container */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-12">
          {/* Page Title */}
          <div className="text-center mb-4 leading-2.5">
            <h1 className="text-4xl font-extrabold mb-2 text-[#213547] tracking-tight">Contact Us</h1>
            {/* <p className="text-lg text-[#9BAB3C] font-medium">We'd Love To Hear From You</p> */}
          </div>

          <div className="text-center mb-8 leading-2.5">
            <h1 className="text-2xl font-bold mb-4 text-[#213547]">
              Send us a message, or message us directly on WhatsApp at
              <a
                href="https://wa.me/256772406122"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] underline hover:text-[#128C7E] transition-colors ml-1"
              >
                +256 772 406122
              </a>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Column - Contact Info */}
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-4 text-[#213547]">Let's work together</h2>
                <p className="mb-4 leading-tight text-[#86868B] text-lg">
                  We would love to speak with you.<br />
                  Feel free to reach out using the below details.
                </p>
                <p className="mb-4 leading-tight text-[#86868B] text-lg">
                  If your inquiry requires immediate attention, please feel free to
                  contact us at the phone number listed below. Our team of
                  experienced professionals is always available to assist you with
                  your queries.
                </p>
                <p className="mb-4 leading-tight text-[#86868B] text-lg">
                  We strive to provide prompt and efficient customer service, and we
                  will do our best to respond to your email within 24 hours. We look
                  forward to hearing from you soon!
                </p>
                <p className="font-bold mb-6 text-[#213547] text-lg">
                  Get in touch today and receive a complimentary consultation.
                </p>
              </div>

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#9BAB3C] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[#213547]">Email</h3>
                    <a href="mailto:info@flexevents.com" className="text-[#86868B] hover:text-[#9BAB3C] underline transition-colors">info@flexevents.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#9BAB3C] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[#213547]">Phone</h3>
                    <a href="tel:+256772406122" className="block text-sm underline decoration-black underline-offset-1 text-[#86868B] hover:text-[#9BAB3C] transition-colors">+256 772 406 122</a>
                    <a href="tel:+256708406122" className="block text-sm underline decoration-black underline-offset-1 text-[#86868B] hover:text-[#9BAB3C] transition-colors">+256 708 406 122</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#9BAB3C] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[#213547]">Address</h3>
                    <p className="text-[#86868B]">Plot 2973, Kisaasi-Kyanja Road<br />Kyanja, Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#9BAB3C] mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[#213547]">Hours</h3>
                    <p className="text-[#86868B]">Mon-Fri - 9:00AM - 7:30PM</p>
                    <p className="text-[#86868B]">Sat - 9:00AM - 6:30PM</p>
                    <p className="text-[#86868B]">Sun - <span className="text-[black]">CLOSED</span></p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              {/* <div className="flex gap-4 mt-8">
                <a href="#" className="text-[#0A66C2] hover:text-[#004182] bg-white rounded-full p-2 shadow transition" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-[#1877F3] hover:text-[#0a58ca] bg-white rounded-full p-2 shadow transition" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878z" />
                  </svg>
                </a>
                <a href="#" className="text-[#1DA1F2] hover:text-[#0a8cd8] bg-white rounded-full p-2 shadow transition" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-[#FF0000] hover:text-[#b30000] bg-white rounded-full p-2 shadow transition" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Divider */}
            <div className="hidden md:block md:mx-8">
              <div className="h-full w-px bg-gradient-to-b from-[#9BAB3C]/30 via-[#e9f5e1] to-[#9BAB3C]/30"></div>
            </div>

            {/* Right Column - Form */}
            <div className="md:w-1/2 mt-8 md:mt-0 bg-[#FAFAFA] p-8 rounded-2xl shadow-lg border border-[#e9f5e1]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-1 text-[#213547]"
                  >
                    NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#9BAB3C] rounded focus:outline-none focus:ring-2 focus:ring-[#9BAB3C] focus:border-[#9BAB3C] transition"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-1 text-[#213547]"
                    >
                      EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#9BAB3C] rounded focus:outline-none focus:ring-2 focus:ring-[#9BAB3C] focus:border-[#9BAB3C] transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-1 text-[#213547]"
                    >
                      PHONE NUMBER *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#9BAB3C] rounded focus:outline-none focus:ring-2 focus:ring-[#9BAB3C] focus:border-[#9BAB3C] transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <p className="block text-sm font-semibold mb-1 text-[#213547]">
                    YOUR INQUIRY IS REGARDING *
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {servicesOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2 cursor-pointer text-[#213547]"
                      >
                        <input
                          type="checkbox"
                          name="selectedServices"
                          value={option}
                          checked={formData.selectedServices.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className="form-checkbox text-[#9BAB3C] border-[#9BAB3C] focus:ring-[#9BAB3C]"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="eventDescription"
                    className="block text-sm font-semibold mb-1 text-[#213547]"
                  >
                    INQUIRY
                  </label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#9BAB3C] rounded focus:outline-none focus:ring-2 focus:ring-[#9BAB3C] focus:border-[#9BAB3C] h-32 transition"
                    placeholder="Tell us about your event"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full p-3 bg-[black] text-white rounded font-bold text-lg shadow hover:bg-[#222222] transition-all duration-300 transform hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9BAB3C] focus:ring-offset-2"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageForm;
