"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { MosaicCard } from "@/components/ui/MosaicCard";
import { NewsletterStrip } from "@/components/sections/NewsletterStrip";
import { PRODUCTS, MOSAIC_PATTERN } from "@/lib/data";
import type { Product } from "@/lib/types";

type SortKey = "editorial" | "price-asc" | "price-desc" | "name-asc";

function sortProducts(products: Product[], sort: SortKey): Product[] {
  switch (sort) {
    case "price-asc":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...products].sort((a, b) => b.price - a.price);
    case "name-asc":
      return [...products].sort((a, b) => a.name.localeCompare(b.name, "fr"));
    default:
      return products;
  }
}

export default function LookbookPage() {
  const [sort, setSort] = useState<SortKey>("editorial");
  const products = useMemo(() => sortProducts(PRODUCTS, sort), [sort]);

  return (
    <>
      <div className="mx-auto w-full max-w-[1440px] px-[22px] lg:px-10">
        {/* Header */}
        <div className="pb-6 pt-[60px] lg:pt-[100px]">
          {/* Breadcrumb */}
          <p className="mb-6 font-sans text-[12px] text-muted">
            <Link href="/" className="hover:text-forest">
              Accueil
            </Link>{" "}
            /{" "}
            <span className="text-forest">Lookbook</span>
          </p>

          {/* Title row */}
          <div
            className="grid items-end gap-8 lg:gap-16"
            style={{ gridTemplateColumns: "1fr" }}
          >
            <div
              className="contents lg:grid lg:items-end lg:gap-16"
              style={{ gridTemplateColumns: "1.4fr 1fr" }}
            >
              {/* H1 */}
              <h1
                className="font-display italic font-normal"
                style={{
                  fontSize: "clamp(72px, 9vw, 144px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  color: "#b8843a",
                }}
              >
                Lookbook
              </h1>

              {/* Right col */}
              <div className="mt-4 lg:mt-0">
                <p className="font-display italic text-[22px] leading-[1.5] text-forest">
                  Une poignée de pièces, choisies une à une.
                </p>
                <p className="mt-3 font-sans text-[14px] leading-[1.7] text-muted-strong">
                  {PRODUCTS.length} pièces de la saison. Pas de filtres, pas de
                  rayons — juste une garde-robe complète, présentée comme on
                  l&apos;imagine dans une vraie matinée d&apos;été.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sort bar */}
        <div
          className="mb-6 flex flex-wrap items-center justify-between gap-3 py-[18px]"
          style={{
            borderTop: "1px solid #cdbfa3",
            borderBottom: "1px solid #cdbfa3",
          }}
        >
          <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-muted-strong">
            Printemps · Été 2026
          </p>
          <label className="flex items-center gap-2 font-sans text-[12px] text-muted-strong">
            Présentation :
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent font-sans text-[12px] text-forest focus:outline-none"
            >
              <option value="editorial">Éditoriale</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name-asc">Nom (A-Z)</option>
            </select>
          </label>
        </div>

        {/* Mosaic grid */}
        <div
          className="mb-[80px]"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "240px",
            gap: "24px",
            gridAutoFlow: "dense",
          }}
        >
          {products.slice(0, 12).map((product, i) => {
            const [colSpan, rowSpan] = MOSAIC_PATTERN[i] ?? [1, 1];
            return (
              <div
                key={product.id}
                className={`mosaic-cell-${colSpan}-${rowSpan}`}
              >
                <MosaicCard product={product} index={i} />
              </div>
            );
          })}
        </div>
      </div>

      <NewsletterStrip />
    </>
  );
}
