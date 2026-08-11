import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kiarich.com.my',
  integrations: [tailwind()],
});
