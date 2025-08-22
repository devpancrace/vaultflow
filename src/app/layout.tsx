import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

// On importe tous les poids dont on aura besoin
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

import "./globals.css";



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
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
