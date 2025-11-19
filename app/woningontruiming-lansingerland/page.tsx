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
  title: "Ontruiming Lansingerland | Laagste Prijs",
  description:
    "Ontruiming Lansingerland: Bergschenhoek, Berkel, Bleiswijk + alle kernen. Vindt u goedkoper? Wij duiken eronder!",
  keywords:
    "woningontruiming lansingerland, ontruiming lansingerland, ontruiming bergschenhoek, ontruiming berkel en rodenrijs, ontruiming bleiswijk, bezemschoon lansingerland 2650-2665, spoedontruiming lansingerland, ontruiming na overlijden lansingerland",
  openGraph: {
    title: "Ontruiming Lansingerland | Laagste Prijs",
    description: "Ontruiming Lansingerland: Bergschenhoek, Berkel, Bleiswijk. 2650-2665. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-lansingerland",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Lansingerland",
    description: "Ontruiming Lansingerland: Bergschenhoek, Berkel, Bleiswijk.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-lansingerland",
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
export const OLD_metadata: Metadata = {
  title: "Woningontruiming Lansingerland - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Lansingerland. Berkel en Rodenrijs, Bleiswijk en Bergschenhoek. Vindt u goedkoper? Wij duiken onder die prijs!!",
  keywords:
    "woningontruiming lansingerland, ontruiming berkel en rodenrijs, ontruiming bleiswijk, ontruiming bergschenhoek, huis ontruimen lansingerland, bezemschoon opleveren lansingerland, spoedontruiming lansingerland",
  openGraph: {
    title: "Woningontruiming Lansingerland - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Lansingerland. Berkel en Rodenrijs, Bleiswijk en Bergschenhoek.",
    url: "https://budgetontruiming.nl/woningontruiming-lansingerland",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Lansingerland - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in alle kernen van Lansingerland.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-lansingerland",
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

export default function LansingerlandPage() {
  const data = getGemeenteData("lansingerland")!
  return (
    <>
      <GemeenteStructuredData data={data} />
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Lansingerland"
          subtitle="Woningontruiming in alle drie de kernen van Lansingerland: Berkel en Rodenrijs, Bleiswijk en Bergschenhoek. Lokale expertise met de laagste prijs garantie."
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
