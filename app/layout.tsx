import type { Metadata } from "next";
import { Oswald, Playfair } from "next/font/google";
import JsonLd from "@/src/Components/JsonLD";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const geistMono = Playfair({
  variable: "--font-play-fair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Vinícius",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#pessoa`,
    name: "Jean Vinícius",
    jobTitle: "Full Stack Developer",
    url: SITE_URL,
    knowsAbout: ["Next.js", "TypeScript", "React", "React Native", "Node.js"],
    sameAs: [
      "https://github.com/jean-d-alves",
      "https://linkedin.com/in/jean-vinicius",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#site`,
    url: SITE_URL,
    name: "Portfólio Jean Vinícius",
    author: { "@id": `${SITE_URL}/#pessoa` },
  };
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <head>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
