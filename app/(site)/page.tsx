import { HeroSection } from "@/components/sections/HeroSection";
import { LookDuMoment } from "@/components/sections/LookDuMoment";
import { NouveautesSection } from "@/components/sections/NouveautesSection";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { IndemodablesSection } from "@/components/sections/IndemodablesSection";
import { InstagramWall } from "@/components/sections/InstagramWall";
import { NewsletterStrip } from "@/components/sections/NewsletterStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LookDuMoment />
      <NouveautesSection />
      <EditorialSplit />
      <IndemodablesSection />
      <InstagramWall />
      <NewsletterStrip />
    </>
  );
}
