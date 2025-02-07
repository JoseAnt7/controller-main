import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
require('dotenv').config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
