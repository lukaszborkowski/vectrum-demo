import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/helvetica/HelveticaNowDisplay-ExtBlk.woff2",
      weight: "950",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vectrum",
  description: "Vectrum is a design system for building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className} style={{ overflowX: "hidden" }}>

        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
