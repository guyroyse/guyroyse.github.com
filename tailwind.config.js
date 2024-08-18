const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: {
    files: [
      './_layouts/*.html',
      './_posts/*.md',
      './blog/*.{html,md}',
      './*.{html,md}'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Raleway"', ...defaultTheme.fontFamily.sans],
        'mono': ['"Fira Code"', ...defaultTheme.fontFamily.mono]
      },
    }
  },
  plugins: []
}
