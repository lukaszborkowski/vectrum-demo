import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Curtain } from "@/components/Curtain";
import { Footer } from "@/components/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KetoVibe",
  description: "Najlepsze diety ketogeniczne w Polsce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <Curtain />
        <Navbar />
      

        {children}
        <Footer />
      </body>
    </html>
  );
}
