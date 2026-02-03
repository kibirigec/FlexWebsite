"use client";

import React from "react";
import { AboutHero } from "./components/AboutHero";
import { AboutStory } from "./components/AboutStory";
import { AboutTeam } from "./components/AboutTeam";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <main className="bg-surface-white min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <Footer3 />
    </main>
  );
}
