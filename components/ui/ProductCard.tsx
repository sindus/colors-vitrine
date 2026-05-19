import Link from "next/link";
import { MediaView } from "@/components/ui/MediaView";
import type { Product } from "@/lib/types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const mainMedia = product.media?.[0] ?? { imageUrl: product.image || null };

  return (
    <Link href={`/lookbook/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-sand" style={{ aspectRatio: "3/4" }}>
        <MediaView
          imageUrl={mainMedia.imageUrl}
          videoUrl={mainMedia.videoUrl}
          alt={product.name}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-[ease] group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-[ease] group-hover:translate-y-0"
          style={{ backgroundColor: "rgba(243,239,230,0.96)" }}
        >
          <p className="px-[14px] py-[12px] font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-forest">
            Voir le produit →
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-display text-[20px] leading-tight text-forest">{product.name}</p>
          <p className="mt-0.5 font-sans text-[12px] text-muted">{product.tagline}</p>
        </div>
        <p className="shrink-0 font-sans text-[14px] font-medium text-forest">{product.price}€</p>
      </div>
    </Link>
  );
}
