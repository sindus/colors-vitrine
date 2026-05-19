import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";

type Props = {
  product: Product;
  index: number;
};

export function MosaicCard({ product, index }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/lookbook/${product.id}`}
      className="group relative block overflow-hidden bg-sand"
    >
      {/* Image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(.22,.7,.3,1)] group-hover:scale-[1.04]"
      />

      {/* Index */}
      <span
        className="absolute left-4 top-4 font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-cream"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
      >
        № {num}
      </span>

      {/* Bottom gradient + caption */}
      <div
        className="absolute inset-x-0 bottom-0 px-[22px] pb-[22px] pt-[60px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(20,40,30,0.78))",
        }}
      >
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-[22px] italic leading-tight text-cream">
              {product.name}
            </p>
            <p
              className="mt-1 font-sans text-[11px] text-cream"
              style={{ opacity: 0.85 }}
            >
              {product.tagline}
            </p>
          </div>
          <p
            className="shrink-0 border-l pl-3 font-sans text-[13px] font-medium text-cream"
            style={{ borderColor: "rgba(243,239,230,0.4)" }}
          >
            {product.price}€
          </p>
        </div>
      </div>

      {/* Hover pill */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="scale-[0.92] px-[22px] py-[12px] font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-forest opacity-0 transition-all duration-[280ms] [transition-timing-function:cubic-bezier(.22,.7,.3,1)] group-hover:scale-100 group-hover:opacity-100"
          style={{ backgroundColor: "#f3efe6" }}
        >
          Voir la pièce →
        </span>
      </div>
    </Link>
  );
}
