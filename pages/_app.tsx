import React from 'react';

import { globalStyles } from '@styles/global.styles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
