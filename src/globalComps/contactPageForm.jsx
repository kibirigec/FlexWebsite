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
    "Sound/Visual/Audio/Lighting",
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
    <div className="min-h-screen bg-white text-black mt-24 mb-24">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12 leading-2.5">
          <p className=" mb text-[#9BAB3C]">We'd Love To Hear From You</p>
          <h1 className="text-4xl font-bold mb-4 text-[#213547]">CONTACT US</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column - Contact Info */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-[#213547]">
              Let's work together
            </h2>
            <p className="mb-4 leading-tight text-[#86868B]">
              We would love to speak with you.
              <br />
              Feel free to reach out using the below details.
            </p>
            <p className="mb-4 leading-tight text-[#86868B]">
              If your inquiry requires immediate attention, please feel free to
              contact us at the phone number listed below. Our team of
              experienced professionals is always available to assist you with
              your queries.
            </p>
            <p className="mb-4 leading-tight text-[#86868B]">
              We strive to provide prompt and efficient customer service, and we
              will do our best to respond to your email within 24 hours. We look
              forward to hearing from you soon!
            </p>

            <p className="font-bold mb-6 text-[#213547]">
              Get in touch today and receive a complimentary consultation.
            </p>

            <div className="mb-6">
              <h3 className="font-bold text-[#213547]">Email</h3>
              <p className="text-[#86868B]">info@flexevents.com</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[#213547]">Phone</h3>
              {/* <p className="text-[#86868B]">+256772406122</p>
              <p className="text-[#86868B]">+256708406122</p> */}
              <a
                href="tel:+256772406122"
                className="block text-sm underline decoration-black underline-offset-1 text-[#86868B]"
              >
                +256 772 406 122
              </a>
              <a
                href="tel:+256708406122"
                className="block text-sm underline decoration-black underline-offset-1 text-[#86868B]"
              >
                +256 708 406 122{" "}
              </a>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-[#213547]">Hours</h3>
              <p className="text-[#86868B]">Mon-Fri 9:00AM - 5:00PM</p>
              <p className="text-[#86868B]">Sat-Sun 10:00AM - 6:00PM</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 ">
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden md:block md:mx-8">
            <div className="h-full w-px bg-gray-300"></div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2 mt-8 md:mt-0 bg-[#FAFAFA] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  NAME *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3  border border-[#9BAB3C] rounded focus:outline-none focus:ring-1 focus:ring-[#9BAB3C]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    EMAIL *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3  border border-[#9BAB3C] rounded focus:outline-none focus:ring-1 focus:ring-[#9BAB3C]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    PHONE NUMBER *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3  border border-[#9BAB3C] rounded focus:outline-none focus:ring-1 focus:ring-[#9BAB3C]"
                    required
                  />
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium mb-1">
                  YOUR INQUIRY IS REGARDING *
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {servicesOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="selectedServices"
                        value={option}
                        checked={formData.selectedServices.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="form-checkbox text-[#9BAB3C]  border-[#9BAB3C]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium mb-1"
                >
                  INQUIRY
                </label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleChange}
                  className="w-full p-3  border border-[#9BAB3C] rounded focus:outline-none focus:ring-1 focus:ring-[#9BAB3C] h-32"
                  placeholder="Tell us about your event"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-black text-white rounded hover:bg-black/90 cursor-pointer  transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageForm;
