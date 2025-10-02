import path from "node:path";

import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    netlify(),
    tailwindcss(),
    sitemap({
      hostname: "https://endorphinscookies.netlify.app",
      exclude: ["/google280a9c6712542421"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        google280a9c6712542421: path.resolve(__dirname, "google280a9c6712542421.html"),
        404: path.resolve(__dirname, "404.html"),
      },
    },
  },
});
