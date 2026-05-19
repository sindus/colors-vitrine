import Image from "next/image";
import { INSTAGRAM_IMAGES } from "@/lib/data";
import type { InstagramData } from "@/lib/types";

type Props = { data?: InstagramData };

export function InstagramWall({ data }: Props) {
  const overline = data?.overline ?? "— Suivez-nous —";
  const handle = data?.handle ?? "colors.boutique";
  const profileUrl = `https://instagram.com/${handle.replace("@", "")}`;

  const posts =
    data?.images?.length
      ? data.images
      : INSTAGRAM_IMAGES.map((url) => ({ imageUrl: url, postUrl: null }));

  return (
    <section className="mx-auto w-full max-w-[1440px] px-[22px] pb-[100px] pt-[80px] lg:px-10">
      <div className="mb-8 text-center">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre-deep">{overline}</p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-display italic font-normal text-forest hover:opacity-75 transition-opacity"
          style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
        >
          @{handle.replace("@", "")}
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: 4 }}>
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.postUrl || profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden bg-sand"
            style={{ aspectRatio: "1/1" }}
            aria-label={`Photo Instagram ${i + 1}`}
          >
            <Image
              src={post.imageUrl}
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
