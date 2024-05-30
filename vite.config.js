import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

const seturl = url => path.resolve(__dirname, url)

// https://vitejs.dev/config/
export default ({ mode }) => {
  const data = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    build: {
      assetsInlineLimit: 4096,  // 4k以下base64处理
      cssCodeSplit: false,   // cssInJs
      minify: 'terser',
      chunkSizeWarningLimit: 512,
      terserOptions: {
        // compress: {
        //   drop_console: true,
        //   drop_debugger: true
        // }
      },
      rollupOptions: {
        target: 'modules',
        output: {
          entryFileNames: 'js/entry-[name]-[hash].js',
          chunkFileNames: 'js/chunk-[name]-[hash].js',
          assetFileNames: 'static/[name]-[hash].[ext]',
        },
      }
    },
    base: '/',
    resolve: {
      alias: {
        '@': seturl('src')
      },
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  })
}

