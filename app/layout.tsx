import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/components/ModalContext"; // New import

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BrandBounce - Elevate Your Brand with a Bounce",
  description:
    "BrandBounce is a playful and creative agency dedicated to helping startups and small businesses stand out with bold, memorable branding.",
  keywords: [
    "branding agency",
    "logo design",
    "brand identity",
    "small business branding",
    "startup branding",
    "creative agency",
    "graphic design",
    "web design",
    "social media design",
    "video editing",
  ],
  authors: [{ name: "BrandBounce Team" }],
  creator: "BrandBounce",
  publisher: "BrandBounce",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandbounce.com",
    title: "BrandBounce - Elevate Your Brand with a Bounce",
    description: "Creative branding agency for startups and small businesses",
    siteName: "BrandBounce",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrandBounce - Creative Branding Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandBounce - Elevate Your Brand with a Bounce",
    description: "Creative branding agency for startups and small businesses",
    images: ["/twitter-image.jpg"],
    creator: "@brandbounce",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://brandbounce.com" />
        <meta name="theme-color" content="#1E90FF" />
        {/* Add the preconnect links here */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link
          rel="preconnect"
          href="https://i.vimeocdn.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider defaultTheme="light">
          <ModalProvider>
            {" "}
            {/* Wrap children with ModalProvider */}
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
