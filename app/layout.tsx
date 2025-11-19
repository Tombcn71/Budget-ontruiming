import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Woningontruiming Haaglanden & Rijnmond | Laagste Prijs",
  description:
    "Woningontruiming in Haaglanden en Rijnmond zonder gedoe met laagste prijs garantie. Prijs indicatie in 1 minuut met AI.",
  generator: "v0.app",
  keywords: "woningontruiming, woningontruiming haaglanden, woningontruiming rijnmond, ontruiming haaglanden, ontruiming rijnmond, bezemschoon opleveren, ontruiming na overlijden, spoedontruiming, seniorenverhuizing, inboedel ontruiming, huis ontruimen, woning leeghalen",
  authors: [{ name: "Budget Ontruiming" }],
  openGraph: {
    title: "Woningontruiming Haaglanden & Rijnmond | Laagste Prijs",
    description: "Woningontruiming in Haaglanden en Rijnmond zonder gedoe met laagste prijs garantie. Prijs indicatie in 1 minuut met AI.",
    url: "https://budgetontruiming.nl",
    siteName: "Budget Ontruiming",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Haaglanden & Rijnmond | Laagste Prijs",
    description: "Woningontruiming in Haaglanden en Rijnmond zonder gedoe. Prijs indicatie in 1 minuut met AI.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </body>
    </html>
  )
}
