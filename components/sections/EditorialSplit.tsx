import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function EditorialSplit() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ minHeight: 640 }}
    >
      {/* Left: image */}
      <div className="relative min-h-[50vw] bg-sand lg:min-h-0" style={{ backgroundColor: "#dfd3bd" }}>
        <Image
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1600&q=90"
          alt="Notre signature"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Right: text */}
      <div
        className="flex flex-col justify-center px-[22px] py-16 lg:px-20 lg:py-[100px]"
        style={{ backgroundColor: "#ebe5d7" }}
      >
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">
          — Notre signature —
        </p>
        <h2
          className="mt-4 font-display font-normal text-forest"
          style={{
            fontSize: "clamp(40px, 4vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          Des pièces qui
          <br />
          <em className="italic">vous ressemblent.</em>
        </h2>
        <p className="mt-8 max-w-[520px] font-sans text-[16px] font-light leading-[1.8] text-muted-strong">
          Chez <em className="italic">colors</em>, on aime les vêtements
          qu&apos;on garde dix ans. Le lin lavé qui se patine, la viscose qui
          tombe juste, les broderies réalisées à la main dans nos ateliers
          européens.
        </p>
        <p className="mt-4 max-w-[520px] font-sans text-[16px] font-light leading-[1.8] text-muted-strong">
          Une mode féminine, joyeuse, et profondément ancrée.
        </p>
        <div className="mt-10">
          <Button href="/lookbook" variant="secondary" size="lg">
            Voir le lookbook
          </Button>
        </div>
      </div>
    </section>
  );
}
