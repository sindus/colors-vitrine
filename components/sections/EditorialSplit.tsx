import { MediaView } from "@/components/ui/MediaView";
import { Button } from "@/components/ui/Button";
import type { EditorialData } from "@/lib/types";

const DEFAULTS: Omit<Required<EditorialData>, "videoUrl"> = {
  overline: "— Notre signature —",
  titleBefore: "Des pièces qui",
  titleEmphasis: "vous ressemblent.",
  paragraph1:
    "Chez ‹colors›, on aime les vêtements qu’on garde dix ans. Le lin lavé qui se patine, la viscose qui tombe juste, les broderies réalisées à la main dans nos ateliers européens.",
  paragraph2: "Une mode féminine, joyeuse, et profondément ancrée.",
  imageUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1600&q=90",
};

type Props = { data?: EditorialData };

export function EditorialSplit({ data }: Props) {
  const d = { ...DEFAULTS, ...data };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 640 }}>
      {/* Text — first in DOM so it appears before media on mobile */}
      <div className="flex flex-col justify-center px-[22px] py-16 lg:col-start-2 lg:px-20 lg:py-[100px]" style={{ backgroundColor: "#ebe5d7" }}>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">{d.overline}</p>
        <h2
          className="mt-4 font-display font-normal text-forest"
          style={{ fontSize: "clamp(40px, 4vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          {d.titleBefore}
          <br />
          <em className="italic">{d.titleEmphasis}</em>
        </h2>
        <p className="mt-8 max-w-[520px] font-sans text-[16px] font-light leading-[1.8] text-muted-strong">
          {d.paragraph1}
        </p>
        <p className="mt-4 max-w-[520px] font-sans text-[16px] font-light leading-[1.8] text-muted-strong">
          {d.paragraph2}
        </p>
        {/* Button visible on desktop only (inside text column) */}
        <div className="mt-10 hidden lg:block">
          <Button href="/lookbook" variant="secondary" size="lg">Voir le lookbook</Button>
        </div>
      </div>

      {/* Media — second in DOM so it appears after text on mobile */}
      <div className="relative min-h-[50vw] lg:col-start-1 lg:min-h-0" style={{ backgroundColor: "#dfd3bd" }}>
        <MediaView
          imageUrl={d.videoUrl ? null : d.imageUrl}
          videoUrl={d.videoUrl}
          alt="Notre signature"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Button mobile only — after media */}
      <div className="px-[22px] pb-12 pt-6 lg:hidden" style={{ backgroundColor: "#ebe5d7" }}>
        <Button href="/lookbook" variant="secondary" size="lg">Voir le lookbook</Button>
      </div>
    </section>
  );
}
