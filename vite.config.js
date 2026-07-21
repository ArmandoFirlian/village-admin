import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    // Opsi Multi-Page Application (MPA)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wisata: resolve(__dirname, 'wisata-umkm.html'),
      },
    },
  },
  esbuild: {
    // Jika ingin menghapus console.log saat production, ubah drop_console ke true
    // drop: ['console'], 
  },
  server: {
    port: 3000,
    open: true,
  },
});
