import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header49 } from "./components/Header49";
import { Layout41 } from "./components/Layout41";
import { Layout1 } from "./components/Layout1";
import { Layout22 } from "./components/Layout22";
import Team from "./components/team";
import {Why} from "./components/Why"
import { Footer3 } from "../../globalComps/Footer3";


export default function Page() {
  return (
    <div>
      <Header49 />
      <Layout41 />
      <Team />
      <Layout1 />
      <Layout22 />
      <Why />
      {/* <Cta13 />
      <Cta2 /> */}
      <Footer3 />
    </div>
  );
}
