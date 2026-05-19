"use client";

import { useState } from "react";
import Link from "next/link";
import { MediaView } from "@/components/ui/MediaView";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product, MediaItem } from "@/lib/types";

type AccordionItem = {
  label: string;
  content: React.ReactNode;
};

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const gallery: MediaItem[] =
    product.media && product.media.length > 0
      ? product.media
      : product.images.length > 0
        ? product.images.map((url) => ({ imageUrl: url }))
        : [{ imageUrl: product.image || null }];

  const accordionItems: AccordionItem[] = [
    { label: "Description", content: product.description },
    {
      label: "Détails & matières",
      content: (
        <ul className="list-disc pl-4">
          {product.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Livraison & retours",
      content:
        "Livraison offerte dès 80€ d'achat sous 2 à 4 jours ouvrés. Retours gratuits sous 30 jours dans toute la France métropolitaine.",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto w-full max-w-[1440px] px-[22px] pb-4 pt-10 lg:px-10">
        <p className="font-sans text-[12px] text-muted">
          <Link href="/" className="hover:text-forest">
            Accueil
          </Link>{" "}
          /{" "}
          <Link href="/lookbook" className="hover:text-forest">
            Lookbook
          </Link>{" "}
          / <span className="text-forest">{product.name}</span>
        </p>
      </div>

      {/* Main grid */}
      <div className="mx-auto w-full max-w-[1440px] px-[22px] pb-[100px] lg:px-10">
        {/* Desktop 3-column layout */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: "80px 1fr 480px", gap: 40 }}>
          {/* Col 1: Thumbnails */}
          <div className="flex flex-col gap-3" style={{ position: "sticky", top: 110, alignSelf: "start" }}>
            {gallery.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="relative overflow-hidden bg-sand transition-opacity"
                style={{
                  aspectRatio: "3/4",
                  width: 80,
                  opacity: i === activeImage ? 1 : 0.65,
                  border: i === activeImage ? "1px solid #1d5236" : "1px solid transparent",
                }}
                aria-label={`Média ${i + 1}`}
              >
                <MediaView
                  imageUrl={item.imageUrl}
                  videoUrl={item.videoUrl}
                  alt={`${product.name} - vue ${i + 1}`}
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Col 2: Main media */}
          <div className="relative overflow-hidden bg-sand" style={{ aspectRatio: "3/4" }}>
            <MediaView
              imageUrl={gallery[activeImage]?.imageUrl}
              videoUrl={gallery[activeImage]?.videoUrl}
              alt={product.name}
              sizes="(max-width: 1440px) 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Col 3: Info */}
          <div className="pl-6">
            <ProductInfo
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
              accordionItems={accordionItems}
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden bg-sand" style={{ aspectRatio: "3/4" }}>
            <MediaView
              imageUrl={gallery[activeImage]?.imageUrl}
              videoUrl={gallery[activeImage]?.videoUrl}
              alt={product.name}
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-2">
              {gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="relative overflow-hidden bg-sand"
                  style={{
                    width: 56,
                    height: 72,
                    border: i === activeImage ? "1px solid #1d5236" : "1px solid transparent",
                    opacity: i === activeImage ? 1 : 0.65,
                  }}
                  aria-label={`Média ${i + 1}`}
                >
                  <MediaView
                    imageUrl={item.imageUrl}
                    videoUrl={item.videoUrl}
                    alt={`${product.name} - vue ${i + 1}`}
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
          <div className="mt-8">
            <ProductInfo
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
              accordionItems={accordionItems}
            />
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-cream-deep px-[22px] py-[80px] lg:px-10 lg:py-[120px]">
          <div className="mx-auto max-w-[1440px]">
            <h2
              className="mb-10 font-display italic font-normal text-forest"
              style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
            >
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ProductInfo({
  product,
  selectedSize,
  setSelectedSize,
  openAccordion,
  setOpenAccordion,
  accordionItems,
}: {
  product: Product;
  selectedSize: string | null;
  setSelectedSize: (s: string | null) => void;
  openAccordion: number;
  setOpenAccordion: (i: number) => void;
  accordionItems: AccordionItem[];
}) {
  return (
    <>
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ochre-deep">
        {product.category.toUpperCase()}
      </p>
      <h1
        className="mt-2 font-display font-normal text-forest"
        style={{ fontSize: "clamp(36px, 3vw, 56px)", lineHeight: 1, letterSpacing: "-0.01em" }}
      >
        {product.name}
      </h1>
      <p className="mt-2 font-display italic text-[22px] leading-tight text-muted-strong">
        {product.tagline}
      </p>

      <div
        className="mt-4 flex items-baseline gap-2 pb-9"
        style={{ borderBottom: "1px solid #cdbfa3", marginBottom: 36 }}
      >
        <span className="font-sans text-[28px] font-normal text-forest">{product.price}€</span>
        <span className="font-sans text-[12px] text-muted">· TVA incluse</span>
      </div>

      <div className="mb-9">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest">
            Taille
          </p>
          <a href="#" className="font-sans text-[11px] text-muted underline hover:text-forest">
            Guide des tailles ↗
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(selectedSize === size ? null : size)}
              className="min-w-[52px] px-[14px] py-3 font-sans text-[12px] font-medium transition-colors duration-150"
              style={{
                border: "1px solid #cdbfa3",
                backgroundColor: selectedSize === size ? "#1d5236" : "transparent",
                color: selectedSize === size ? "#f3efe6" : "#1d5236",
                borderColor: selectedSize === size ? "#1d5236" : "#cdbfa3",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div
        className="mb-10 px-6 py-7"
        style={{ backgroundColor: "#ebe5d7", borderLeft: "2px solid #e3b76b" }}
      >
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ochre-deep">
          Pour réserver cette pièce
        </p>
        <p className="mt-2 font-display italic text-[22px] leading-tight text-forest">
          Envoyez-nous un message privé sur Instagram.
        </p>
        <p className="mt-3 font-sans text-[13px] font-light leading-[1.6] text-muted-strong">
          On vous répond dans la journée pour la mettre de côté en boutique et fixer un créneau
          d&apos;essayage.
        </p>
        <a
          href="https://instagram.com/colors.boutique"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-forest underline hover:text-ochre-deep"
        >
          @colors.boutique →
        </a>
      </div>

      <div>
        {accordionItems.map((item, i) => (
          <div key={i} style={{ borderTop: "1px solid #cdbfa3" }}>
            <button
              onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest">
                {item.label}
              </span>
              <span
                className="font-sans text-[18px] leading-none text-forest transition-transform duration-200"
                style={{ transform: openAccordion === i ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            {openAccordion === i && (
              <div className="pb-5 font-sans text-[14px] leading-[1.7] text-muted-strong">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
