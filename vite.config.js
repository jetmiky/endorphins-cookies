import path from "node:path";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sitemap({
      hostname: "https://endorphinscookies.netlify.app",
      exclude: ["/google280a9c6712542421.html"],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        google280a9c6712542421: path.resolve(__dirname, "google280a9c6712542421.html"),
      },
    },
  },
});
