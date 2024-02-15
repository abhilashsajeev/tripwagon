import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSearch } from '@/components/Header/Header';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';

export const metadata = {
  title: 'TripWagon | Kerala Taxi Cab Services',
  description: 'High Quality and Most Affordable tour cabs services kerala',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preload" href="/cars.webp" as="image" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSearch />
          {children}
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
