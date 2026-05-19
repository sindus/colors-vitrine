import { getAllProducts, getLookbook } from "@/lib/sanity/queries";
import { LookbookGrid } from "@/components/sections/LookbookGrid";

export default async function LookbookPage() {
  const [products, lookbook] = await Promise.all([getAllProducts(), getLookbook()]);

  return <LookbookGrid products={products} lookbook={lookbook} />;
}
