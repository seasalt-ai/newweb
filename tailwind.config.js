/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      fontSize: {
        'xs-mobile': '0.75rem',
        'sm-mobile': '0.875rem',
        'base-mobile': '0.9375rem',
        'lg-mobile': '1.0625rem',
        'xl-mobile': '1.1875rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.800'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.blue.600'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-quotes': theme('colors.gray.700'),
            '--tw-prose-quote-borders': theme('colors.green.500'),
            '--tw-prose-code': theme('colors.gray.800'),
            '--tw-prose-pre-code': theme('colors.gray.100'),
            '--tw-prose-pre-bg': theme('colors.gray.900'),
          },
        },
        sm: {
          css: {
            fontSize: '0.9375rem',
            lineHeight: '1.6',
            h1: {
              fontSize: '1.75rem',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.5rem',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.25rem',
              lineHeight: '1.4',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
