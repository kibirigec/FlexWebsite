/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/flex-events/**/*.{js,ts,jsx,tsx}",
    "./src/globalComps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color (Refined Green from existing brand)
        primary: {
          DEFAULT: "#9BAB3C", // ORIGINAL BRAND GREEN
          light: "#B5C655", // Lightened version
          dark: "#7A8830", // Darkened version
          50: "#F7F9EC",
          100: "#EEF3D9",
        },
        // Neutral Palette (No muddy grays)
        surface: {
          white: "#FFFFFF",
          off: "#FAFAFA",
          subtle: "#F5F5F7", // Very light gray-blue tint for depth
        },
        content: {
          prominent: "#111111", // Soft black
          default: "#1D1D1F", // Apple-like dark gray
          subtle: "#86868B", // Apple-like subtle text
          muted: "#D2D2D7", // Light gray
        }
      },
      fontFamily: {
        sans: ["SF Pro Display", "SFPRODISPLAYREGULAR", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["SF Pro Display", "SFPRODISPLAYREGULAR", "Inter", "sans-serif"], // Keep SF Pro if available
      },
      fontSize: {
        // Editorial scale
        '2xs': '0.625rem', // 10px
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '2rem',    // 32px
        '4xl': '2.5rem',  // 40px
        '5xl': '3.25rem', // 52px
        '6xl': '4rem',    // 64px
        '7xl': '5rem',    // 80px
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter: '-0.01em',
        normal: '0em',
        wide: '0.01em',
        wider: '0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slow-zoom': 'slowZoom 12s linear infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
} 