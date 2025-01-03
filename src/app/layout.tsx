import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import local from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const myFonts = local({
  src: [{ path: '../../public/fonts/Gill Sans.otf' }],
  variable: '--font-myFont',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        ></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
          rel='stylesheet'
        ></link>
      </head>
      <body className={inter.className}>
        <div
          className={`w-screen h-screen overflow-x-hidden ${myFonts.className}`}
        >
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
