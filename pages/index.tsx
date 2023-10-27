import React from 'react';

import Head from 'next/head';

import { HomeScreen } from '@screens/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Minefield - Danillo Oliveira</title>
        <meta
          name="description"
          content="Danillo Alves de Oliveira, 24 anos. Desenvolvedor front-end - React Native - ReactJS - NextJS."
        />
        <meta name="theme-color" content="#00d2f0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Danillo Alves de Oliveira" />
        <meta
          property="og:description"
          content="Danillo Alves de Oliveira, 24 anos. Desenvolvedor front-end - React Native - ReactJS - NextJS."
        />
        <meta
          property="og:image"
          content="https://cdn.danillo.dev/danillodev/profile-pic.png"
        />
        <meta
          property="og:image:alt"
          content="Danillo Alves de Oliveira - Profile"
        />

        <meta name="twitter:title" content="Danillo Alves de Oliveira" />
        <meta
          name="twitter:description"
          content="Danillo Alves de Oliveira, 24 anos. Desenvolvedor front-end - React Native - ReactJS - NextJS."
        />
        <meta name="twitter:url" content="https://www.danillo.dev" />
        <meta
          name="twitter:image:src"
          content="https://cdn.danillo.dev/danillodev/profile-pic.png"
        />
        <meta
          name="twitter:image:alt"
          content="Danillo Alves de Oliveira - Profile"
        />
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <main>
        <HomeScreen />
      </main>
    </>
  );
}
