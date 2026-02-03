"use client";

import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesGrid } from "./components/ServicesGrid";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <main className="bg-surface-white min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <Footer3 />
    </main>
  );
}
