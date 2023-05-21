/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
export default withMT(  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [ require('flowbite/plugin')],
  darkMode: 'class',
})

