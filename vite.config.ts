import { buildXDC, eruda, mockWebxdc } from "@webxdc/vite-plugins";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [buildXDC(), eruda(), mockWebxdc()],
  appType: "mpa", // return 404 on invalid URLs
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
