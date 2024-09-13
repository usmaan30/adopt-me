import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src", // Keep src as the root
  plugins: [react()],
  build: {
    outDir: "../dist", // Output to the root-level 'dist' directory
    emptyOutDir: true, // Ensure the output directory is cleaned before building
  },
});
