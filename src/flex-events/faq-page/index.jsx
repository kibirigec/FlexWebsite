"use client";

import React from "react";
import { FAQHero } from "./components/FAQHero";
import { FAQAccordion } from "./components/FAQAccordion";
import { Footer3 } from "../../globalComps/Footer3";

export default function FAQ() {
  return (
    <main className="bg-surface-white min-h-screen">
      <FAQHero />
      <FAQAccordion />
      <Footer3 />
    </main>
  );
}
