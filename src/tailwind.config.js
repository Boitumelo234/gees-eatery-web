/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                terracotta: '#B85C38',
                amber: '#E0A23B',
                cream: '#FDF7F0',
                dark: '#2C2C2C',
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out',
                'slow-spin': 'spin 20s linear infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}