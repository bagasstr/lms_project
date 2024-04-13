import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg: '#313131',
      accent: '#4c91dd',
      accent2: '#f8ab73',
      bgaccent: '#525252',
      text: '#ededed',
    },
    screens: {
      sm: { min: '320px', max: '425px' },
      md: { min: '426px', max: '767px' },
      lg: { min: '768px', max: '1023px' },
      xl: '1024px',
      notSupport: { max: '321px' },
    },
    extend: {},
  },
  plugins: [],
}
export default config
