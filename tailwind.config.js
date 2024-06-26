import DaisyUI from 'daisyui'
import TailwindAnimations from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'customPrimary': '#0BE58A'
    }
  },
  plugins: [DaisyUI, TailwindAnimations],
}

