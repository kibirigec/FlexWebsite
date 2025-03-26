import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header5 } from "./components/Header5";
import { Layout237 } from "./components/Layout237";
import { Layout1 } from "./components/Layout1";
import { Stats25 } from "./components/Stats25";
import { Testimonial5 } from "./components/Testimonial5";
import { Gallery1 } from "./components/Gallery1";
import { Cta1 } from "./components/Cta1";
import { Cta14 } from "./components/Cta14";
// import WeddingDecorBookingForm  from "./components/WeddingDecorBookingForm";
// import { Footer3 } from "./components/Footer3";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <div>
      <Header5 />
      <Layout237 />
      <Layout1 />
      <Stats25 />
      <Testimonial5 />
      <Gallery1 />
      <Cta1 />
      {/* <WeddingDecorBookingForm /> */}
      {/* <Cta14 /> */}
      <Footer3 />
    </div>
  );
}
