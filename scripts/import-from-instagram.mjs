import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

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

function parseCaption(caption) {
  const lines = caption.split("\n");

  // Première ligne : nom du produit (on retire les emoji et la ponctuation finale)
  const name = lines[0]
    .replace(/\p{Emoji}/gu, "")
    .replace(/[:.]+$/, "")
    .trim();

  // Lignes de contenu : on filtre les lignes vides, les infos logistiques et les hashtags
  const contentLines = lines.slice(1).filter((l) => {
    const t = l.trim();
    return (
      t.length > 0 &&
      !t.startsWith("📦") &&
      !t.startsWith("📩") &&
      !t.startsWith("#") &&
      !/^\p{Emoji}/u.test(t)
    );
  });

  const tagline = contentLines[0] || name;

  // Description : le contenu utile du post, sans les lignes logistiques
  const description = contentLines.join("\n").trim() || name;

  return { name, tagline, description };
}

async function uploadImage(url, filename) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: "image/jpeg",
  });
  return asset._id;
}

async function run() {
  const raw = readFileSync(
    new URL("../../external/colors.json", import.meta.url),
    "utf-8"
  );
  const products = JSON.parse(raw);

  console.log(`${products.length} produits à importer depuis Instagram…\n`);

  for (const [i, item] of products.entries()) {
    const { shortCode, caption, images } = item;
    const { name, tagline, description } = parseCaption(caption);

    console.log(`[${i + 1}/${products.length}] ${name}`);

    // Upload des images vers Sanity
    const mediaItems = [];
    for (const [j, url] of images.entries()) {
      try {
        process.stdout.write(`  Image ${j + 1}/${images.length}… `);
        const assetId = await uploadImage(url, `${shortCode}-${j + 1}.jpg`);
        mediaItems.push({
          _type: "mediaItem",
          _key: `${shortCode}-${j}`,
          image: {
            _type: "image",
            asset: { _type: "reference", _ref: assetId },
          },
        });
        console.log("✓");
      } catch (err) {
        console.log(`⚠️  échouée (${err.message})`);
      }
    }

    const doc = {
      _type: "product",
      _id: `instagram-${shortCode}`,
      name,
      slug: { _type: "slug", current: shortCode },
      tagline,
      description,
      mediaItems,
    };

    await client.createOrReplace(doc);
    console.log(`  → Produit créé/mis à jour\n`);
  }

  console.log("✅ Import terminé !");
}

run().catch((err) => {
  console.error("Erreur :", err.message);
  process.exit(1);
});
