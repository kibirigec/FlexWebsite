import { MasonryGrid } from "../components/MasonryGrid";

const IMAGES = [
  "/concert1.jpeg", "/concert2.jpeg", "/concert3.jpeg",
  "/concert4.jpeg", "/concert5.jpeg"
];

export function ConcertsSection() {
  return <MasonryGrid images={IMAGES} />;
}