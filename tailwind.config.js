/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

// see https://tailwindcss.com/docs/optimizing-for-production
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {},
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
