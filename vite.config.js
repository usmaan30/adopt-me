import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/adopt-me/", // Make sure this matches your GitHub repo name
});
