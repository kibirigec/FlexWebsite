import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "wedding",
    date: "",
    message: "",
  });

  const [bookings, setBookings] = useState([]); // Store fetched data

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      alert("✅ Booking submitted successfully!");
      setFormData({ name: "", email: "", eventType: "wedding", date: "", message: "" });
    } catch (error) {
      console.error("❌ Error submitting booking:", error);
    }
  };

  // Fetch Firestore data
  const fetchFirestoreData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      const fetchedBookings = querySnapshot.docs.map((doc) => {
        const data = doc.data();
  
        // Convert Firestore Timestamp to a formatted string
        let formattedDate;
        if (data.date instanceof Object && data.date.toDate) {
          const dateObj = data.date.toDate();
          formattedDate = dateObj.toLocaleString("en-US", {
            timeZoneName: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true, // Ensures AM/PM format
          });
        } else {
          formattedDate = data.date; // Keep as is if already a string
        }
  
        return { id: doc.id, ...data, date: formattedDate };
      });
  
      console.log("✅ Fetched Bookings:", fetchedBookings);
      setBookings(fetchedBookings); // Update state
    } catch (error) {
      console.error("❌ Error fetching data:", error);
    }
  };
  

  // Add random booking to Firestore
  const addRandomBooking = async () => {
    const randomEvents = ["Wedding", "Corporate", "Carnival", "Concert", "Product Launch"];
    const randomName = `User_${Math.floor(Math.random() * 1000)}`;
    
    const randomBooking = {
      name: randomName,
      email: `${randomName.toLowerCase()}@example.com`,
      eventType: randomEvents[Math.floor(Math.random() * randomEvents.length)],
      date: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
      message: "Randomly generated event!",
    };

    try {
      await addDoc(collection(db, "bookings"), randomBooking);
      alert("✅ Random booking added!");
    } catch (error) {
      console.error("❌ Error adding random booking:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book Your Event</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border mb-2" required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border mb-2" required />
        <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full p-2 border mb-2">
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate</option>
          <option value="concert">Concerts</option>
          <option value="carnival">Carnival</option>
          <option value="product launch">Product Launch</option>

        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border mb-2" required />
        <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} className="w-full p-2 border mb-2"></textarea>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-2">Submit Booking</button>
      </form>

      <div className="flex gap-2">
        <button onClick={fetchFirestoreData} className="bg-green-500 text-white py-2 px-4 rounded">Fetch People's events</button>
        <button onClick={addRandomBooking} className="bg-yellow-500 text-white py-2 px-4 rounded">Test Random Booking</button>
      </div>

      {bookings.length > 0 && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-semibold">Fetched Bookings from database:</h3>
          <p className="text-red-500">This is just for testing the user booking, i'll remove it later</p>
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id} className="border-b py-2">
                <strong>{booking.name}</strong> ({booking.eventType}) - {booking.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
