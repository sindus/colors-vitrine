"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Livraison offerte dès 80€ d'achat",
  "Nouvelle collection « Soleils d'été » disponible",
  "Retours gratuits sous 30 jours",
];

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex h-9 items-center justify-center bg-forest px-4"
      aria-live="polite"
    >
      <p
        className="font-sans text-[12px] uppercase tracking-[0.14em] text-cream transition-opacity duration-[600ms]"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {MESSAGES[current]}
      </p>
    </div>
  );
}
