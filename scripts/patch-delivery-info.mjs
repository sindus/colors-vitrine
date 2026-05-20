import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "va4xjtry",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const DELIVERY_INFO =
  "Livraison possible, essayage possible en centre-ville de Saint-Pierre!";

const ids = await client.fetch(`*[_type == "product"]._id`);
console.log(`${ids.length} produit(s) trouvé(s).`);

const transaction = client.transaction();
for (const id of ids) {
  transaction.patch(id, { set: { deliveryInfo: DELIVERY_INFO } });
}
await transaction.commit();
console.log("deliveryInfo mis à jour sur tous les produits.");
