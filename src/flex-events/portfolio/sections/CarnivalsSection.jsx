import { MasonryGrid } from "../components/MasonryGrid";

const IMAGES = [
  "/carnival1.jpeg", "/carnival2.jpeg", "/carnival3.jpeg",
  "/carnival4.jpeg", "/carnival5.jpeg"
];

export function CarnivalsSection() {
  return <MasonryGrid images={IMAGES} />;
}