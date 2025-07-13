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

  return (
    <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-[#9BAB3C] transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-[#9BAB3C] text-white"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => {
                setPage(index);
                playFlipSound();
              }}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}
          <button
            className={`border-transparent hover:border-[#9BAB3C] transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-[#9BAB3C] text-white"
                : "bg-black/30 text-white"
            }`}
            onClick={() => {
              setPage(pages.length);
              playFlipSound();
            }}
          >
            Back Cover
          </button>
        </div>
      </div>
    </main>
  );
}; 