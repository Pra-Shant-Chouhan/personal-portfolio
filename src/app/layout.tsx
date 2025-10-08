import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { HeaderWrapper } from "@/components/HeaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant - Portfolio | MERN Stack Developer",
  description:
    "Portfolio of Prashant, a passionate MERN Stack Developer and UI/UX Designer creating beautiful, functional web applications.",
  keywords: [
    "portfolio",
    "web developer",
    "MERN stack",
    "React",
    "Next.js",
    "UI/UX Developer",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Prashant Chouhan" }],
  creator: "Prashant Chouhan",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderWrapper>{children}</HeaderWrapper>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
