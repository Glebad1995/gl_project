import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/gl_project/', // Убедитесь, что путь совпадает с названием репозитория
});
