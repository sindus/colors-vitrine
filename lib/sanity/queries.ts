import { sanityClient } from "./client";
import type { Product } from "../types";
import { PRODUCTS } from "../data";

const PRODUCT_FIELDS = `
  "id": slug.current,
  name,
  category,
  price,
  tagline,
  colors,
  sizes,
  "image": mainImage.asset->url + "?w=1200&q=80",
  "images": images[].asset->url,
  description,
  details
`;

export async function getAllProducts(): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return PRODUCTS;
  try {
    return await sanityClient.fetch(`*[_type == "product"] | order(_createdAt asc) { ${PRODUCT_FIELDS} }`);
  } catch {
    return PRODUCTS;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return PRODUCTS.find((p) => p.id === slug) ?? null;
  }
  try {
    const result = await sanityClient.fetch(
      `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_FIELDS} }`,
      { slug }
    );
    return result ?? null;
  } catch {
    return PRODUCTS.find((p) => p.id === slug) ?? null;
  }
}

export async function getRelatedProducts(
  category: string,
  excludeSlug: string
): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return PRODUCTS.filter((p) => p.category === category && p.id !== excludeSlug).slice(0, 4);
  }
  try {
    return await sanityClient.fetch(
      `*[_type == "product" && category == $category && slug.current != $excludeSlug][0...4] { ${PRODUCT_FIELDS} }`,
      { category, excludeSlug }
    );
  } catch {
    return PRODUCTS.filter((p) => p.category === category && p.id !== excludeSlug).slice(0, 4);
  }
}
