"use client";

import { PortfolioMain } from "./components/PortfolioMain";
import { PortfolioCTA } from "./components/PortfolioCTA";
import { Footer3 } from "../../globalComps/Footer3";

export default function Page() {
  return (
    <main className="bg-surface-white">
      <PortfolioMain />
      <PortfolioCTA />
      <Footer3 />
    </main>
  );
}
