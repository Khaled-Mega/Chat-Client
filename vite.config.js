
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: "0.0.0.0",
    allowedHosts:["49b14528-1a0a-46a2-a7b9-4c9e274b9a31-00-2i6k9zqaq15tg.kirk.replit.dev"]
  },
});
