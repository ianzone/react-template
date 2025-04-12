import { resolve } from 'node:path';
import { viteConfig } from '@es-proj/react-vite';
import { mergeConfig } from 'vite';

// https://vitejs.dev/config/
export default mergeConfig(viteConfig, {
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});
