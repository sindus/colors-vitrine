import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { productSchema } from "./sanity/schema/product";
import { categorySchema } from "./sanity/schema/category";
import { homepageSchema } from "./sanity/schema/homepage";
import { siteSettingsSchema } from "./sanity/schema/siteSettings";

export default defineConfig({
  name: "colors-studio",
  title: "colors — Studio",
  projectId: "va4xjtry",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Page d'accueil")
              .icon(() => "🏠")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
              ),
            S.listItem()
              .title("Paramètres du site")
              .icon(() => "⚙️")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("category").title("Catégories"),
            S.documentTypeListItem("product").title("Produits"),
          ]),
    }),
  ],
  schema: {
    types: [productSchema, categorySchema, homepageSchema, siteSettingsSchema],
  },
});
