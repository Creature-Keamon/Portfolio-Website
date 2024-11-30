import { defineConfig } from 'vite';
import {resolve} from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
export default defineConfig({

  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        projects: resolve(root, 'projects', 'index.html'),
        ai: resolve(root, 'projects', 'AI', 'index.html'),
        ammit: resolve(root, 'projects', 'Ammit', 'index.html'),
        remake: resolve(root, 'projects', 'Re-Make', 'index.html'),
        thissite: resolve(root, 'projects', 'This-Site', 'index.html'),
        travellersring: resolve(root, 'projects', 'Travellers-Ring', 'index.html'),
      },
    },
  },
});