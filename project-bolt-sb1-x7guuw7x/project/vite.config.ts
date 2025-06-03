import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ---- added: lock the ports Bolt tunnels ----
  server: {
    host: true,    // equals 0.0.0.0 inside the container
    port: 3000,
    strictPort: true, // fail instead of auto-incrementing
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  // -------------------------------------------

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});