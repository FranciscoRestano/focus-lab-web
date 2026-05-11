/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				focus: {
					dark: '#1F3547', //
					blue: '#4EAFC8', //
					bg: '#E7E3E1',   //
				}
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',
			}
		},
	},
	plugins: [],
};