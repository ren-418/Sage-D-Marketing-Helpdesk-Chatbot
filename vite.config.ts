import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015', // Target modern browsers
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'iife', // Immediately Invoked Function Expression
        inlineDynamicImports: true, // Combine all chunks into one file
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      }
    }
  }
});