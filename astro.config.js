import {defineConfig} from 'astro/config'
import svelte from '@astrojs/svelte'

import tailwind from '@astrojs/tailwind'

export default defineConfig({
  devToolbar: {enabled: false},
  integrations: [svelte(), tailwind()],
  site: 'https://musingswithcode.github.io',
  base: 'electric-dreams'
})
