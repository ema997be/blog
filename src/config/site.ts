// Site configuration
export const siteConfig = {
  // Site details from config.json:site
  title: "Dott. Emanuele Belloni - Biologo Nutrizionista, Chinesiologo", // from config.json:site.title
  // description is used from existing site.ts, will be updated by config.json:metadata.meta_description
  // url is removed, Astro.site will be used

  // from config.json:site (logo related)
  logo: "/logo.svg",
  logoWidth: "200",
  logoHeight: "30",
  logoText: "Bit Doze Astro Blog Theme",

  // SEO metadata from config.json:metadata
  author: "Emanuele Belloni", // from config.json:metadata.meta_author
  description:
    "Guide integrate di nutrizione e allenamento per uomini e donne over 40: perdi peso, ritrova energia e vitalità in modo sostenibile.", // from config.json:metadata.meta_description
  ogImage: "/images/og-image.png", // from config.json:metadata.meta_image (replaces defaultImage)

  // Pagination settings from config.json:settings
  postsPerPage: 6, // from config.json:settings.pagination
  summaryLength: 140, // from config.json:settings.summary_length

  // SEO settings (existing in site.ts)
  noindex: {
    tags: true, // Set to true to add noindex meta tag to tag pages
    categories: false, // Set to true to add noindex meta tag to category pages
    authors: false, // Set to true to add noindex meta tag to author pages
  },

  // Copyright
  copyright: `Copyright © ${new Date().getFullYear()} Dott. Emanuele Belloni`,
};
