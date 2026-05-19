import type { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "robe-mireille",
    name: "Robe Mireille",
    category: "Robes",
    price: 145,
    tagline: "Robe longue fluide en viscose",
    colors: ["Sable", "Olive", "Brique"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=85",
      "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=1400&q=85",
    ],
    description:
      "Une robe longue qui célèbre la lumière. Coupe ample, manches ballon délicates, ceinture à nouer pour souligner la taille. Tombé impeccable grâce à une viscose souple certifiée LENZING™ ECOVERO™.",
    details: [
      "100% viscose ECOVERO™",
      "Doublure coton bio",
      "Fabriquée au Portugal",
      "Lavable à 30°C",
    ],
  },
  {
    id: "robe-lou",
    name: "Robe Lou",
    category: "Robes",
    price: 165,
    tagline: "Robe mi-longue à fleurs",
    colors: ["Crème fleuri", "Vert fleuri"],
    sizes: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1400&q=85",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=85",
    ],
    description:
      "L'imprimé floral revisité, en plus délicat. Col V boutonné, taille smockée et volants subtils au bas de la jupe. À porter avec des sandales plates ou des santiags.",
    details: [
      "100% coton biologique",
      "Imprimé exclusif",
      "Fabriquée en France",
      "Lavable à 30°C",
    ],
  },
  {
    id: "top-capucine",
    name: "Top Capucine",
    category: "Tops",
    price: 78,
    tagline: "Blouse en lin brodée main",
    colors: ["Écru", "Terracotta", "Vert d'eau"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1400&q=85",
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1400&q=85",
    ],
    description:
      "Notre best-seller de la saison. Lin lavé, broderie anglaise réalisée à la main au Portugal, encolure carrée flatteuse. Se porte rentrée dans un jean ou flottante sur un short en lin.",
    details: [
      "100% lin européen",
      "Broderie main",
      "Fabriquée au Portugal",
      "Lavable à 30°C",
    ],
  },
  {
    id: "top-ines",
    name: "Top Inès",
    category: "Tops",
    price: 65,
    tagline: "Top à bretelles en satin",
    colors: ["Crème", "Sauge", "Or"],
    sizes: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=1400&q=85",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=85",
    ],
    description:
      "Le top satiné qui change tout. Coupe droite, bretelles fines réglables, dos nu délicat. Parfait sous un blazer pour le bureau, ou avec un jean baggy le soir.",
    details: [
      "95% viscose, 5% élasthanne",
      "Tissu satiné mat",
      "Fabriqué en France",
      "Lavable à 30°C",
    ],
  },
  {
    id: "pantalon-romy",
    name: "Pantalon Romy",
    category: "Pantalons",
    price: 125,
    tagline: "Pantalon large en lin",
    colors: ["Sable", "Olive", "Noir"],
    sizes: ["34", "36", "38", "40", "42", "44"],
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1400&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=85",
    ],
    description:
      "La coupe qui fait la jambe. Taille haute, plis marqués, jambe large fluide. Le lin lavé garantit un tombé parfait et une fraîcheur incomparable.",
    details: [
      "100% lin",
      "Taille haute",
      "Fabriqué au Portugal",
      "Lavable à 30°C",
    ],
  },
  {
    id: "pantalon-solene",
    name: "Pantalon Solène",
    category: "Pantalons",
    price: 135,
    tagline: "Jean droit taille haute",
    colors: ["Brut", "Délavé"],
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31"],
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1400&q=85",
    ],
    description:
      "Le jean parfait, vraiment. Coton biologique, denim japonais, coupe droite légèrement évasée. Taille haute qui sculpte la silhouette.",
    details: [
      "100% coton bio",
      "Denim japonais Kaihara",
      "Fabriqué au Portugal",
      "Lavable à 30°C",
    ],
  },
  {
    id: "tshirt-aimee",
    name: "T-shirt Aimée",
    category: "T-shirts",
    price: 48,
    tagline: "T-shirt en coton flammé",
    colors: ["Crème", "Sauge", "Brique", "Noir"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=1400&q=85",
    ],
    description:
      "Le t-shirt qu'on enfile tous les jours. Coton flammé épais, encolure ronde nette, manches mi-longues. Coupe ajustée mais pas moulante.",
    details: [
      "100% coton bio flammé",
      "200g/m²",
      "Fabriqué au Portugal",
      "Lavable à 30°C",
    ],
  },
  {
    id: "tshirt-soline",
    name: "T-shirt Soline",
    category: "T-shirts",
    price: 55,
    tagline: "T-shirt brodé à la poitrine",
    colors: ["Crème", "Sauge"],
    sizes: ["XS", "S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1400&q=85",
    ],
    description:
      "Notre signature brodée à la poitrine — un petit clin d'œil discret. Coton biologique épais, coupe oversize relax.",
    details: [
      "100% coton bio",
      "Broderie machine",
      "Fabriqué au Portugal",
      "Lavable à 30°C",
    ],
  },
  {
    id: "sac-leonie",
    name: "Sac Léonie",
    category: "Accessoires",
    price: 95,
    tagline: "Sac seau en cuir",
    colors: ["Caramel", "Chocolat", "Noir"],
    sizes: ["TU"],
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400&q=85",
    ],
    description:
      "Un sac qui se patine joliment avec le temps. Cuir pleine fleur tanné végétal, fermeture à cordon, bandoulière ajustable. Format idéal pour le quotidien.",
    details: [
      "Cuir de vachette pleine fleur",
      "Tannage végétal",
      "Fabriqué en Italie",
    ],
  },
  {
    id: "foulard-anouk",
    name: "Foulard Anouk",
    category: "Accessoires",
    price: 38,
    tagline: "Foulard en soie imprimé",
    colors: ["Soleil", "Bleu nuit"],
    sizes: ["TU"],
    image:
      "https://images.unsplash.com/photo-1601370552761-3129ad1a4bf6?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1601370552761-3129ad1a4bf6?w=1400&q=85",
    ],
    description:
      "Un imprimé exclusif dessiné dans notre atelier parisien. Soie pure 90×90 cm, ourlets roulottés main. À nouer dans les cheveux, autour du cou ou au sac.",
    details: [
      "100% soie",
      "90×90 cm",
      "Ourlets roulottés main",
      "Fabriqué en France",
    ],
  },
  {
    id: "boucles-elia",
    name: "Boucles Elia",
    category: "Accessoires",
    price: 32,
    tagline: "Boucles d'oreilles dorées",
    colors: ["Or", "Argent"],
    sizes: ["TU"],
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=1400&q=85",
    ],
    description:
      "Des créoles fines, à porter tous les jours. Laiton plaqué or 3 microns, anneaux soudés pour éviter les déformations.",
    details: ["Laiton plaqué or 3µ", "Diamètre 3 cm", "Fabriqué en France"],
  },
  {
    id: "chemise-margaux",
    name: "Chemise Margaux",
    category: "Tops",
    price: 98,
    tagline: "Chemise oversize en popeline",
    colors: ["Blanc", "Rayé"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1400&q=85",
    ],
    description:
      "La chemise oversize qu'on emprunte (et qu'on garde). Coton bio, coupe ample, col classique, finitions soignées.",
    details: ["100% coton bio", "Boutons en nacre", "Fabriquée au Portugal"],
  },
];

export const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
  "https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=600&q=80",
];

// Mosaic pattern: [colSpan, rowSpan] for 12 cells
export const MOSAIC_PATTERN: [number, number][] = [
  [2, 3],
  [1, 2],
  [1, 1],
  [1, 1],
  [1, 2],
  [2, 2],
  [1, 1],
  [1, 1],
  [2, 2],
  [1, 2],
  [1, 1],
  [1, 1],
];
