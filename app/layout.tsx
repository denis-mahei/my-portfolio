import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MainWrapper from '@/app/main-wrapper';

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Denys Mahei',
  description: 'Portfolio a fullstack Developer specializing in React, Next.js, and Node.js',
  openGraph: {
    title: 'Denys Mahei — Fullstack Developer',
    description: 'Portfolio a fullstack Developer specializing in React, Next.js, and Node.js',
    type: 'website',
    url: 'https://my-portfolio-seven-mauve-67.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denys Mahei — Fullstack Developer',
    description: 'Portfolio a fullstack Developer specializing in React, Next.js, and Node.js',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${firaCode.variable} ${inter.variable}`}>
      <body className="bg-backdrop text-foreground font-mono antialiased">
        <div className="p-4 lg:p-17.5 min-h-screen">
          <div className="border border-stroke rounded-lg min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-140px)] flex flex-col bg-background">
            <Header />
            <MainWrapper>{children}</MainWrapper>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
