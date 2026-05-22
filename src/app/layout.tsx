import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "JC Mobile Detailing | Mobile Car Detailing in Cincinnati, OH",
    template: "%s | JC Mobile Detailing",
  },
  description:
    "Top-rated mobile auto detailing in Cincinnati, OH. Interior & exterior detailing, ceramic coating, paint correction, clay & seal — we come to you. 87 five-star reviews. Call today!",
  keywords: [
    "mobile detailing Cincinnati OH",
    "car detailing Cincinnati",
    "auto detailing Cincinnati Ohio",
    "JC Mobile Detailing",
    "interior detailing Cincinnati",
    "ceramic coating Cincinnati",
    "paint correction Cincinnati",
    "mobile car wash Cincinnati",
    "Juan Cruz detailing Cincinnati",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
