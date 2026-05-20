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
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "price",
      title: "Prix (€)",
      type: "number",
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: "colors",
      title: "Couleurs disponibles",
      type: "array",
      of: [{ type: "string" }],
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
    },
  },
});
