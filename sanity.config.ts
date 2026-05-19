import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { productSchema } from "./sanity/schema/product";

export default defineConfig({
  name: "colors-studio",
  title: "colors — Studio",
  projectId: "va4xjtry",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [productSchema],
  },
});
