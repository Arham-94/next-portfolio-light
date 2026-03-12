import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "<Arham/>",
    template: "%s | Arham Portfolio",
  },

  description:
    "Arham is a Full-Stack Web Developer building modern web apps, scalable APIs, and smooth user interfaces.",

  keywords: [
    "Arham",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Arham" }],

  openGraph: {
    title: "Arham | Full Stack Developer",
    description:
      "Portfolio of Arham — building modern web applications with React, Next.js and Node.",
    url: "https://yourdomain.com",
    siteName: "Arham Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arham Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arham | Full Stack Developer",
    description:
      "Portfolio of Arham — building modern web applications with React and Next.js.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
