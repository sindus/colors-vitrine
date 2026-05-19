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
  ],
});
