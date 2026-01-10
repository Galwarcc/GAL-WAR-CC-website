/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // Slytherin Dark Fantasy Theme Colors
                        slytherin: {
                                'emerald': '#1F6B4F',
                                'jade': '#174F3A',
                                'moss': '#2E7A5E',
                                'serpent': '#6FAF95',
                                'scale-dark': '#1C3E33',
                                'scale-highlight': '#4E8F78',
                        },
                        gold: {
                                'antique': '#C9A45C',
                                'brass': '#A8843A',
                                'soft': '#E3C987',
                                'firelight': '#E2A85C',
                                'lamp': '#FFD8A0',
                        },
                        forest: {
                                'black': '#0B1A16',
                                'shadow': '#10241E',
                                'pine': '#0E2A22',
                        }
                },
                keyframes: {
                        'accordion-down': {
                                from: {
                                        height: '0'
                                },
                                to: {
                                        height: 'var(--radix-accordion-content-height)'
                                }
                        },
                        'accordion-up': {
                                from: {
                                        height: 'var(--radix-accordion-content-height)'
                                },
                                to: {
                                        height: '0'
                                }
                        },
                        'holo-pulse': {
                                '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
                                '50%': { opacity: '1', transform: 'scale(1.05)' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-20px)' }
                        },
                        'glow': {
                                '0%, 100%': { boxShadow: '0 0 20px rgba(255, 69, 0, 0.5)' },
                                '50%': { boxShadow: '0 0 40px rgba(255, 69, 0, 0.8)' }
                        },
                        'scale-up': {
                                '0%': { transform: 'scale(1)' },
                                '100%': { transform: 'scale(1.1)' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'holo-pulse': 'holo-pulse 3s ease-in-out infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite',
                        'scale-up': 'scale-up 0.3s ease-out forwards'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
