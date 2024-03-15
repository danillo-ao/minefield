import { Lato, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

// Import google fonts

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

const digitalFont = localFont({
  src: [
    {
      path: '../../assets/fonts/digital-7.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
// src / theme / values / fonts.ts;
// Use Google fonts in Stitches

export const fonts = {
  montserrat: montserrat.style.fontFamily,
  lato: lato.style.fontFamily,
  digital: digitalFont.style.fontFamily,
  //
  default: '$lato',
  title: '$montserrat',
};

export const fontSizes = {
  0: '0.6rem',
  1: '0.75rem',
  2: '0.87rem',
  '2_5': '0.9rem',
  3: '1rem',
  4: '1.12rem',
  5: '1.25rem',
  6: '1.37rem',
  7: '1.62rem',
  8: '2rem',
  9: '2.37rem',
  10: '2.5rem',
  11: '3rem',
  // aliases
  default: '$3',
  title: '$7',
  subtitle: '$3',
  button: '$3',
  input: '$3',
};

export const lineHeights = {
  0: '0.6rem',
  1: '0.75rem',
  2: '0.87rem',
  3: '1rem',
  4: '1.12rem',
  5: '1.25rem',
  6: '1.37rem',
  7: '1.62rem',
  8: '2rem',
  9: '2.37rem',
  10: '2.5rem',
  11: '3rem',
  // aliases
  default: '$3',
  button: '$3',
  input: '$3',
};
