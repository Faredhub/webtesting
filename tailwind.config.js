/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Keyframes for slide down animation
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      // Animation using the slideDown keyframes
      animation: {
        "slide-down": "slideDown 0.3s ease-out",
      },
      // Custom colors (cyan for hover effects, primary color for branding)
      colors: {
        cyan: {
          400: "#22d3ee", // Used for hover effects
        },
        primary: "#080058", // Custom dark purple for your brand
      },
      // Custom spacing for hero section or other components
      spacing: {
        "hero-height": "calc(100vh - 4rem)", // Used for dynamic hero height
      },
      // Custom font family (use whatever font you prefer)
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
