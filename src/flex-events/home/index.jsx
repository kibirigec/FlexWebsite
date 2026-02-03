"use client";

import React from "react";
import { Hero } from "./components/Hero";
import { HomeAbout } from "./components/HomeAbout";
import { HomeStats } from "./components/HomeStats";
import { HomeGallery } from "./components/HomeGallery";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <main className="bg-surface-white min-h-screen">
      <Hero />
      <HomeAbout />
      <HomeStats />
      <HomeGallery />
      <Footer3 />
    </main>
  );
}
