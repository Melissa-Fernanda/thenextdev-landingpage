import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import localFont from 'next/font/local';
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})
export const metadata: Metadata = {
  title: "Estudando com a Melissinha",
  description: "Estudando Next,js com a Melissinha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans atialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
