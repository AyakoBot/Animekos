import {
 defineConfig,
 presetIcons,
 presetUno,
 transformerDirectives,
} from "unocss";

export default defineConfig({
 rules: [["text-fill-color", { "-webkit-text-fill-color": "transparent" }]],
 shortcuts: [],
 transformers: [transformerDirectives()],
 presets: [
  presetUno(),
  presetIcons({
   extraProperties: {
    display: "inline-block",
    "vertical-align": "middle",
   },
  }),
 ],
});
