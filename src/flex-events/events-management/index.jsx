import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header44 } from "./components/Header44";
import { Layout3 } from "./components/Layout3";
import { Layout25 } from "./components/Layout25";
import { Layout16 } from "./components/Layout16";
import { Layout6 } from "./components/Layout6";
import { Layout4 } from "./components/Layout4";
import { Testimonial1 } from "./components/Testimonial1";
import { Gallery4 } from "./components/Gallery4";
import { Faq4 } from "./components/Faq4";
import { Cta1 } from "./components/Cta1";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <div>
      <Header44 />
      <Layout3 />
      <Layout25 />
      <Layout16 />
      <Layout6 />
      <Layout4 />
      <Testimonial1 />
      <Gallery4 />
      {/* <Faq4 /> */}
      <Cta1 />
      <Footer3 />
    </div>
  );
}
