import { useEffect } from "react";

export function useFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .fade-in2, .fade-in3");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}
