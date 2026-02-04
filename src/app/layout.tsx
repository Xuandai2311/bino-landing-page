import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, setRequestLocale } from 'next-intl/server';
import { Inter_Tight, Playfair_Display } from 'next/font/google';
// import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import '@/styles/global.css';

;
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: [
    {
      rel: 'Logo-icon',
      url: '/Logo-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default async function RootLayout(props: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${interTight.variable} ${playfairDisplay.variable}`}>
      <body>
        <NextIntlClientProvider>
          {/* <PostHogProvider> */}
          {props.children}
          {/* </PostHogProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
