import { sanityClient } from "./client";
import type { Product, HomepageData, LookbookData, SiteSettings } from "../types";
import { PRODUCTS } from "../data";

const PRODUCT_FIELDS = `
  "id": slug.current,
  name,
  "category": category->name,
  price,
  tagline,
  "colors": coalesce(colors, []),
  sizes,
  "image": coalesce(mediaItems[0].image.asset->url, mainImage.asset->url, ""),
  "images": coalesce(images[].asset->url, []),
  "media": mediaItems[]{"imageUrl": image.asset->url, "videoUrl": video.asset->url},
  description,
  "details": coalesce(details, [])
`;

function mergeWithStatic(sanityProducts: Partial<Product>[]): Product[] {
  return sanityProducts.map((sp) => {
    const staticProduct = PRODUCTS.find((p) => p.id === sp.id);
    return {
      ...staticProduct,
      ...sp,
      image: sp.image || staticProduct?.image || "",
      images: (sp.images?.length ? sp.images : staticProduct?.images) ?? [],
      colors: sp.colors?.length ? sp.colors : (staticProduct?.colors ?? []),
    } as Product;
  });
}

export async function getAllProducts(): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return PRODUCTS;
  try {
    const results = await sanityClient.fetch(
      `*[_type == "product"] | order(_createdAt asc) { ${PRODUCT_FIELDS} }`
    );
    return mergeWithStatic(results);
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
    if (!result) return PRODUCTS.find((p) => p.id === slug) ?? null;
    return mergeWithStatic([result])[0];
  } catch {
    return PRODUCTS.find((p) => p.id === slug) ?? null;
  }
}

export async function getRelatedProducts(
  category: string | undefined,
  excludeSlug: string
): Promise<Product[]> {
  if (!category) return [];
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return PRODUCTS.filter(
      (p) => p.category === category && p.id !== excludeSlug
    ).slice(0, 4);
  }
  try {
    const results = await sanityClient.fetch(
      `*[_type == "product" && category->name == $category && slug.current != $excludeSlug][0...4] { ${PRODUCT_FIELDS} }`,
      { category, excludeSlug }
    );
    return mergeWithStatic(results);
  } catch {
    return PRODUCTS.filter(
      (p) => p.category === category && p.id !== excludeSlug
    ).slice(0, 4);
  }
}

export async function getHomepage(): Promise<HomepageData | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await sanityClient.fetch(
      `*[_type == "homepage" && _id == "homepage"][0] {
        hero {
          overline,
          titleLine1,
          titleLine2Before,
          titleEmphasis,
          titleLine2After,
          titleLine3,
          paragraph,
          "imageUrl": image.asset->url,
          "videoUrl": video.asset->url,
          captionIndex,
          captionQuote,
          captionProducts
        },
        lookDuMoment {
          overline,
          titleBefore,
          titleEmphasis,
          paragraph,
          "imageUrl": image.asset->url,
          "videoUrl": video.asset->url,
          "products": products[]-> { ${PRODUCT_FIELDS} }
        },
        nouveautes {
          overline,
          title,
          "products": products[]-> { ${PRODUCT_FIELDS} }
        },
        editorial {
          overline,
          titleBefore,
          titleEmphasis,
          paragraph1,
          paragraph2,
          "imageUrl": image.asset->url,
          "videoUrl": video.asset->url
        },
        indemodables {
          overline,
          title,
          "products": products[]-> { ${PRODUCT_FIELDS} }
        },
        instagram {
          overline,
          handle,
          "images": images[]{"imageUrl": image.asset->url, "postUrl": url}
        },
        lookbook {
          tagline,
          paragraph,
          season
        },
        newsletter {
          overline,
          title,
          paragraph
        }
      }`
    );

    if (!data) return null;

    if (data.lookDuMoment?.products) {
      data.lookDuMoment.products = mergeWithStatic(data.lookDuMoment.products);
    }
    if (data.nouveautes?.products) {
      data.nouveautes.products = mergeWithStatic(data.nouveautes.products);
    }
    if (data.indemodables?.products) {
      data.indemodables.products = mergeWithStatic(data.indemodables.products);
    }

    return data as HomepageData;
  } catch {
    return null;
  }
}

export async function getLookbook(): Promise<LookbookData | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await sanityClient.fetch(
      `*[_type == "homepage" && _id == "homepage"][0] { lookbook }`
    );
    return data?.lookbook ?? null;
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    return await sanityClient.fetch(
      `*[_type == "siteSettings" && _id == "siteSettings"][0] {
        announcementMessages,
        address,
        instagramHandle,
        mentionsLegales
      }`
    );
  } catch {
    return null;
  }
}
