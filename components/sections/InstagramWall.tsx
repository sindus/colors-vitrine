import Image from "next/image";
import { INSTAGRAM_IMAGES } from "@/lib/data";

export function InstagramWall() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[22px] pb-[100px] pt-[80px] lg:px-10">
      {/* Title */}
      <div className="mb-8 text-center">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">
          — Suivez-nous —
        </p>
        <h2
          className="mt-2 font-display italic font-normal text-forest"
          style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
        >
          @colors.boutique
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: 4 }}>
        {INSTAGRAM_IMAGES.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/colors.boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden bg-sand"
            style={{ aspectRatio: "1/1" }}
            aria-label={`Photo Instagram ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Instagram ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-[600ms] ease-[ease] group-hover:scale-[1.06]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
