import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: new Date(),
    eventType: "wedding"
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    setShowCalendar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      alert("Booking submitted successfully!");
      setFormData({ name: "", phone: "", email: "", date: new Date(), eventType: "wedding" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-gray-900 text-white text-center py-6 text-xl font-semibold">
        Fill out this form to book your event <a href="tel:+256XXXXXX" className="text-green-400 underline">call us now</a>
      </div>

      {/* Booking Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full mt-6 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/tent-image.jpg"
            alt="Any image"
            className="w-full rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-4">Book your event</h2>
       </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ex. John Doe"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="ex. +256 788 168034"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ex. johndoe@example.com"
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="wedding">Wedding</option>
                <option value="corporate event">Corporate Event</option>
                <option value="concert">Concert</option>
                <option value="carnival">Carnival</option>
                <option value="product launch">Product Launch</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold">Event Date</label>
              <button
                type="button"
                className="w-full p-2 border rounded-lg bg-white"
                onClick={() => setShowCalendar(true)}
              >
                {formData.date.toDateString()}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              inline
            />
            <button
              onClick={() => setShowCalendar(false)}
              className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
