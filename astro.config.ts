import { defineConfig, passthroughImageService } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
 integrations: [
  UnoCSS({
   injectReset: true,
  }),
  sitemap(),
  icon({
   include: {
    "ant-design": ["*"],
   },
  }),
  sitemap(),
 ],
 server: {
  host: true,
 },
 site: "https://animekos.com",
 image: {
  service: passthroughImageService(),
 },
});
