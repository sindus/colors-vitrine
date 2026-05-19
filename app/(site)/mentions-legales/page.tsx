export const revalidate = 60;

import Link from "next/link";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function MentionsLegalesPage() {
  const settings = await getSiteSettings();
  const content = settings?.mentionsLegales;

  return (
    <div className="mx-auto w-full max-w-[800px] px-[22px] pb-[120px] pt-[80px] lg:px-10">
      <p className="mb-6 font-sans text-[12px] text-muted">
        <Link href="/" className="hover:text-forest">
          Accueil
        </Link>{" "}
        / <span className="text-forest">Mentions légales</span>
      </p>

      <h1
        className="mb-12 font-display font-normal text-forest"
        style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.02em" }}
      >
        Mentions légales
      </h1>

      {content ? (
        <div
          className="font-sans text-[15px] leading-[1.8] text-muted-strong"
          style={{ whiteSpace: "pre-line" }}
        >
          {content}
        </div>
      ) : (
        <p className="font-display italic text-[20px] text-muted">
          Page en cours de rédaction.
        </p>
      )}
    </div>
  );
}
