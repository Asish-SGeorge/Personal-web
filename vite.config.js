import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Personal-web/' : '/',
  plugins: [
    react(),
    {
      name: 'dev-form-mock',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && (req.url === '/' || req.url === '')) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('OK');
            return;
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
