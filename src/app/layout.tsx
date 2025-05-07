import type { Metadata } from "next";
import { Montserrat, League_Gothic, Fira_Mono } from "next/font/google";
import "./globals.css";
import MobileMenuProvider from "@/lib/context/mobileMenuContext";
import { LenisProvider } from "@/lib/utils/LenisProvider";
import { Suspense } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${firaMono.variable} ${montserrat.variable} ${leagueGothic.variable} antialiased`}
      >
        <MobileMenuProvider>
          <Suspense>
            <LenisProvider>{children}</LenisProvider>
          </Suspense>
        </MobileMenuProvider>
      </body>
    </html>
  );
}
