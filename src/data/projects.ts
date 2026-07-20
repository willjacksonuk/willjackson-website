import type { ImageMetadata } from "astro";

import wwWebsite from "../assets/images/woven-and-woods.png";
import wwFlooringOutlet from "../assets/images/ww-flooring-outlet.png";
import theGallimaufry from "../assets/images/the-gallimaufry.png";
import wwProjectGallery from "../assets/images/ww-project-gallery.png";
import bantuLearn from "../assets/images/bantu-learn.png";
import approvedByGeorgie from "../assets/images/approved-by-georgie.png";

export type Project = {
  title: string;
  meta: string;
  description: string;
  link: string;
  linkText: string;
  image: ImageMetadata;
  imageAlt: string;
  status?: "live" | "internal" | "in-development";
};

export const projects: Project[] = [
  {
    title: "Woven & Woods",
    meta: "WordPress / WooCommerce / SEO",
    description:
      "Commercial product catalogue for an independent flooring retailer. Rebuilt on a bespoke WordPress theme with structured content and WooCommerce, then optimised for performance and search — achieving 90+ PageSpeed scores across the board and a 120% increase in organic traffic",
    link: "https://wovenandwoods.com",
    linkText: "Visit site",
    image: wwWebsite,
    imageAlt: "Screenshot of the Woven & Woods website",
    status: "live",
  },
  {
    title: "The Gallimaufry",
    meta: "Astro / CSS / Buzzsprout API",
    description:
      "Lightweight site for The Gallimaufry, a history podcast I co-host, built in Astro and hand-styled with custom CSS. Pulls episodes via the Buzzsprout API, with a focus on speed and simple, maintainable content structure.",
    link: "https://thegallimaufry.show",
    linkText: "Visit site",
    image: theGallimaufry,
    imageAlt: "Screenshot of The Gallimaufry website",
    status: "live",
  },
  {
    title: "W&W Flooring Outlet",
    meta: "WordPress / WooCommerce / SEO",
    description:
      "Custom WooCommerce store for an independent flooring retailer, built as a companion site to the main Woven & Woods catalogue. Included a custom theme, technical SEO and performance tuning",
    link: "https://outlet.wovenandwoods.com",
    linkText: "Visit site",
    image: wwFlooringOutlet,
    imageAlt: "Screenshot of the W&W Flooring Outlet website",
    status: "live",
  },
  {
    title: "W&W Project Gallery",
    meta: "Piwigo / PHP / Custom theme",
    description:
      "Customised PHP-based gallery platform built on Piwigo, used internally to showcase completed luxury flooring projects with bespoke theming and brand integration, now covering over 75 projects throughout south west London.",
    link: "https://gallery.wovenandwoods.com",
    linkText: "Visit site",
    image: wwProjectGallery,
    imageAlt: "Screenshot of the W&W Project Gallery recipe site",
    status: "live",
  },
  {
    title: "Bantu Learn",
    meta: "WordPress / WooCommerce / ACF",
    description:
      "WordPress-based learning platform for scheduled African language courses, using custom content structures and WooCommerce virtual products to manage bookings. Currently in development for a private client and expected to launch in August 2026",
    link: "#projects",
    linkText: "Contact me for more details",
    image: bantuLearn,
    imageAlt: "Screenshot of the Bantu Learn website",
    status: "in-development",
  },
  {
    title: "Approved by Georgie",
    meta: "Astro / TypeScript / CSS",
    description:
      "Personal recipe site built with Astro, using typed content structures and tags for fast, static-first frontend development. A space to experiment with Astro patterns outside of client and professional work.",
    link: "https://recipes.willjackson.uk",
    linkText: "Visit site",
    image: approvedByGeorgie,
    imageAlt: "Screenshot of the Approved by Georgie recipe site",
    status: "live",
  },
];
