export type MediaItem = {
  imageUrl?: string | null;
  videoUrl?: string | null;
};

export type Product = {
  id: string;
  name: string;
  category: "Robes" | "Tops" | "Pantalons" | "T-shirts" | "Accessoires";
  price: number;
  tagline: string;
  colors: string[];
  sizes: string[];
  image: string;
  images: string[];
  description: string;
  details: string[];
  media?: MediaItem[];
};

export type HeroData = {
  overline?: string;
  titleLine1?: string;
  titleLine2Before?: string;
  titleEmphasis?: string;
  titleLine2After?: string;
  titleLine3?: string;
  paragraph?: string;
  imageUrl?: string;
  videoUrl?: string | null;
  captionIndex?: string;
  captionQuote?: string;
  captionProducts?: string;
};

export type LookDuMomentData = {
  titleBefore?: string;
  titleEmphasis?: string;
  paragraph?: string;
  imageUrl?: string;
  videoUrl?: string | null;
  products?: Pick<Product, "id" | "name" | "price" | "image">[];
};

export type SectionWithProducts = {
  overline?: string;
  title?: string;
  products?: Product[];
};

export type EditorialData = {
  overline?: string;
  titleBefore?: string;
  titleEmphasis?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageUrl?: string;
  videoUrl?: string | null;
};

export type InstagramPost = {
  imageUrl: string;
  postUrl?: string | null;
};

export type InstagramData = {
  overline?: string;
  handle?: string;
  images?: InstagramPost[];
};

export type NewsletterData = {
  overline?: string;
  title?: string;
  paragraph?: string;
};

export type HomepageData = {
  hero?: HeroData;
  lookDuMoment?: LookDuMomentData;
  nouveautes?: SectionWithProducts;
  editorial?: EditorialData;
  indemodables?: SectionWithProducts;
  instagram?: InstagramData;
  newsletter?: NewsletterData;
};

export type LookbookData = {
  tagline?: string;
  paragraph?: string;
  season?: string;
};

export type SiteSettings = {
  announcementMessages?: string[];
  address?: string;
  instagramHandle?: string;
  mentionsLegales?: string;
};
