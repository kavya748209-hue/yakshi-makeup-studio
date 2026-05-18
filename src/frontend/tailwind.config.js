import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  // Dark mode disabled — pure light cream/beige/gold theme
  // Dark mode intentionally disabled — pure light cream/beige/gold theme
  // darkMode key omitted so Tailwind uses 'media' but our CSS vars enforce light always
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // ── Tailwind semantic tokens (flat hex, no oklch) ──
        border:     "rgba(139,94,60,0.25)",
        input:      "#ede0d0",
        ring:       "#8b5e3c",
        background: "#fdf8f3",
        foreground: "#3d2817",
        primary: {
          DEFAULT:    "#8b5e3c",
          foreground: "#fdf8f3",
        },
        secondary: {
          DEFAULT:    "#f5e6d3",
          foreground: "#6b3f1f",
        },
        destructive: {
          DEFAULT:    "#c0392b",
          foreground: "#fdf8f3",
        },
        muted: {
          DEFAULT:    "#ede0d0",
          foreground: "#8b5e3c",
        },
        accent: {
          DEFAULT:    "#b5845a",
          foreground: "#3d2817",
        },
        popover: {
          DEFAULT:    "#ffffff",
          foreground: "#3d2817",
        },
        card: {
          DEFAULT:    "#ffffff",
          foreground: "#3d2817",
        },
        // ── Brand custom tokens ──
        gold: {
          DEFAULT: "#8b5e3c",
          bright:  "#6b3f1f",
          light:   "#b5845a",
        },
        cream: {
          DEFAULT: "#fdf8f3",
          dark:    "#ede0d0",
        },
        beige: {
          DEFAULT: "#f5e6d3",
        },
        brown: {
          DEFAULT: "#8b5e3c",
          deep:    "#6b3f1f",
          light:   "#b5845a",
          warm:    "#8b5e3c",
        },
        "rose-gold": "#c4956a",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:    ["'Jost'", "system-ui", "sans-serif"],
        accent:  ["'Cinzel'", "Georgia", "serif"],
        mono:    ["'Courier New'", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs:                 "0 1px 2px 0 rgba(0,0,0,0.05)",
        "glow-gold":        "0 0 20px rgba(139,94,60,0.35), 0 0 60px rgba(139,94,60,0.12)",
        "glow-gold-intense":"0 0 30px rgba(139,94,60,0.50), 0 0 80px rgba(107,63,31,0.20), 0 0 150px rgba(107,63,31,0.06)",
        "glow-rose":        "0 0 20px rgba(196,149,106,0.35), 0 0 60px rgba(196,149,106,0.12)",
        "glow-subtle":      "0 0 16px rgba(139,94,60,0.10), inset 0 0 20px rgba(139,94,60,0.04)",
        "glass-ultra":      "inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 32px rgba(139,94,60,0.12), 0 2px 8px rgba(107,63,31,0.08)",
        "card-premium":     "0 4px 24px rgba(107,63,31,0.08)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-12px) rotate(1deg)" },
          "66%":      { transform: "translateY(-6px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":      { transform: "translateY(-18px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,94,60,0.20), 0 0 40px rgba(139,94,60,0.08)" },
          "50%":      { boxShadow: "0 0 40px rgba(139,94,60,0.45), 0 0 80px rgba(107,63,31,0.18)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "ring-pulse": {
          "0%":   { transform: "scale(1)",   opacity: "0.7" },
          "70%":  { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0) rotate(0deg)" },
          "50%":      { opacity: "1", transform: "scale(1) rotate(180deg)" },
        },
        shimmer: {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        float:            "float 6s ease-in-out infinite",
        "float-slow":     "float-slow 9s ease-in-out infinite",
        "pulse-glow":     "pulse-glow 3s ease-in-out infinite",
        "fade-in":        "fade-in 0.8s ease-out both",
        "ring-pulse":     "ring-pulse 2.5s ease-out infinite",
        sparkle:          "sparkle 2s ease-in-out infinite",
        shimmer:          "shimmer 2s linear infinite",
        "spin-slow":      "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
