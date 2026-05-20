import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/data";
import type { SectionWithProducts } from "@/lib/types";

type Props = { data?: SectionWithProducts };

export function NouveautesSection({ data }: Props) {
  const overline = data?.overline ?? "— Ce qui arrive —";
  const title = data?.title ?? "Nouveautés de la semaine";
  const products = data?.products?.length ? data.products : PRODUCTS.slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[22px] pb-[120px] pt-[60px] lg:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">{overline}</p>
          <h2 className="mt-2 font-display font-normal text-forest" style={{ fontSize: "clamp(32px, 3vw, 48px)", lineHeight: 1.05 }}>
            {title}
          </h2>
        </div>
        <Link href="/lookbook" className="nav-link hidden font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest lg:block">
          Voir le lookbook →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 lg:hidden">
        <Link href="/lookbook" className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest">
          Voir le lookbook →
        </Link>
      </div>
    </section>
  );
}
