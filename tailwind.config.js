/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			minWidth: {
				'1/2': '50%'
			},
			fontFamily: {
				'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif']
			}
		}
	},
	plugins: [],
}

