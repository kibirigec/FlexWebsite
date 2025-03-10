import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./flex-events/home/index";
import About from "./flex-events/about-us/index";
import Contact from "./flex-events/contact-us/index";
import Decor from "./flex-events/decor-services/index";
import Services from "./flex-events/services/index";
import Consultancy from "./flex-events/event-consultancy/index";
import Management from "./flex-events/events-management/index";
import Sound from "./flex-events/sound-equipment/index";
import Hire from "./flex-events/equipment-hire/index";
import Portfolio from "./flex-events/portfolio/index";
import Dashboard from "./flex-events/dashboard/index";
import FAQ from "./flex-events/faq-page/index";
import Navbar from "./globalComps/Navbar";
import EventsBooking from "./globalComps/BookingPage";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/management" element={<Management />} />
        <Route path="/sound" element={<Sound />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/booking" element={<EventsBooking />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
