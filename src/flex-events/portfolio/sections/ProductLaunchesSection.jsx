import { MasonryGrid } from "../components/MasonryGrid";

const IMAGES = [
  "/launch1.jpeg", "/launch2.jpeg", "/launch3.jpeg",
  "/launch4.jpeg", "/launch5.jpeg"
];

export function ProductLaunchesSection() {
  return <MasonryGrid images={IMAGES} />;
}