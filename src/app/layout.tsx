import React from "react";
import "@/app/globals.css";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import BackToTopButton from "@/components/OurComponents/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackToTopButton />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
