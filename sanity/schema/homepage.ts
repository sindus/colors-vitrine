import { defineType, defineField } from "sanity";

export const homepageSchema = defineType({
  name: "homepage",
  title: "Page d'accueil",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Section Hero",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "titleLine1", title: "Titre — ligne 1", type: "string" },
        { name: "titleLine2Before", title: "Titre — ligne 2 (avant italique)", type: "string" },
        { name: "titleEmphasis", title: "Titre — mot en italique (ochre)", type: "string" },
        { name: "titleLine2After", title: "Titre — ligne 2 (après italique)", type: "string" },
        { name: "titleLine3", title: "Titre — ligne 3", type: "string" },
        { name: "paragraph", title: "Paragraphe", type: "text", rows: 3 },
        { name: "image", title: "Image (droite)", type: "image", options: { hotspot: true } },
        { name: "captionIndex", title: "Légende — index (ex: Lookbook · 01 / 12)", type: "string" },
        { name: "captionQuote", title: "Légende — citation", type: "string" },
        { name: "captionProducts", title: "Légende — produits", type: "string" },
      ],
    }),

    defineField({
      name: "lookDuMoment",
      title: "Look du moment",
      type: "object",
      fields: [
        { name: "titleBefore", title: "Titre (avant italique)", type: "string" },
        { name: "titleEmphasis", title: "Titre — mot en italique", type: "string" },
        { name: "paragraph", title: "Paragraphe", type: "text", rows: 3 },
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        {
          name: "products",
          title: "Produits mis en avant (2 max)",
          type: "array",
          of: [{ type: "reference", to: [{ type: "product" }] }],
          validation: (Rule) => Rule.max(2),
        },
      ],
    }),

    defineField({
      name: "nouveautes",
      title: "Nouveautés",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "title", title: "Titre", type: "string" },
        {
          name: "products",
          title: "Produits (4 max)",
          type: "array",
          of: [{ type: "reference", to: [{ type: "product" }] }],
          validation: (Rule) => Rule.max(4),
        },
      ],
    }),

    defineField({
      name: "editorial",
      title: "Section éditoriale (split)",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "titleBefore", title: "Titre (avant italique)", type: "string" },
        { name: "titleEmphasis", title: "Titre — phrase en italique", type: "string" },
        { name: "paragraph1", title: "Paragraphe 1", type: "text", rows: 4 },
        { name: "paragraph2", title: "Paragraphe 2", type: "text", rows: 2 },
        { name: "image", title: "Image (gauche)", type: "image", options: { hotspot: true } },
      ],
    }),

    defineField({
      name: "indemodables",
      title: "Les indémodables",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "title", title: "Titre", type: "string" },
        {
          name: "products",
          title: "Produits (4 max)",
          type: "array",
          of: [{ type: "reference", to: [{ type: "product" }] }],
          validation: (Rule) => Rule.max(4),
        },
      ],
    }),

    defineField({
      name: "instagram",
      title: "Mur Instagram",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "handle", title: "Compte Instagram (avec @)", type: "string" },
        {
          name: "images",
          title: "Photos (6 max)",
          type: "array",
          of: [{ type: "image", options: { hotspot: true } }],
          validation: (Rule) => Rule.max(6),
        },
      ],
    }),

    defineField({
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "title", title: "Titre", type: "string" },
        { name: "paragraph", title: "Paragraphe", type: "text", rows: 2 },
      ],
    }),
  ],
});
