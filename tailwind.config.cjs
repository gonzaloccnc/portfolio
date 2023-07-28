/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				walsheim: ['GT Walsheim Pro', 'Inter', 'sans-serif']
			},
			colors: {
				'h-primary': '#9845E8',
				'h-seconday': '#33D2FF',
				'h-third': '#DD5789',
				'dark': '#11071F',
				'g2-primary': '#6964DE',
				'g2-secondary': '#FCA6E9',
				'g3-primary': '#F4426C',
				'g3-secondary': '#FBF2B1',
				'g4-primary': '#D24074',
				'g4-secondary': '#6518B4',
				'radial-1': '#693B93',
				'radial-2': '#6EBFF439',
				'radial-3': '#4690D400',
				highlight: '#6CACE4',
				paragraft: '#C4C4C4',
				description: '#F0F0F0',
				extra: '#1F1E1E',
				lightgray: '#d3d3d30d'
			},
			backgroundImage: {
				me: 'url($images/me.webp)',
				avatar: 'url($images/avatar.png)'
			},
			backgroundSize: {
				'mega': '800%'
			},
			screens: {
				mobile: '320px',
				tablet: '768px',
				desktop: '1024px',
				'desktop-sm': '1200px'
			}
		},
		fontSize: {
			xs: '0.875rem', /* 14px */
			base: '1rem', /* 16px */
			md: '1.125rem', /* 18px */
			xl: '1.5rem', /* 24px */
			'2xl': '2rem', /* 32px */
			smega: '3rem', /* 48px */
			lmega: '4rem', /* 64px */
			mega: '6rem' /* 96px */
		}
	},
	plugins: []
}

// #9358F7, #9259F7, #8E5DF6, #8862F5, #806BF4, #7575F2, #6882F0, #5990EE, #4A9FEB, #3BADE9, #2EBAE7, #23C4E5, #1BCDE4, #15D2E3, #11D6E2, #10D7E2 G1