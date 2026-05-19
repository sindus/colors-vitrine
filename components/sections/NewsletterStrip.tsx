"use client";

import { useState } from "react";

export function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-forest px-[22px] py-[80px] lg:px-10 lg:py-[100px]">
      <div className="mx-auto max-w-[640px] text-center">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-ochre">
          — Notre rendez-vous —
        </p>
        <h2
          className="mt-4 font-display font-normal text-cream"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1 }}
        >
          Une lettre, deux fois par mois
        </h2>
        <p
          className="mt-4 font-sans text-[15px] font-light leading-[1.7] text-cream"
          style={{ opacity: 0.85 }}
        >
          Nouvelles arrivées, looks de saison et ventes privées.
          <br />
          Sans bruit, sans spam, juste l&apos;essentiel.
        </p>

        {status === "success" ? (
          <p
            className="mt-8 font-display italic text-ochre"
            style={{ fontSize: "22px" }}
          >
            Merci. À très vite. ✿
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div
              className="flex items-center"
              style={{ borderBottom: "1px solid #f3efe6" }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="min-w-0 flex-1 bg-transparent py-3 font-sans text-[15px] text-cream placeholder:text-cream focus:outline-none"
                style={{ opacity: email ? 1 : 0.7 }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 pl-4 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-70 disabled:opacity-50"
              >
                {status === "loading" ? "…" : "Je m'inscris →"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 font-sans text-[13px] text-ochre">
                Une erreur est survenue, veuillez réessayer.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
