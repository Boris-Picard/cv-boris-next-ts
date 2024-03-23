import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FloatingNavDemo } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import Glowing from "@/components/GlowingCircle";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Boris Picard - Développeur Web et Mobile | Expert en Développement Front-end et Back-end",
  description:
    "Boris Picard, développeur web et web mobile avec une expertise en développement front-end et back-end. Contactez-moi pour des solutions de développement web et mobile de haute qualité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta
        name="google-site-verification"
        content="5cxFq3lqxtaMoWNJJ4OyXuYB9eS70IsEYKhhdjRI7ek"
      />
      <Script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WB5LCNT5');`,
        }}
      />
      <body className={montserrat.className}>
        <Script
          id="gtag-script"
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-WB5LCNT5`}
          strategy="afterInteractive"
        />
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
