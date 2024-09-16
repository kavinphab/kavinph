/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sand': '#937b5d',
        'purple' : '#6a5463',
        'green' : '#707650',
        'red': '#894b45',
        'lightsand' : '#aa975c',
        'lightpurple' : '#826c80',
        'blue' : '#5f657d'
      },
    },
  },
  plugins: [],
};
