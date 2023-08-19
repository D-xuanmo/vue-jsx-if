import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'VueJSXIf',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: true,
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        assetFileNames: 'index.[ext]'
      }
    }
  }
})
