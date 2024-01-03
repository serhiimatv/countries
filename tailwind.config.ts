import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#111517',
      HeaderDark: '#2B3844',
      bodyLight: '#FAFAFA',
      bodyDark: '#202C36',
    },
  },
  plugins: [],
};
export default config;
