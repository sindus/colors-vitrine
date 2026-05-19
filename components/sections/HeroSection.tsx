import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ minHeight: "calc(100vh - 110px)" }}
    >
      {/* Left: text */}
      <div className="flex flex-col justify-center px-[22px] py-16 lg:px-20 lg:py-20">
        {/* Overline */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8" style={{ backgroundColor: "#b8843a" }} />
          <p
            className="font-sans text-[11px] font-medium uppercase tracking-[0.28em]"
            style={{ color: "#b8843a" }}
          >
            — Collection Printemps 2026
          </p>
        </div>

        {/* H1 */}
        <h1
          className="font-display font-normal text-forest"
          style={{
            fontSize: "clamp(58px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          Les couleurs
          <br />
          de{" "}
          <em className="italic" style={{ color: "#b8843a" }}>
            l&apos;été
          </em>{" "}
          sont
          <br />
          de retour.
        </h1>

        {/* Paragraph */}
        <p
          className="mt-8 max-w-[420px] font-sans font-light leading-[1.7] text-muted-strong"
          style={{ fontSize: "16px" }}
        >
          Une garde-robe pensée pour la lumière. Des matières qui respirent, des
          coupes qui célèbrent, des couleurs qui réchauffent.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button href="/lookbook" size="lg">
            Voir le lookbook
          </Button>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative min-h-[60vw] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=90"
          alt="Collection Printemps 2026"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-10 pb-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-cream">
            Lookbook · 01 / 12
          </p>
          <div className="text-right">
            <p className="font-display text-[32px] italic leading-none text-cream">
              « L&apos;été indien »
            </p>
            <p className="mt-1 font-sans text-[11px] text-cream opacity-85">
              Robe Mireille · Foulard Anouk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
