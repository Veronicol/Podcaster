import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProdMode = mode === 'production';

  return {
    build: {
      minify: isProdMode ? 'esbuild' : false,
      cssCodeSplit: !isProdMode
    },
    plugins: [react()]
  };
});
