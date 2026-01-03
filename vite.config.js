import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

const buildTime = new Date().toISOString();

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit()
    ],
    define: {
        __BUILD_TIME__: JSON.stringify(buildTime)
    }
});
