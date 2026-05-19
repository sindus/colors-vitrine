import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Produit",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Robes", value: "Robes" },
          { title: "Tops", value: "Tops" },
          { title: "Pantalons", value: "Pantalons" },
          { title: "T-shirts", value: "T-shirts" },
          { title: "Accessoires", value: "Accessoires" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prix (€)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "tagline",
      title: "Accroche",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sizes",
      title: "Tailles disponibles",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Galerie (images supplémentaires)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Détails & matières",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "mainImage",
    },
  },
});
