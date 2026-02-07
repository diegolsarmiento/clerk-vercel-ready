// app/[locale]/layout.tsx
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import type { Appearance } from "@clerk/types";
import "@/globals.css";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "clerk-vercel-ready",
  description: "Clerk + Next.js + Vercel + locale-ready starter",
};

const clerkAppearanceObject = {
  cssLayerName: "clerk",
  variables: { colorPrimary: "#000000" },
} satisfies Appearance;

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "es" }>;
}) {
  const { locale } = React.use(params);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ClerkProvider appearance={clerkAppearanceObject}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
