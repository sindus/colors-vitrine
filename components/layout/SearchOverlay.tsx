"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import type { Product } from "@/lib/types";

const POPULAR_CHIPS = ["Robe Mireille", "Lin", "Pantalon large", "Foulard"];

type Props = {
  onClose: () => void;
};

export function SearchOverlay({ onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results: Product[] =
    query.length > 1
      ? PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category?.toLowerCase().includes(query.toLowerCase()) ||
            p.tagline.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6)
      : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16"
      style={{ backgroundColor: "rgba(40,30,20,0.4)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-[720px] bg-cream p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-6 top-6 text-[22px] leading-none text-muted hover:text-forest"
        >
          ×
        </button>

        {/* Input */}
        <div className="flex items-center gap-3 border-b border-sand-deep pb-4">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-muted">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5 21 21" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une pièce…"
            className="w-full bg-transparent font-display text-[26px] leading-none text-forest placeholder:text-muted focus:outline-none"
          />
        </div>

        {/* Chips or results */}
        <div className="mt-6">
          {query.length <= 1 ? (
            <>
              <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.24em] text-muted">
                Recherches populaires
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setQuery(chip)}
                    className="border border-sand-deep px-[14px] py-2 font-sans text-[12px] text-forest transition-colors hover:border-forest hover:bg-cream-deep"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </>
          ) : results.length > 0 ? (
            <ul className="divide-y divide-sand">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/lookbook/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 py-3 hover:bg-cream-deep"
                  >
                    <div
                      className="relative shrink-0 overflow-hidden bg-sand"
                      style={{ width: 56, height: 72 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[20px] leading-tight text-forest">
                        {product.name}
                      </p>
                      <p className="font-sans text-[12px] text-muted">
                        {product.tagline}
                      </p>
                    </div>
                    <p className="shrink-0 font-sans text-[14px] font-medium text-forest">
                      {product.price}€
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-sans text-[14px] text-muted">
              Aucune pièce ne correspond.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
