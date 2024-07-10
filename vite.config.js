import { fileURLToPath, URL } from 'node:url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import { ViteImageOptimizerOptions } from './config.js'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
        ViteImageOptimizer(ViteImageOptimizerOptions),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: () => 'main.js'
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/styles/vars/scss/vars.scss";
                    @import "@/assets/styles/mixins/all-mixins.scss";
                `
            }
        }
    }
})
