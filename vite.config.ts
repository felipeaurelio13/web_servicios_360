import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative asset paths so the app works from a GitHub Pages project subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
