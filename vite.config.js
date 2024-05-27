import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import VitePluginSass from "vite-plugin-sass";

export default defineConfig({
  plugins: [react(), VitePluginSass()],
  css: {
    postcss: path.resolve(__dirname, "./postcss.config.js"),
  },
});
