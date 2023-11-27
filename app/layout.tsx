import "@styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Header from "@/components/sections/navigation/Header";
import Footer from "@/components/sections/navigation/Footer";

export const metadata: Metadata = {
  title: "StageUp - Your Professional Community",
  description:
    "StageUp is a professional community for students and recent graduates to connect with each other and with companies.",
  openGraph: {
    title: "StageUp - Your Professional Community",
    description:
      "StageUp is a professional community for students and recent graduates to connect with each other and with companies.",
    url: "https://stageup.vercel.app/",
    siteName: "StageUp",
    type: "website",
    images: "https://stageup.vercel.app/og.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "StageUp - Your Professional Community",
    description:
      "StageUp is a professional community for students and recent graduates to connect with each other and with companies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
