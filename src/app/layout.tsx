import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Bebas_Neue, Space_Grotesk, Archivo_Black, Inter } from 'next/font/google';
import './globals.css';
import '../styles/styles.css';
import { LanguageProvider } from '@/hooks/useLanguage';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const space = Space_Grotesk({ subsets: ['latin'], weight: ['400','700'], variable: '--font-space' });
const archivo = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--font-archivo' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${bebas.variable} ${space.variable} ${archivo.variable} ${inter.variable} bg-gradient-to-br from-octo-green/95 via-octo-blue/100 to-octo-green/90 text-octo-yellow font-inter overflow-x-hidden`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'octo.hub | Soluções Estratégicas Conectadas',
  description: 'Especialistas em captação de clientes.',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/'
    }
  },
  openGraph: {
    type: 'website',
    title: 'octo.hub | Soluções Estratégicas Conectadas',
    description: 'Especialistas em captação de clientes.',
    url: '/',
    images: [{ url: '/assets/logos/logo-fundo-verde.png' }]
  },
  icons: {
    icon: '/assets/logos/logo-fundo-verde.png'
  }
};