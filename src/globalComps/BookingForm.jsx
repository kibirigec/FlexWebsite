import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";

export function BookingForm() {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    type: "",
    selectedService: "",
    guestCount: "0-50",
    destination: "",
    eventDescription: ""
  });

  const servicesOptions = [
    "Wedding & Corporate Decor",
    "Invitation Cards",
    "Pro-Audio & Visual/Lighting",
    "Home Audio",
    "Sound & Visual Installations",
    "Flex Brand Manufacturing",
    "Full Event Management and Planning"
  ];

  const rentalsOptions = [
    "P.A System & Music/Mobile Disco",
    "Line Array Sound System",
    "Pro-Lights & Effects",
    "Aluminum Truss & Stages",
    "LED Screens & Video Walls",
    "Karaoke Mics / KTv Machines",
    "DLP Projectors & Screens",
    "DJ Equipment",
    "Wedding & Corporate Decor Rentals",
    "Power & Generators"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (option) => {
    setSelectedOption(option);
    setFormData(prev => ({ ...prev, selectedService: option, type: activeTab }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let parsedDate;
    try {
      const dateParts = formData.date.split(/[/-]/);
      if (dateParts.length === 3) {
        const [day, month, year] = dateParts;
        parsedDate = new Date(year, month - 1, day);
      } else {
        parsedDate = new Date(formData.date);
      }
  
      if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date format");
      }
    } catch (dateError) {
      console.error("Date parsing error:", dateError);
      alert("Please enter a valid date in dd/mm/yyyy format");
      return;
    }
  
    const submissionData = {
      ...formData,
      date: parsedDate
    };
  
    try {
      const docRef = await addDoc(collection(db, "inquiries"), submissionData);
      alert("Inquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        date: "",
        type: "",
        selectedService: "",
        guestCount: "0-50",
        destination: "",
        eventDescription: ""
      });
      setSelectedOption('');
    } catch (error) {
      console.error("Full error details:", error);
      alert(`Error submitting inquiry: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen  bg-[#828282] flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl  overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Information */}
        <div className="bg-[#333] text-[#9BAB3C] p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">MAKE AN INQUIRY</h2>
          <p className="text-lg mb-6">
            Planning an event or looking for professional services? 
            We offer comprehensive solutions tailored to your needs. 
            Choose between our specialized services or extensive rental options 
            and let us help you create an unforgettable experience.
          </p>
          {/* <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-9a3 3 0 01-3-3m3 3h3m-3 9a3 3 0 003 3m0 0h3m-9 0a3 3 0 01-3-3m3 3v-3" />
            </svg>
            <span className="text-sm">Comprehensive Event Solutions</span>
          </div> */}
        </div>

        {/* Right Side - Booking Form */}
        <div className="p-10 ">
            <p className="text-[#86868B] mb-6">Select what you'd want</p>
          <div className="flex mb-6 border rounded-lg overflow-hidden">
            <button
              type="button"
              className={`w-1/2 p-3 ${activeTab === 'services' ? 'bg-[#9BAB3C] text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button
              type="button"
              className={`w-1/2 p-3 ${activeTab === 'rentals' ? 'bg-[#9BAB3C] text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('rentals')}
            >
              Rentals
            </button>
          </div>

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

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
                required
              />
              <input
                type="text"
                name="destination"
                placeholder="DESTINATION"
                value={formData.destination}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9BAB3C]"
              >
                <option value="0-50">0-50 Guests</option>
                <option value="51-100">51-100 Guests</option>
                <option value="101-200">101-200 Guests</option>
              </select>
            </div>

            <div className="space-y-2">
              <p className="font-semibold  text-[#86868B]">Select {activeTab === 'services' ? 'Service' : 'Rental'}:</p>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-2"
                >
                  {(activeTab === 'services' ? servicesOptions : rentalsOptions).map((option) => (
                    <label 
                      key={option} 
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="selectedService"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleServiceSelect(option)}
                        className="form-radio text-[#9BAB3C] focus:ring-[#9BAB3C]"
                      />
                      <span className="text-[#86868B]">{option}</span>
                    </label>
                  ))}
                </motion.div>
              </AnimatePresence>
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
    </div>
  );
}

export default BookingForm;