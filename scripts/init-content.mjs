import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "va4xjtry",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function run() {
  console.log("Initialisation du contenu Sanity…");

  // Homepage singleton
  await client.createOrReplace({
    _id: "homepage",
    _type: "homepage",
    hero: {
      overline: "— Collection Printemps 2026",
      titleLine1: "Les couleurs",
      titleLine2Before: "de l'",
      titleEmphasis: "été",
      titleLine2After: " sont",
      titleLine3: "de retour.",
      paragraph:
        "Une garde-robe pensée pour la lumière. Des matières qui respirent, des coupes qui célèbrent, des couleurs qui réchauffent.",
      captionIndex: "Lookbook · 01 / 12",
      captionQuote: "« L'été indien »",
      captionProducts: "Robe Mireille · Foulard Anouk",
    },
    lookDuMoment: {
      titleBefore: "« L'été",
      titleEmphasis: "indien",
      paragraph:
        "La Robe Mireille portée avec le Foulard Anouk dans les cheveux — la lumière de fin d'après-midi fait le reste.",
    },
    nouveautes: {
      overline: "— Ce qui arrive —",
      title: "Nouveautés de la semaine",
    },
    editorial: {
      overline: "— Notre signature —",
      titleBefore: "Des pièces qui",
      titleEmphasis: "vous ressemblent.",
      paragraph1:
        "Chez colors, on aime les vêtements qu'on garde dix ans. Le lin lavé qui se patine, la viscose qui tombe juste, les broderies réalisées à la main dans nos ateliers européens.",
      paragraph2: "Une mode féminine, joyeuse, et profondément ancrée.",
    },
    indemodables: {
      overline: "— Vos préférés —",
      title: "Les indémodables",
    },
    instagram: {
      overline: "— Suivez-nous —",
      handle: "colors.boutique",
    },
    newsletter: {
      overline: "— Notre rendez-vous —",
      title: "Une lettre, deux fois par mois",
      paragraph:
        "Nouvelles arrivées, looks de saison et ventes privées.\nSans bruit, sans spam, juste l'essentiel.",
    },
  });
  console.log("✓ Homepage créée");

  // Site settings singleton
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    announcementMessages: [
      "Livraison offerte dès 80€ d'achat",
      "Nouvelle collection « Soleils d'été » disponible",
      "Retours gratuits sous 30 jours",
    ],
    address: "42 rue Mercière, Lyon",
    instagramHandle: "colors.boutique",
  });
  console.log("✓ Paramètres du site créés");

  console.log("\nTout est prêt. Ouvre /studio pour modifier le contenu.");
}

run().catch((err) => {
  console.error("Erreur :", err.message);
  process.exit(1);
});
