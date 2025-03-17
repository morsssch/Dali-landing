import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            images: {
                mozjpeg: {
                    quality: 80, // Настройки для JPEG
                },
                pngquant: {
                    quality: [0.6, 0.8], // Настройки для PNG
                    speed: 4,
                },
            },
            output: "dist/assets/img",
            input: ["src/assets/img", "src/assets/bg"],
        }),
    ],
});
