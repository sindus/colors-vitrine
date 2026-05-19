import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts } from "@/lib/sanity/queries";
import { ProductDetail } from "@/components/sections/ProductDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const related = await getRelatedProducts(product.category, slug);

  return <ProductDetail product={product} related={related} />;
}
