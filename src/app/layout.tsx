import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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
  keywords: ["Zarin Rafah", "Content Strategist", "Storyteller", "Digital Content", "Video Editing", "Content Strategy", "Collaboration", "Portfolio"],
  authors: [{ name: "Zarin Rafah", url: "https://www.zarinrafah.com" }],
  creator: "Zarin Rafah",
  openGraph: {
    title: "Zarin Rafah - Content Strategist & Storyteller",
    description:
      "Explore Zarin Rafah’s portfolio, an expert content strategist and storyteller, turning ideas into compelling digital experiences. Collaborate, create, and grow your brand with her expertise.",
    url: "https://www.zarinrafah.com",
    siteName: "Zarin Rafah Portfolio",
    images: [
      {
        url: "/og-image.png", // replace with your OG image path

        alt: "Zarin Rafah - Content Strategist Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarin Rafah - Content Strategist & Storyteller",
    description:
      "Explore Zarin Rafah’s portfolio, an expert content strategist and storyteller, turning ideas into compelling digital experiences. Collaborate, create, and grow your brand with her expertise.",
    images: ["/og-image.png"], // same OG image
    creator: "@ZarinRafah", // if Twitter handle exists
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
