import Link from "next/link";
import Image from "next/image";
import { MediaView } from "@/components/ui/MediaView";
import { PRODUCTS } from "@/lib/data";
import type { LookDuMomentData } from "@/lib/types";

const DEFAULTS: Omit<Required<LookDuMomentData>, "videoUrl"> = {
  overline: "— Le look du moment —",
  titleBefore: "« L'été",
  titleEmphasis: "indien",
  paragraph:
    "La Robe Mireille portée avec le Foulard Anouk dans les cheveux — la lumière de fin d'après-midi fait le reste.",
  imageUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1600&q=90",
  products: [],
};

type Props = { data?: LookDuMomentData };

export function LookDuMoment({ data }: Props) {
  const d = { ...DEFAULTS, ...data };

  const featuredProducts =
    d.products && d.products.length > 0
      ? d.products
      : [
          PRODUCTS.find((p) => p.id === "robe-mireille")!,
          PRODUCTS.find((p) => p.id === "foulard-anouk")!,
        ];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[22px] py-[80px] lg:px-10 lg:py-[120px]">
      <div className="contents lg:grid lg:items-center lg:gap-16" style={{ gridTemplateColumns: "7fr 5fr" }}>
        {/* Text — first in DOM so it appears before media on mobile */}
        <div className="mb-8 lg:col-start-2 lg:mb-0">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">
            {d.overline}
          </p>
          <h2
            className="mt-4 font-display font-normal text-forest"
            style={{ fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 0.96, letterSpacing: "-0.02em" }}
          >
            {d.titleBefore}
            <br />
            <em className="italic">{d.titleEmphasis}</em>&nbsp;»
          </h2>
          <p className="mt-6 max-w-[380px] font-sans text-[16px] font-light leading-[1.7] text-muted-strong">
            {d.paragraph}
          </p>

          {/* Product thumbnails — desktop only (inside text column) */}
          <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
            {featuredProducts.filter(Boolean).map((product) => (
              <Link
                key={product.id}
                href={`/lookbook/${product.id}`}
                className="group flex items-center gap-3 bg-cream-deep p-3 pr-5 transition-colors duration-200 hover:bg-sand"
              >
                <div className="relative shrink-0 overflow-hidden bg-sand" style={{ width: 48, height: 60 }}>
                  <Image src={product.image} alt={product.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-display text-[18px] leading-tight text-forest">{product.name}</p>
                  {product.price != null && (
                    <p className="font-sans text-[12px] text-muted">{product.price}€</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Link — desktop only */}
          <div className="mt-8 hidden lg:block">
            <Link href="/lookbook" className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest">
              Voir tout le lookbook →
            </Link>
          </div>
        </div>

        {/* Image or video — second in DOM so it appears after text on mobile */}
        <div className="relative overflow-hidden bg-sand lg:col-start-1" style={{ aspectRatio: "5/6" }}>
          <MediaView
            imageUrl={d.videoUrl ? null : d.imageUrl}
            videoUrl={d.videoUrl}
            alt="Look du moment"
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>

        {/* Product thumbnails — mobile only, after media */}
        <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
          {featuredProducts.filter(Boolean).map((product) => (
            <Link
              key={product.id}
              href={`/lookbook/${product.id}`}
              className="group flex items-center gap-3 bg-cream-deep p-3 pr-5 transition-colors duration-200 hover:bg-sand"
            >
              <div className="relative shrink-0 overflow-hidden bg-sand" style={{ width: 48, height: 60 }}>
                <Image src={product.image} alt={product.name} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-[18px] leading-tight text-forest">{product.name}</p>
                {product.price != null && (
                  <p className="font-sans text-[12px] text-muted">{product.price}€</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Link — mobile only, after thumbnails */}
        <div className="mt-6 lg:hidden">
          <Link href="/lookbook" className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest">
            Voir tout le lookbook →
          </Link>
        </div>
      </div>
    </section>
  );
}
