import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/data";

export function IndemodablesSection() {
  const products = PRODUCTS.slice(4, 8);

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[22px] pb-[120px] pt-[80px] lg:px-10">
      {/* Header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">
            — Vos préférés —
          </p>
          <h2
            className="mt-2 font-display font-normal text-forest"
            style={{ fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 1.05 }}
          >
            Les indémodables
          </h2>
        </div>
        <Link
          href="/lookbook"
          className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest"
        >
          Voir le lookbook →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
