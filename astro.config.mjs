import { defineConfig } from 'astro/config'
import { resolve } from 'path'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://gonzaloccnc.github.io',
	base: '/portfolio/',
	build: {
		assets: "assets"
	},
	vite: {
		resolve: {
			alias: {
				$images: resolve('./public/images')
			}
		}
	}
})
