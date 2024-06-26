import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://QuickAppsLab.com/"),
  title: {
    default: 'Custom Integrations & Apps for QuickBooks | QuickAppsLab',
    template: '%s | QuickAppsLab',
  },
  description: 'QuickAppsLab specialize in creating expertly crafted custom integrations that connect your business apps with QuickBooks ensuring business growth and efficiency.',
  verification: {
    google: 't9OjqDPhnJRM5sK2YAvxjWydIzKK4M29Q2vSOx_3YUo',
  },
  keywords: ['QuickBooks custom integrations', 'QuickBooks apps', 'QuickBooks features QuickBooks personalized solutions', 'business process automation', 'custom QuickBooks development', 'QuickBooks API integration', 'Accountants and bookkeepers'],
  openGraph: {
    title: 'Custom Integrations & Apps for QuickBooks | QuickAppsLab',
    description: 'QuickAppsLab specialize in creating expertly crafted custom integrations that connect your business apps with QuickBooks ensuring business growth and efficiency.',
    url: 'XXXXXXXXXXXXXXXXXXXXXXXX',
    siteName: 'QuickAppsLab',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Integrations & Apps for QuickBooks | QuickAppsLab',
    description: 'QuickAppsLab specialize in creating expertly crafted custom integrations that connect your business apps with QuickBooks ensuring business growth and efficiency.',
    site: '@QuickAppsLab',
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <SpeedInsights/>
        <Analytics />
        <Footer />
      </body>

      <GoogleTagManager gtmId="GTM-54KVWSH9"  />
      <GoogleAnalytics gaId="G-VV85CTCHY1" />
      
    </html>
  );
}
