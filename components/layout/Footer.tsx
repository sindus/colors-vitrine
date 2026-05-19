import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cream-deep px-10 pb-8 pt-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3">
        <p className="font-sans text-[12px] text-muted-strong">
          © 2026 colors — Tous droits réservés
        </p>
        <Link
          href="/mentions-legales"
          className="font-sans text-[12px] text-muted-strong underline hover:text-forest"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
