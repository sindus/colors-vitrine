import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "announcementMessages",
      title: "Messages de la barre d'annonce (3 max)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "address",
      title: "Adresse (menu mobile)",
      type: "string",
    }),
    defineField({
      name: "instagramHandle",
      title: "Compte Instagram (sans @)",
      type: "string",
    }),
    defineField({
      name: "reservationBlock",
      title: "Bloc « Réserver une pièce » (fiche produit)",
      type: "object",
      fields: [
        { name: "overline", title: "Surtitre", type: "string" },
        { name: "title", title: "Titre (italic)", type: "string" },
        { name: "body", title: "Corps du texte", type: "text", rows: 3 },
      ],
    }),
    defineField({
      name: "mentionsLegales",
      title: "Mentions légales",
      type: "text",
      rows: 20,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Paramètres du site" };
    },
  },
});
