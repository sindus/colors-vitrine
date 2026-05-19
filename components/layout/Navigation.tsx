"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SearchOverlay } from "./SearchOverlay";

type Props = { address?: string };

export function Navigation({ address = "42 rue Mercière, Lyon" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-all duration-[250ms] ease-[ease]"
        style={{
          backgroundColor: scrolled ? "rgba(243,239,230,0.92)" : "#f3efe6",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #dfd3bd" : "1px solid transparent",
        }}
      >
        <nav className="mx-auto max-w-[1440px] px-10">
          {/* Desktop nav (>800px) */}
          <div className="hidden h-[74px] items-center [display:grid] [grid-template-columns:1fr_auto_1fr] [@media(max-width:800px)]:hidden">
            {/* Left */}
            <div>
              <Link
                href="/lookbook"
                className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-forest"
              >
                Lookbook
              </Link>
            </div>
            {/* Center logo */}
            <Link
              href="/"
              className="font-display text-[32px] font-semibold leading-none tracking-[-0.01em] text-forest"
              style={{ letterSpacing: "-0.01em" }}
            >
              colors
            </Link>
            {/* Right */}
            <div className="flex justify-end">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Rechercher"
                className="text-forest transition-opacity hover:opacity-70"
              >
                <SearchIcon />
              </button>
            </div>
          </div>

          {/* Mobile nav (≤800px) */}
          <div className="hidden h-[62px] items-center justify-between [@media(max-width:800px)]:flex">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Menu"
              className="text-forest"
            >
              <BurgerIcon />
            </button>
            <Link
              href="/"
              className="font-display text-[26px] font-semibold leading-none tracking-[-0.01em] text-forest"
            >
              colors
            </Link>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Rechercher"
              className="text-forest"
            >
              <SearchIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "rgba(40,30,20,0.3)" }}
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="absolute inset-y-0 left-0 flex w-80 flex-col bg-cream"
            style={{
              animation: "slideInLeft 320ms cubic-bezier(.22,.7,.3,1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="font-display text-[26px] font-semibold leading-none tracking-[-0.01em] text-forest"
              >
                colors
              </Link>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Fermer"
                className="text-[24px] leading-none text-forest"
              >
                ×
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex flex-col">
              <Link
                href="/lookbook"
                onClick={() => setDrawerOpen(false)}
                className="border-b border-sand-deep px-6 py-[18px] font-display text-[38px] leading-tight text-forest hover:text-ochre-deep"
              >
                Lookbook
              </Link>
            </nav>

            {/* Drawer footer */}
            <div className="mt-auto px-6 pb-8">
              <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-muted">
                {address}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" strokeLinecap="round" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
