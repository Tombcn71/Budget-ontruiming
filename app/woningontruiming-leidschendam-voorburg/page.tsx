import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteHero } from "@/components/gemeente-hero"
import { HowItWorks } from "@/components/how-it-works"
import { GemeenteSeoContent } from "@/components/gemeente-seo-content"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { getGemeenteData } from "@/lib/gemeente-data"
import { GemeenteStructuredData } from "@/components/gemeente-structured-data"

export const metadata: Metadata = {
  title: "Ontruiming Leidschendam-Voorburg | Laagste Prijs",
  description:
    "Ontruiming Leidschendam-Voorburg: Centrum, Stompwijk + alle kernen. Vindt u goedkoper? Wij duiken eronder!",
  keywords:
    "woningontruiming leidschendam-voorburg, ontruiming leidschendam, ontruiming voorburg, ontruiming stompwijk, ontruiming het centrum leidschendam, ontruiming korte akkeren, ontruiming hofwijk, bezemschoon leidschendam-voorburg 2260-2275, spoedontruiming leidschendam-voorburg, ontruiming na overlijden leidschendam-voorburg",
  openGraph: {
    title: "Ontruiming Leidschendam-Voorburg | Laagste Prijs",
    description:
      "Ontruiming Leidschendam-Voorburg: Centrum, Stompwijk + 4 kernen. 2260-2275. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-leidschendam-voorburg",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Leidschendam-Voorburg",
    description:
      "Ontruiming Leidschendam-Voorburg: Centrum, Stompwijk + 4 kernen.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-leidschendam-voorburg",
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

// OLD
export const OLD_metadata: Metadata = {
  title: "Woningontruiming Leidschendam-Voorburg - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Leidschendam-Voorburg. Alle wijken, alle woningtypes. Vindt u goedkoper? Wij duiken onder die prijs!!",
  keywords:
    "woningontruiming leidschendam-voorburg, ontruiming voorburg, ontruiming leidschendam, huis ontruimen voorburg, bezemschoon opleveren leidschendam, woning leeghalen voorburg, spoedontruiming leidschendam, inboedel ontruiming voorburg",
  openGraph: {
    title: "Woningontruiming Leidschendam-Voorburg - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Leidschendam-Voorburg. Alle wijken, alle woningtypes. Direct beschikbaar!",
    url: "https://budgetontruiming.nl/woningontruiming-leidschendam-voorburg",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Leidschendam-Voorburg - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Leidschendam-Voorburg. Vindt u goedkoper? Wij duiken onder die prijs!!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-leidschendam-voorburg",
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

export default function LeidschenJamVoorburgPage() {
  const data = getGemeenteData("leidschendam-voorburg")!

  return (
    <>
      <GemeenteStructuredData data={data} />
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Leidschendam-Voorburg"
          subtitle="Professionele woningontruiming in Leidschendam-Voorburg tegen de laagste prijs. Vindt u het elders goedkoper? Wij duiken onder die prijs!"
        />
        <HowItWorks />
        <GemeenteSeoContent data={data} />

        {/* AI Quote Form Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Direct een offerte aanvragen?
              </h2>
              <p className="text-lg text-muted-foreground">
                Upload foto's van uw woning en krijg binnen 2 minuten een prijsindicatie via onze AI tool.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <AIQuoteForm />
            </div>
          </div>
        </section>

        <GemeenteMap gemeenteNaam={data.naam} postcodes={data.postcodes} />
      </main>
      <Footer />
    </>
  )
}

