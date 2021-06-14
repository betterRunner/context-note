import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { chromeExtension } from "vite-plugin-chrome-extension";
import probe from "rollup-plugin-probe";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        rollupOptions: {
            input: "src/manifest.json"
        }
    },
    plugins: [
        vue(),
        chromeExtension(),
        // probe({
        //     // options: {},
        //     // outputOption: {},
        //     // generateBundle: {},
        // }),
    ],
})
