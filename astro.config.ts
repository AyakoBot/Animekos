import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  })],
  output: "server",
  adapter: cloudflare()
});