
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: "0.0.0.0",
    allowedHosts:["4b702fb8-d4ff-4765-a2c4-7da2947bd7dd-00-3d5reuka2o4af.worf.replit.dev"]
  },
});
