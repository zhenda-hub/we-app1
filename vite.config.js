import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  publicDir: 'public',
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp4'],
})
