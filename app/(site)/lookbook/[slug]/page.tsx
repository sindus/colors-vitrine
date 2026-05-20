export const revalidate = 60;

import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, getSiteSettings } from "@/lib/sanity/queries";
import { ProductDetail } from "@/components/sections/ProductDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const [product, settings] = await Promise.all([
    getProductBySlug(slug),
    getSiteSettings(),
  ]);

  if (!product) notFound();

  const related = product.relatedProducts?.length
    ? product.relatedProducts
    : await getRelatedProducts(product.category, slug);

  return (
    <ProductDetail
      product={product}
      related={related}
      instagramHandle={settings?.instagramHandle}
      reservationBlock={settings?.reservationBlock}
    />
  );
}
