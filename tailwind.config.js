/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Bu çok önemli!
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0f172a',
                    card: '#1e293b',
                    text: '#f1f5f9'
                }
            }
        },
    },
    plugins: [],
}
