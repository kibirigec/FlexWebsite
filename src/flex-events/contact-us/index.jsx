import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header50 } from "./components/Header50";
import { Contact16 } from "./components/Contact16";
import { Contact5 } from "./components/Contact5";
import { Contact16_1 } from "./components/Contact16_1";
import { BookingForm } from "../../globalComps/bookingForm";

import { Footer3 } from "../../globalComps/Footer3";


export default function Page() {
  return (
    <div>
      <Header50/>
      <Contact16_1/>
      <BookingForm /> 
      <Footer3/>

    </div>
  );
}
