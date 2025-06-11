import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        base: "/ns3-program-viewer/",
        build: {
            outDir: "dist",
        },
        plugins: [react()],
        define: {
            "process.env": env,
        },
    };
});
