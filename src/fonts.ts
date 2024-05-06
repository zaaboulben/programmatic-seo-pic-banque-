

import { Open_Sans, Raleway } from 'next/font/google';

export const OPEN_SANS = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
});

export const RALEWAY = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
});

