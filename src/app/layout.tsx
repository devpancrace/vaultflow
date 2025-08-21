import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Vaultflow - Modern Analytics for the Modern World',
  description: 'Transform your data with our powerful analytics platform. Trusted by over 1,000 leading organizations worldwide.',
  keywords: 'analytics, dashboard, data visualization, modern analytics, business intelligence',
  authors: [{ name: 'Vaultflow Team' }],
  creator: 'Vaultflow',
  publisher: 'Vaultflow',
  openGraph: {
    title: 'Vaultflow - Modern Analytics Platform',
    description: 'Transform your data with our powerful analytics platform',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaultflow - Modern Analytics Platform',
    description: 'Transform your data with our powerful analytics platform',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
