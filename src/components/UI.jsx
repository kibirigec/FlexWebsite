import { atom, useAtom } from "jotai";
import { useEffect } from "react";

// Update these image names to match your actual images in public/textures
const pictures = [
  "weddingmain",
  "weddingmainside",
  "weddingoutside",
  "weddingblue2",
  "wedding-decor",
  "night-lights",
  "audio1",
  "audio2"
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  const playFlipSound = () => {
    const audio = new Audio("/sounds/page-flip.mp3");
    audio.play();
  };

  return null;
}; 