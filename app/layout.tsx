import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Positivus | Digital Marketing Agency for Progressive Success",
  description:
    "Positivus helps businesses navigate the digital landscape through SEO, PPC, social media marketing, and content creation. Book your free consultation today.",

  keywords: [
    "Positivus",
    "Digital Marketing Agency",
    "SEO and Content Creation Services",
    "PPC Management",
    "Social Media Marketing Agency",
    "Business Growth Solutions",
    "Web Development Morocco",
    "Youssef Aboulkaram",
    "Front-End Devloper",
  ],

  alternates: {
    canonical: "https://positivu.vercel.app",
  },

  authors: [{ name: "Youssef Aboulkaram", url: "https://linkedin.com/in/youssefakm" }],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Positivus - Digital Marketing",
    description: "Navigate the digital landscape for success with our expert marketing solutions.",
    url: "https://positivu.vercel.app",
    siteName: "Positivus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Positivus Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Positivus - Digital Marketing",
    description: "Expert SEO and Digital Marketing services for progressive businesses.",
    images: ["/og-image.jpg"],
    creator: "@wolf_R00T",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", spaceGrotesk.className)}>
      <body>{children}</body>
    </html>
  );
}
