import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header54 } from "./components/Header54";
import { Layout241 } from "./components/Layout241";
import { Layout24 } from "./components/Layout24";
import { Layout12 } from "./components/Layout12";
import { Layout6 } from "./components/Layout6";
import { Layout1 } from "./components/Layout1";
import { Layout24_1 } from "./components/Layout24_1";
import { Testimonial5 } from "./components/Testimonial5";
import { Cta1 } from "./components/Cta1";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <div>
      <Header54 />
      <Layout241 />{/*iniital*/}
      <Layout24 /> {/*events management*/}
      <Layout12 />{/*hire*/}
      <Layout6 />{/*decor*/}
      <Layout1 />{/*events consultancy*/}
      <Layout24_1 />{/*sound*/}
      <Testimonial5 />
      {/* <Cta1 /> */}
      <Footer3 />
    </div>
  );
}
