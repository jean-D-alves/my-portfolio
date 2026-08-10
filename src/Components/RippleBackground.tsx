/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

interface Sticker {
  id: number;
  offset: number;
  delay: number;
}

const STICKER_COUNT = 15;
const MOBILE_BREAKPOINT = 768;

export default function RippleBackground() {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mql.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const generated = Array.from({ length: STICKER_COUNT }, (_, i) => ({
      id: i,
      offset: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setStickers(generated);
    setReady(true);
  }, [isMobile]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#171717] transition-opacity duration-10000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {stickers.map((s) => (
          <span
            key={s.id}
            className={`absolute bg-primary StikerBackground -rotate-45 rounded-2xl w-36 h-4 ${
              isMobile ? "-left-80 top-10" : "bottom-4"
            }`}
            style={{
              [isMobile ? "top" : "left"]: `${s.offset}%`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}