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
};
