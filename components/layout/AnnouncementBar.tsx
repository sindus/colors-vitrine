"use client";

import { useEffect, useState } from "react";

const DEFAULT_MESSAGES = [
  "Livraison offerte dès 80€ d'achat",
  "Nouvelle collection « Soleils d'été » disponible",
  "Retours gratuits sous 30 jours",
];

type Props = {
  messages?: string[];
};

export function AnnouncementBar({ messages = DEFAULT_MESSAGES }: Props) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const list = messages.length > 0 ? messages : DEFAULT_MESSAGES;

  useEffect(() => {
    if (list.length <= 1) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % list.length);
        setVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, [list.length]);

  return (
    <div className="flex h-9 items-center justify-center bg-forest px-4" aria-live="polite">
      <p
        className="font-sans text-[12px] uppercase tracking-[0.14em] text-cream transition-opacity duration-[600ms]"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {list[current]}
      </p>
    </div>
  );
}
