import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve:{
    //设置路径别名
    alias: {
      '@': resolve(__dirname, './src')
      },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
        `
      }
    }
  }
})
