import { resolve } from 'node:path';
import { inspectorServer } from '@react-dev-inspector/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inspectorServer()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
