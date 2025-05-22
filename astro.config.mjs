import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import content from '@astrojs/content';

export default defineConfig({
  integrations: [tailwind(), mdx(), content()],
});