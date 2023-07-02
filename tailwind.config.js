/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'grid-col-1',
        'grid-col-2',
        'grid-col-3',
        'grid-col-4',
        'grid-col-5',
        'grid-col-6',
        'grid-col-7',
        'grid-col-8',
        'grid-col-9'
    ]
}