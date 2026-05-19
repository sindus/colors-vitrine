import type React from "react";
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
      name: "mediaItems",
      title: "Galerie médias (images & vidéos)",
      description: "Chaque item est une image OU une vidéo. Le premier item s'affiche en miniature.",
      type: "array",
      of: [
        {
          type: "object",
          name: "mediaItem",
          title: "Média",
          fields: [
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            { name: "video", title: "Vidéo (MP4, WebM — sans son)", type: "file", options: { accept: "video/*" } },
          ],
          preview: {
            select: { image: "image", videoAsset: "video.asset" },
            prepare(value: Record<string, unknown>) {
              return { title: value.videoAsset ? "Vidéo" : "Image", media: value.image as React.ReactNode };
            },
          },
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Image principale (ancien champ — utiliser Galerie médias)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Galerie images (ancien champ — utiliser Galerie médias)",
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
