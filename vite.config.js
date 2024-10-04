import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImportPlugin from '@opentiny/unplugin-tiny-vue'
import VueDevTools from 'vite-plugin-vue-devtools';
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), autoImportPlugin('vite'), VueDevTools(),vueJsx({}),],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 为 src 目录
    },
  },
  define: {
    'process.env': { ...process.env }
  }
})
