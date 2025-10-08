import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Perfume Shop",
  description: "Discover exquisite fragrances from around the world",
  keywords: ["perfume", "fragrance", "luxury", "cosmetics"],
  authors: [{ name: "Perfume Shop" }],
  openGraph: {
    title: "Luxury Perfume Shop",
    description: "Discover exquisite fragrances from around the world",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Perfume Shop",
    description: "Discover exquisite fragrances from around the world",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
