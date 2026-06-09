// astro.config.mjs
// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://willjackson.uk",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Barlow",
      cssVariable: "--font-sans",
      weights: ["400", "600"],
      styles: ["normal"],
      subsets: ["latin"]
    },
    {
      provider: fontProviders.google(),
      name: "Albert Sans",
      cssVariable: "--font-heading",
      weights: ["600"],
      styles: ["normal"],
      subsets: ["latin"]
    },
    {
      provider: fontProviders.googleicons(),
      name: "Material Symbols Outlined",
      cssVariable: "--font-icons",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
  integrations: [sitemap()],
});