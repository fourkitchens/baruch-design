const flowbite = require("flowbite-react/tailwind");

const linkUnderline = {
  position: 'relative',
  textDecoration: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: '-1.5px',
    left: '0',
    backgroundColor: 'var(--color-primary-sky)',
    zIndex: '1',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: '-1.5px',
    left: '0',
    backgroundColor: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.3s ease',
    zIndex: '10',
  },
  '&:hover::after': {
    transform: 'scaleX(1)',
    transformOrigin: 'left',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    flowbite.plugin(),
  ],
};