import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
