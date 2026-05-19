import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";

export function LookDuMoment() {
  const robe = PRODUCTS.find((p) => p.id === "robe-mireille")!;
  const foulard = PRODUCTS.find((p) => p.id === "foulard-anouk")!;

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[22px] py-[80px] lg:px-10 lg:py-[120px]">
      <div
        className="grid items-center gap-10 lg:gap-16"
        style={{ gridTemplateColumns: "1fr" }}
      >
        <div
          className="contents lg:grid lg:items-center lg:gap-16"
          style={{ gridTemplateColumns: "7fr 5fr" }}
        >
          {/* Image */}
          <div
            className="relative order-2 overflow-hidden bg-sand lg:order-1"
            style={{ aspectRatio: "5/6" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1600&q=90"
              alt="Look du moment — L'été indien"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">
              — Le look du moment —
            </p>
            <h2
              className="mt-4 font-display font-normal text-forest"
              style={{
                fontSize: "clamp(48px, 5vw, 72px)",
                lineHeight: 0.96,
                letterSpacing: "-0.02em",
              }}
            >
              «&nbsp;L&apos;été
              <br />
              <em className="italic">indien</em>&nbsp;»
            </h2>
            <p className="mt-6 max-w-[380px] font-sans text-[16px] font-light leading-[1.7] text-muted-strong">
              La Robe Mireille portée avec le Foulard Anouk dans les cheveux
              — la lumière de fin d&apos;après-midi fait le reste.
            </p>

            {/* Mini cards */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[robe, foulard].map((product) => (
                <Link
                  key={product.id}
                  href={`/lookbook/${product.id}`}
                  className="group flex items-center gap-3 bg-cream-deep p-3 pr-5 transition-colors duration-200 hover:bg-sand"
                >
                  <div
                    className="relative shrink-0 overflow-hidden bg-sand"
                    style={{ width: 48, height: 60 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[18px] leading-tight text-forest">
                      {product.name}
                    </p>
                    <p className="font-sans text-[12px] text-muted">
                      {product.price}€
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Link */}
            <div className="mt-8">
              <Link
                href="/lookbook"
                className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest"
              >
                Voir tout le lookbook →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
