import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目站点路径为 /<repo>/，本地开发时 Vite 会自动处理 base。
// 路由使用 HashRouter，因此刷新任意页面均由同一个 index.html 承载，不会出现 404。
export default defineConfig({
  base: '/humanitas/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
