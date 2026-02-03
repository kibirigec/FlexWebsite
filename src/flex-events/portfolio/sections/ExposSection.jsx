import { MasonryGrid } from "../components/MasonryGrid";

const IMAGES = [
  "/expo1.jpeg", "/expo2.jpeg", "/expo3.jpeg",
  "/expo4.jpeg", "/expo5.jpeg", "/expo6.jpeg"
];

export function ExposSection() {
  return <MasonryGrid images={IMAGES} />;
}