import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YatraHikes - Discover Amazing Treks Across India",
  description: "Explore the best trekking experiences across India with YatraHikes. Find treks in Uttarakhand, Himachal Pradesh, Kashmir, and more.",
  keywords: "trekking, hiking, India treks, Uttarakhand treks, Himachal treks, Kashmir treks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen bg-white">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
