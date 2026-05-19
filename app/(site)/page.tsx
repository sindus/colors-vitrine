export const revalidate = 60;

import { HeroSection } from "@/components/sections/HeroSection";
import { LookDuMoment } from "@/components/sections/LookDuMoment";
import { NouveautesSection } from "@/components/sections/NouveautesSection";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { IndemodablesSection } from "@/components/sections/IndemodablesSection";
import { InstagramWall } from "@/components/sections/InstagramWall";
import { NewsletterStrip } from "@/components/sections/NewsletterStrip";
import { getHomepage } from "@/lib/sanity/queries";

export default async function HomePage() {
  const homepage = await getHomepage();

  return (
    <>
      <HeroSection data={homepage?.hero} />
      <LookDuMoment data={homepage?.lookDuMoment} />
      <NouveautesSection data={homepage?.nouveautes} />
      <EditorialSplit data={homepage?.editorial} />
      <IndemodablesSection data={homepage?.indemodables} />
      <InstagramWall data={homepage?.instagram} />
      <NewsletterStrip data={homepage?.newsletter} />
    </>
  );
}
