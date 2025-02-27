import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header50 } from "./components/Header50";
import { Layout10 } from "./components/Layout10";
import { Layout3 } from "./components/Layout3";
import { Layout27 } from "./components/Layout27";
import { Layout369 } from "./components/Layout369";
import { Testimonial1 } from "./components/Testimonial1";
import { Gallery13 } from "./components/Gallery13";
import { Cta3 } from "./components/Cta3";
import { Cta40 } from "./components/Cta40";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <div>
      <Header50 />
      <Layout10 />
      <Layout3 />
      <Layout27 />
      <Layout369 />
      {/* <Testimonial1 /> */}
      <Gallery13 />
      {/* <Cta3 /> */}
      {/* <Cta40 /> */}
      <Footer3 />
    </div>
  );
}
