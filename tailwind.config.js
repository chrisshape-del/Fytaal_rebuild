/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0d6452', // Deep Teal
                    dark: '#082F26',    // Midnight Forest (New Depth Color)
                    light: '#F0F7F6',
                },
                accent: {
                    DEFAULT: '#C6A87C', // Burnished Gold (New Luxury Accent)
                    hover: '#B59669',
                },
                surface: {
                    DEFAULT: '#F5F7FA', // Platinum Mist
                    dark: '#051F1A',    // Darker than Primary Dark for backgrounds
                },
                glass: {
                    light: 'rgba(255, 255, 255, 0.60)',
                    dark: 'rgba(5, 31, 26, 0.60)', // Frosted dark teal
                },
            },
            fontFamily: {
                heading: ['"Barlow Condensed"', 'sans-serif'],
                sans: ['Barlow', 'Mulish', 'Open Sans', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
                display: ['Cormorant Garamond', 'serif'],
            },
            borderRadius: {
                brand: '10px',
            },
        },
    },
    plugins: [],
}
