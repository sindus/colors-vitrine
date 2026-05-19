import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "colors — Boutique de vêtements féminins à Lyon",
    template: "%s | colors",
  },
  description:
    "Une garde-robe pensée pour la lumière. Des matières qui respirent, des coupes qui célèbrent. Boutique de vêtements féminins à Lyon.",
  openGraph: {
    siteName: "colors",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
