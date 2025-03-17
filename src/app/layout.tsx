import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";


const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lorenzo Sallons",
  description: "Portfolio of Lorenzo Sallons, a web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${commissioner.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
