export const revalidate = 60;

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <>
      <AnnouncementBar messages={settings?.announcementMessages} />
      <Navigation address={settings?.address} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
