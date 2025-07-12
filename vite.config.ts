import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
  build: {
    minify: "esbuild",
    target: "es2015",
  },
  server: {
    port: 5000,
  },
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    devtoolsJson(),
    netlifyPlugin(),
  ],
});
