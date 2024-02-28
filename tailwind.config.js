const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')
const toColorValue = require('tailwindcss/src/util/toColorValue')

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.jpg')",
      },
      fontFamily: {
        'display': ['Lato'],
        'overpass': ['Overpass'],
        'russo': ['Russo One'],
        'exo': ['Exo 2'],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config('prefix')}-text-border-size`

      matchUtilities(
        {
          'text-border': (value) => ({
            'text-shadow': `0 0 var(${textBorderSize},1px) ${toColorValue(value)}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(flattenColorPalette(theme('borderColor'))),
          type: 'color',
        }
      )
      matchUtilities(
        {
          'text-border-size': (value) => ({
            [textBorderSize]: value
          }),
        },
        { values: theme('borderWidth') }
      )
    }),
  ],
}

