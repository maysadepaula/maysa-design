import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adicionei src por garantia
  ],
  
  theme: {
    extend: {
      colors: {
        tayo: {
          blue: "#0003AE",
          green: "#10B981",
          dark: "#171717",
          light: "#FAFAFA",
        },
      },
      // --- ADICIONE DAQUI PARA BAIXO ---
      animation: {
        marquee: 'marquee 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      // ---------------------------------
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      }
    },
  },
}
export default config;