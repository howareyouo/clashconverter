import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Technical Minimalism Design System
        neo: {
          canvas: "var(--neo-canvas)",
          canvasDark: "var(--neo-canvas-dark)",
          foreground: "var(--neo-foreground)",
          muted: "var(--neo-muted)",
          mutedLight: "var(--neo-muted-light)",
          accent: "var(--neo-accent)",
          accentHover: "var(--neo-accent-hover)",
          accentMuted: "var(--neo-accent-muted)",
          card: "var(--neo-card)",
          cardDark: "var(--neo-card-dark)",
          cardElevated: "var(--neo-card-elevated)",
          cardElevatedDark: "var(--neo-card-elevated-dark)",
          border: "var(--neo-border)",
          borderStrong: "var(--neo-border-strong)",
          borderDark: "var(--neo-border-dark)",
          borderStrongDark: "var(--neo-border-strong-dark)",
          success: "var(--neo-success)",
          warning: "var(--neo-warning)",
          error: "var(--neo-error)",
        },
        // shadcn compatibility
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        // NeoBrutal UI tokens (dark mode flips via CSS vars)
        canvas: "var(--canvas)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        main: "var(--main)",
        mint: "var(--mint)",
        lemon: "var(--lemon)",
        hotpink: "var(--hotpink)",
        brutal: "var(--brutal)",
      },
      boxShadow: {
        // NeoBrutal hard offset shadows
        brutal: "4px 4px 0 0 var(--brutal)",
        "brutal-lg": "6px 6px 0 0 var(--brutal)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Neo sharp edges
        neo: "2px",
        neoMd: "4px",
        neoLg: "8px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        // Legacy compatibility
        nunito: ["Space Grotesk", "sans-serif"],
        dmSans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Fluid typography scale
        "neo-xs": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        "neo-sm": ["0.875rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "neo-base": ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "neo-lg": ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.02em" }],
        "neo-xl": ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        "neo-2xl": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
        "neo-3xl": ["1.875rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "neo-4xl": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
      },
      animation: {
        // Purposeful animations
        "neo-enter": "neo-enter 0.3s ease-out forwards",
        "neo-enter-delayed": "neo-enter 0.3s ease-out 0.1s forwards",
        "neo-pulse-subtle": "neo-pulse-subtle 2s ease-in-out infinite",
        "neo-slide-in": "neo-slide-in 0.2s ease-out forwards",
        "neo-fade": "neo-fade 0.15s ease-out forwards",
      },
      keyframes: {
        "neo-enter": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "neo-pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "neo-slide-in": {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "neo-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionDuration: {
        "150": "150ms",
        "200": "200ms",
        "250": "250ms",
        "300": "300ms",
      },
      transitionTimingFunction: {
        "neo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "neo-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      spacing: {
        // Fine-tuned spacing scale
        "neo-1": "0.25rem",
        "neo-2": "0.5rem",
        "neo-3": "0.75rem",
        "neo-4": "1rem",
        "neo-5": "1.25rem",
        "neo-6": "1.5rem",
        "neo-8": "2rem",
        "neo-10": "2.5rem",
        "neo-12": "3rem",
        "neo-16": "4rem",
        "neo-20": "5rem",
        "neo-24": "6rem",
      },
    },
  },
  plugins: [],
};

export default config;