import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const geisRoboto = Geist({
  variable: "--font-geist-roboto",
  subsets: ["latin"],
})

const geisRobotoMono = Geist_Mono({
  variable: "--font-geist-roboto-mono",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio personal de un desarrollador junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geisRoboto.variable} ${geisRobotoMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col"><ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider></body>
    </html>
  );
}
