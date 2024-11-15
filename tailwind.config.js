/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: "413px", // Extra small devices (e.g., large phones)
        sm: "640px", // Small devices (e.g., tablets)
        md: "768px", // Medium devices (e.g., small laptops)
        lg: "1024px", // Large devices (e.g., desktops)
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2X large devices
      }
    },
  },
  plugins: [],
}