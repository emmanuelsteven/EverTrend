import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/products": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/products/, "/products"),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Appid", "P8YBKXYR5Q3ZBBI");
            proxyReq.setHeader(
              "Apikey",
              "e5bc75a2d1cf414c80cfb6cde20f091720240714131238325221"
            );
          });
        },
      },
    },
  },
});
