import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FloatingNavDemo } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import Glowing from "@/components/GlowingCircle";
import Script from "next/script";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://boris-picard.fr/"),
  applicationName: "Boris Picard Portfolio",
  authors: [{ name: "Boris Picard", url: "https://boris-picard.fr/" }],
  keywords: [
    "développeur web",
    "développeur web mobile",
    "développeur front-end",
    "développeur back-end",
    "développement web",
    "développement mobile",
    "création de site web",
    "conception de site web",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "POO",
    "Javascript",
    "Typescript",
    "Git",
    "Github",
    "Figma",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Express.js",
    "React",
    "Astro",
    "Wordpress",
    "SEO",
    "Vercel",
    "Docker",
    "Next.js",
    "Node.js",
    "API REST",
    "API RESTful",
    "site web responsive",
    "freelance développeur web",
    "Boris Picard",
    "portfolio développeur web",
    "expertise front-end",
    "expertise back-end",
  ],
  title:
    "Boris Picard - Développeur Web & Web Mobile | Front-end, Back-end, SEO",
  description:
    "Boris Picard, développeur web et web mobile freelance spécialisé en front-end et back-end. Expertise en React, Next.js, Node.js, PHP, Base de données, Wordpress et plus. Contactez-moi pour des solutions innovantes en développement web et SEO",
  openGraph: {
    title:
      "Boris Picard - Développeur Web & Web Mobile | Front-end, Back-end, SEO",
    description:
      "Boris Picard, développeur web et web mobile freelance spécialisé en front-end et back-end. Expertise en React, Next.js, Node.js, PHP, Base de données, Wordpress et plus. Contactez-moi pour des solutions innovantes en développement web et SEO",
    siteName: "Boris Picard Portfolio",
    images: "",
    url: "https://boris-picard.fr/",
    type: "website",
  },
  twitter: {
    title:
      "Boris Picard - Développeur Web & Web Mobile | Front-end, Back-end, SEO",
    description:
      "Boris Picard, développeur web et web mobile freelance spécialisé en front-end et back-end. Expertise en React, Next.js, Node.js, PHP, Base de données, Wordpress et plus. Contactez-moi pour des solutions innovantes en développement web et SEO",
    images: "",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content={process.env.META_CONTENT}
        />
      </Head>
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
          src={process.env.GOOGLE_TAG}
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
