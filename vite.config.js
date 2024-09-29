import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
    return {
        build: {
            outDir: "build",
        },
        plugins: [svgr(), react()],
        define: {
            __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
        },
        server: {
            proxy: {
                "/api": {
                    target: "http://localhost:4000",
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    configure: (proxy, _options) => {
                        proxy.on("error", (err, _req, _res) => {
                            console.log("proxy error", err);
                        });
                        proxy.on("proxyReq", (proxyReq, req, _res) => {
                            console.log("Sending Request to the Target:", req.method, req.url);
                        });
                        proxy.on("proxyRes", (proxyRes, req, _res) => {
                            console.log("Received Response from the Target:", proxyRes.statusCode, req.url);
                        });
                    },
                },
            },
        },
    };
});
