import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Header from "./components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Zarin Rafah - Content Strategist & Storyteller",
  description:
    "Explore Zarin Rafah’s portfolio, an expert content strategist and storyteller, turning ideas into compelling digital experiences. Collaborate, create, and grow your brand with her expertise.",
  keywords: [
    "Zarin Rafah",
    "Content Strategist",
    "Storyteller",
    "Digital Content",
    "Video Editing",
    "Content Strategy",
    "Collaboration",
    "Portfolio",
  ],
  authors: [{ name: "Zarin Rafah", url: "https://zarinrafah.com" }],
  creator: "Zarin Rafah",
  openGraph: {
    title: "Zarin Rafah - Content Strategist & Storyteller",
    description:
      "Zarin Rafah is a creative content strategist and storyteller, turning ideas into captivating digital experiences. Create and grow your brand with engaging videos.",
    url: "https://zarinrafah.com",
    siteName: "Zarin Rafah Portfolio",
    images: [
      {
        url: "/og-image.png",
        alt: "Zarin Rafah - Content Strategist Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarin Rafah - Content Strategist & Storyteller",
    description:
      "Zarin Rafah is a creative content strategist and storyteller, turning ideas into captivating digital experiences. Create and grow your brand with engaging videos.",
    images: ["/og-image.png"],
    creator: "@ZarinRafah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MtR4-zX33S1zmt5sRJtYH9wqMfN5U2plgDe4OSss6U4"
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-NEGTCQM3Q3`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NEGTCQM3Q3', {
                page_path: window.location.pathname,
                stream_name: 'Zarin Rafah',
                stream_url: 'https://zarinrafah.com',
                stream_id: '12313308748'
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
