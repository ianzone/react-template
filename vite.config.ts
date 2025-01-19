import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biomejs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), biomePlugin()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
