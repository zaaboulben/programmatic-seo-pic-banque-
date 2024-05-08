import { Open_Sans, Raleway } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },


    },
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },

      colors: {
        'ligtest': 'var(--color-ligtest)',
        'light': 'var(--color-light)',
        'brand': 'var(--color-brand)',
        'mid': 'var(--color-mid)',
        'dark': 'var(--color-dark)',
        'darkest': 'var(--color-darkest)',
        'black': 'var(--color-black)',
        'star': 'var(--color-star)',
        'hero-section-semi-opacity': 'var(--color-hero-section-semi-opacity)',

        'background-top-bar': 'var(--color-background-top-bar)',
        'background-navbar': 'var(--color-background-navbar)',
        'background-main': 'var(--color-background-main)',
        'background-secondary': 'var(--color-background-secondary)',
        'etoile': 'var(--color-etoile)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'text-quaternary': 'var(--color-text-quaternary)',
        'background-hero': 'var(--color-background-hero)',
        'background-badge': 'var(--color-background-badge)',
        'background-badge-tertiary': 'var(--color-background-badge-tertiary)',
        'background-badge-secondary': 'var(--color-background-badge-secondary)',
        'background-main-button': 'var(--color-background-main-button)',
        'background-secondary-button': 'var(--color-background-secondary-button)',
        'brand-text': 'var(--color-brand-text)',
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
      },
      backgroundImage: {
        'hero-section-bg': "url('/hero-section-bg/hero-section-bg.webp')",


      }




    },

  },
  plugins: [],
};
export default config;
