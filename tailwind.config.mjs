/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-pink': 'rgb(255, 137, 245)',
				'brand-orange': '#df601c',
				'neon': '#00FF00',  // Verde neón como ejemplo
			},
			boxShadow: {
				'glow': '0 0 5px rgb(215, 54, 240), 0 0 20px rgba(138, 43, 226, 0.8), 0 0 30px rgba(138, 43, 226, 0.8)', // Resplandor morado
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradiente horizontal
				'radial-glow': 'radial-gradient(circle, #ff7e5f, #feb47b)',       // Gradiente radial
				'success-gradient': 'linear-gradient(45deg, #07832a, #0cc02f, #07832a)', // Gradiente vertical
				// gradiente en 45 grados de derecha a izquierda
				// 'gradient-45': 'linear-gradient(45deg, #ff7e5f, #feb47b)',
				'danger-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradiente vertical
				
			},
		},
	},
	variants: {
		extend: {
		  backgroundImage: ['hover'],
		},
	  },
	plugins: [],
}
