import type { Metadata } from "next";
import { Montserrat, League_Gothic } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        easing: 0.1,
        smoothWheel: true,
      }}
    >
      <html lang="en">
        <body className={`${montserrat.variable} ${leagueGothic.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
