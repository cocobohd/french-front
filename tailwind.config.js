/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                gray: '#1C1C1C',
                'light-gray': '#E8E8E8',
            },
            screens: {
                '2xl': { max: '1535px' },
                xl: { max: '1279px' },
                lg: { max: '1023px' },
                md: { max: '767px' },
                sm: { max: '639px' },
                xs: { max: '460px' },
            },
            maxWidth: {
                '8xl': '1440px',
            },
            fontFamily: {
                default: ['Raleway', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
