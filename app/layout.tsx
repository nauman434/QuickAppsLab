import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://quickappslab.com/"),
  title: {
    default: 'Custom Integrations & Apps for QuickBooks | Quickappslab',
    template: '%s | Quickappslab',
  },
  description: 'QuickAppsLab specialize in creating expertly crafted custom integrations that connect your business apps with QuickBooks ensuring business growth and efficiency.',
  verification: {
    google: 'google',
  },
  keywords: ['QuickBooks custom integrations', 'QuickBooks apps', 'QuickBooks features QuickBooks personalized solutions', 'business process automation', 'custom QuickBooks development', 'QuickBooks API integration', 'Accountants and bookkeepers'],
  openGraph: {
    title: 'Custom Integrations & Apps for QuickBooks | Quickappslab',
    description: 'QuickAppsLab specialize in creating expertly crafted custom integrations that connect your business apps with QuickBooks ensuring business growth and efficiency.',
    url: 'XXXXXXXXXXXXXXXXXXXXXXXX',
    siteName: 'Quickappslab',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Integrations & Apps for QuickBooks | Quickappslab',
    description: 'QuickAppsLab specialize in creating expertly crafted custom integrations that connect your business apps with QuickBooks ensuring business growth and efficiency.',
    site: '@quickappslab',
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
        <Navbar/>
        <Separator/>
        {children}
        <Separator/>
        <Footer/>
        </body>
    </html>
  );
}
