import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'lib',
      // the proper extensions will be added
      fileName: 'lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react', 'react-dom'],
      external: Object.keys(packageJson.peerDependencies),
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
  },
  plugins: [react()],
})
