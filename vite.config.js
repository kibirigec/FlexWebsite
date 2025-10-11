import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
    host: true, // Ensure Vite binds to all interfaces
    strictPort: true, // Prevent random port changes
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@relume_io/relume-ui', 'framer-motion'],
          'icons': ['react-icons', '@heroicons/react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
