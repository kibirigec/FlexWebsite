import { MasonryGrid } from "../components/MasonryGrid";

const IMAGES = [
  "wedding-decor.jpeg", "wedding3.jpeg", "wedding4.jpeg",
  "weddingblue2.jpeg", "weddingfix.jpeg", "weddingmain.jpeg",
  "weddingmainside.jpeg", "weddingoutside.jpeg", "weddingplan.jpeg",
  "weddingtable.jpeg"
];

export function WeddingsSection() {
  return <MasonryGrid images={IMAGES} />;
}
  