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
        'sm': '200px',     // Small devices (e.g., large smartphones)
        'md': '413px',     // Medium devices (e.g., tablets)
        // 'lg': '1024px',    // Large devices (e.g., laptops)
        // 'xl': '1280px',    // Extra large devices (e.g., desktops)
        // '2xl': '1536px',   // Extra extra large devices (e.g., large desktops)
        // '3xl': '1920px',   // Custom for ultra-wide screens
        // '4k': '2560px', 
      }
    },
  },
  plugins: [],
}