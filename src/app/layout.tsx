import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// [[SEO_META]] — Fill in the business name, city, state, and primary services.
export const metadata: Metadata = {
  title: {
    default: "[[BUSINESS_NAME]] | Professional Auto Detailing in [[CITY]], [[STATE]]",
    template: "%s | [[BUSINESS_NAME]]",
  },
  description:
    "Professional auto detailing in [[CITY]], [[STATE]]. Interior & exterior detailing, paint correction, waxing, and more. Call [[PHONE_DISPLAY]].",
  keywords: [
    "auto detailing [[CITY]] [[STATE]]",
    "car detailing [[CITY]]",
    "interior detailing [[CITY]]",
    "exterior detailing [[CITY]]",
    "[[BUSINESS_NAME]]",
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
