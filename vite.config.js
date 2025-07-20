import { buildXDC, eruda, mockWebxdc } from "@webxdc/vite-plugins";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({ plugins: [buildXDC(), eruda(), mockWebxdc()] });
