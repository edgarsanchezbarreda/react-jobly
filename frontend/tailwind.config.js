/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            scale: {
                102: '1.025',
                103: '1.03',
            },
        },
    },
    plugins: [],
};
