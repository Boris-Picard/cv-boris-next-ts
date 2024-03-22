import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FloatingNavDemo } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import Glowing from "@/components/GlowingCircle";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boris Picard",
  description: "Développeur web et web mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Glowing />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <FloatingNavDemo />
            <Hero />
          </header>
          <main className="container mx-auto">{children}</main>
          <footer className="lg:container mx-auto py-4">
            <Link href="https://github.com/Boris-Picard" target="_blank">
              <p className="text-center text-sm text-muted-foreground hover:text-primary transition-all">
                © Designed & Built by Boris Picard · 2024
              </p>
            </Link>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
