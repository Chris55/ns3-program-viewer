import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const name = "ns3-program-viewer";
    return {
        base: "/" + name,
        build: {
            outDir: "dist",
        },
        plugins: [react()],
        define: {
            "process.env.REACT_APP_ROOT": JSON.stringify(name),
            "process.env.REACT_APP_VERSION": JSON.stringify(env.REACT_APP_VERSION),
        },
    };
});
