import { createClient } from "@sanity/client";

const PROJECT_ID = "va4xjtry";
const DATASET = "production";
const TOKEN = process.env.SANITY_API_TOKEN;

if (!TOKEN) {
  console.error("SANITY_API_TOKEN manquant");
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

const PRODUCTS = [
  {
    _type: "product",
    name: "Robe Mireille",
    slug: { _type: "slug", current: "robe-mireille" },
    category: "Robes",
    price: 145,
    tagline: "Robe longue fluide en viscose",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Une robe longue qui célèbre la lumière. Coupe ample, manches ballon délicates, ceinture à nouer pour souligner la taille. Tombé impeccable grâce à une viscose souple certifiée LENZING™ ECOVERO™.",
    details: ["100% viscose ECOVERO™", "Doublure coton bio", "Fabriquée au Portugal", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "Robe Lou",
    slug: { _type: "slug", current: "robe-lou" },
    category: "Robes",
    price: 165,
    tagline: "Robe mi-longue à fleurs",
    sizes: ["XS", "S", "M", "L"],
    description:
      "L'imprimé floral revisité, en plus délicat. Col V boutonné, taille smockée et volants subtils au bas de la jupe. À porter avec des sandales plates ou des santiags.",
    details: ["100% coton biologique", "Imprimé exclusif", "Fabriquée en France", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "Top Capucine",
    slug: { _type: "slug", current: "top-capucine" },
    category: "Tops",
    price: 78,
    tagline: "Blouse en lin brodée main",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Notre best-seller de la saison. Lin lavé, broderie anglaise réalisée à la main au Portugal, encolure carrée flatteuse. Se porte rentrée dans un jean ou flottante sur un short en lin.",
    details: ["100% lin européen", "Broderie main", "Fabriquée au Portugal", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "Top Inès",
    slug: { _type: "slug", current: "top-ines" },
    category: "Tops",
    price: 65,
    tagline: "Top à bretelles en satin",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Le top satiné qui change tout. Coupe droite, bretelles fines réglables, dos nu délicat. Parfait sous un blazer pour le bureau, ou avec un jean baggy le soir.",
    details: ["95% viscose, 5% élasthanne", "Tissu satiné mat", "Fabriqué en France", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "Pantalon Romy",
    slug: { _type: "slug", current: "pantalon-romy" },
    category: "Pantalons",
    price: 125,
    tagline: "Pantalon large en lin",
    sizes: ["34", "36", "38", "40", "42", "44"],
    description:
      "La coupe qui fait la jambe. Taille haute, plis marqués, jambe large fluide. Le lin lavé garantit un tombé parfait et une fraîcheur incomparable.",
    details: ["100% lin", "Taille haute", "Fabriqué au Portugal", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "Pantalon Solène",
    slug: { _type: "slug", current: "pantalon-solene" },
    category: "Pantalons",
    price: 135,
    tagline: "Jean droit taille haute",
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
    description:
      "Le jean parfait, vraiment. Coton biologique, denim japonais, coupe droite légèrement évasée. Taille haute qui sculpte la silhouette.",
    details: ["100% coton bio", "Denim japonais Kaihara", "Fabriqué au Portugal", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "T-shirt Aimée",
    slug: { _type: "slug", current: "tshirt-aimee" },
    category: "T-shirts",
    price: 48,
    tagline: "T-shirt en coton flammé",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Le t-shirt qu'on enfile tous les jours. Coton flammé épais, encolure ronde nette, manches mi-longues. Coupe ajustée mais pas moulante.",
    details: ["100% coton bio flammé", "200g/m²", "Fabriqué au Portugal", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "T-shirt Soline",
    slug: { _type: "slug", current: "tshirt-soline" },
    category: "T-shirts",
    price: 55,
    tagline: "T-shirt brodé à la poitrine",
    sizes: ["XS", "S", "M", "L"],
    description:
      "Notre signature brodée à la poitrine — un petit clin d'œil discret. Coton biologique épais, coupe oversize relax.",
    details: ["100% coton bio", "Broderie machine", "Fabriqué au Portugal", "Lavable à 30°C"],
  },
  {
    _type: "product",
    name: "Sac Léonie",
    slug: { _type: "slug", current: "sac-leonie" },
    category: "Accessoires",
    price: 95,
    tagline: "Sac seau en cuir",
    sizes: ["TU"],
    description:
      "Un sac qui se patine joliment avec le temps. Cuir pleine fleur tanné végétal, fermeture à cordon, bandoulière ajustable. Format idéal pour le quotidien.",
    details: ["Cuir de vachette pleine fleur", "Tannage végétal", "Fabriqué en Italie"],
  },
  {
    _type: "product",
    name: "Foulard Anouk",
    slug: { _type: "slug", current: "foulard-anouk" },
    category: "Accessoires",
    price: 38,
    tagline: "Foulard en soie imprimé",
    sizes: ["TU"],
    description:
      "Un imprimé exclusif dessiné dans notre atelier parisien. Soie pure 90×90 cm, ourlets roulottés main. À nouer dans les cheveux, autour du cou ou au sac.",
    details: ["100% soie", "90×90 cm", "Ourlets roulottés main", "Fabriqué en France"],
  },
  {
    _type: "product",
    name: "Boucles Elia",
    slug: { _type: "slug", current: "boucles-elia" },
    category: "Accessoires",
    price: 32,
    tagline: "Boucles d'oreilles dorées",
    sizes: ["TU"],
    description:
      "Des créoles fines, à porter tous les jours. Laiton plaqué or 3 microns, anneaux soudés pour éviter les déformations.",
    details: ["Laiton plaqué or 3µ", "Diamètre 3 cm", "Fabriqué en France"],
  },
  {
    _type: "product",
    name: "Chemise Margaux",
    slug: { _type: "slug", current: "chemise-margaux" },
    category: "Tops",
    price: 98,
    tagline: "Chemise oversize en popeline",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "La chemise oversize qu'on emprunte (et qu'on garde). Coton bio, coupe ample, col classique, finitions soignées.",
    details: ["100% coton bio", "Boutons en nacre", "Fabriquée au Portugal"],
  },
];

async function run() {
  console.log(`Connexion à Sanity (projet: ${PROJECT_ID})…`);

  // Check existing docs
  const existing = await client.fetch(`count(*[_type == "product"])`);
  if (existing > 0) {
    console.log(`⚠️  ${existing} produit(s) déjà présents — suppression avant reimport…`);
    const ids = await client.fetch(`*[_type == "product"]._id`);
    await client.delete({ query: '*[_type == "product"]' });
    console.log(`✓ ${ids.length} produit(s) supprimé(s)`);
  }

  const transaction = client.transaction();
  for (const product of PRODUCTS) {
    transaction.create(product);
  }

  await transaction.commit();
  console.log(`✓ ${PRODUCTS.length} produits importés avec succès !`);
}

run().catch((err) => {
  console.error("Erreur :", err.message);
  process.exit(1);
});
