/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#fbbc05",
        accent: "#34a853",
        background: "#f5f5f5",
        surface: "#ffffff",
        dark: "#202124",
        lightGray: "#9aa0a6",
        borderGray: "#e0e0e0",
        saleRed: "#d93025",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["Poppins", "Arial", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        product: "0 4px 12px rgba(0, 0, 0, 0.1)",
        header: "0 2px 6px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '36': '9rem',
      },
      maxWidth: {
        'screen-xl': '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
