import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import BottomBar from '@/components/ui/BottomBar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theomedia.co.uk'),
  title: {
    default: 'TheoMedia — Independent Web Design & Digital Product Studio | UK & Ireland',
    template: '%s | TheoMedia',
  },
  description:
    'TheoMedia is an independent digital studio engineering bespoke websites, ecommerce experiences, and business systems for ambitious brands across the UK and Ireland.',
  keywords: [
    'web design studio UK',
    'web design agency UK',
    'bespoke website design UK',
    'custom website development UK',
    'web design Ireland',
    'digital product studio UK',
  ],
  authors: [{ name: 'TheoMedia' }],
  creator: 'TheoMedia',
  publisher: 'TheoMedia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['en_IE'],
    url: 'https://www.theomedia.co.uk',
    siteName: 'TheoMedia',
    title: 'TheoMedia — Independent Web Design Studio',
    description:
      'We build websites and digital experiences people remember. Custom engineering for the UK and Ireland.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheoMedia — Independent Web Design & Digital Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheoMedia — Independent Web Design Studio',
    description:
      'We build websites and digital experiences people remember. Custom engineering for the UK and Ireland.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.theomedia.co.uk',
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><rect width='128' height='128' rx='30' fill='%23141210'/><text x='64' y='82' font-family='Georgia,serif' font-size='64' fill='%23F5F0E8' text-anchor='middle' font-weight='400'>T</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.theomedia.co.uk/#website',
                  url: 'https://www.theomedia.co.uk/',
                  name: 'TheoMedia',
                  alternateName: 'TheoMedia Independent Web Design Studio',
                  description:
                    'TheoMedia is an independent digital studio designing and engineering bespoke websites, ecommerce experiences, and business systems for ambitious brands across the UK and Ireland.',
                  inLanguage: 'en-GB',
                  publisher: {
                    '@id': 'https://www.theomedia.co.uk/#organization',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://www.theomedia.co.uk/#organization',
                  name: 'TheoMedia',
                  url: 'https://www.theomedia.co.uk/',
                  logo: 'https://www.theomedia.co.uk/apple-touch-icon.png',
                  description:
                    'Independent web design and digital product studio engineering bespoke websites and digital experiences across the UK and Ireland.',
                  email: 'hello@theomedia.co.uk',
                  telephone: '+353852258004',
                  priceRange: '£895 - £10,000+',
                  currenciesAccepted: 'GBP, EUR',
                  paymentAccepted: 'Bank Transfer, Credit Card, Stripe, Apple Pay',
                  areaServed: [
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Ireland' }
                  ],
                  knowsAbout: [
                    'Web Design',
                    'Custom Website Development',
                    'Ecommerce Development',
                    'Digital Products',
                    'Business Systems',
                    'UI/UX Design',
                    'SEO'
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bone text-near-black font-sans">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <BottomBar />
        <Footer />
      </body>
    </html>
  );
}
