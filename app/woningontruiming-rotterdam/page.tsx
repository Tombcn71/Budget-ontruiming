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
  title: "Ontruiming Rotterdam | Budgetontruiming.nl",
  description:
    "Ontruiming Rotterdam: Centrum, Kralingen, Feijenoord + alle wijken. Laagste prijs garantie.",
  keywords:
    "woningontruiming rotterdam, ontruiming rotterdam, ontruiming centrum rotterdam, ontruiming noord rotterdam, ontruiming zuid rotterdam, ontruiming west rotterdam, ontruiming oost rotterdam, ontruiming kralingen, ontruiming feijenoord, ontruiming charlois, ontruiming ijsselmonde, ontruiming prins alexander, bezemschoon rotterdam 3000-3099, spoedontruiming rotterdam, ontruiming na overlijden rotterdam",
  openGraph: {
    title: "Ontruiming Rotterdam | 10 Wijken | Laagste Prijs",
    description:
      "Ontruiming Rotterdam: Centrum, Kralingen, Feijenoord + 7 wijken. 3000-3099. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-rotterdam",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Rotterdam | 10 Wijken",
    description:
      "Ontruiming Rotterdam: Centrum, Kralingen, Feijenoord + 7 wijken.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-rotterdam",
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

export default function RotterdamPage() {
  const data = getGemeenteData("rotterdam")!

  return (
    <>
      <GemeenteStructuredData data={data} />
      <TopBanner />
      <Header />
      <main>
        <GemeenteHero
          gemeenteNaam="Rotterdam"
          subtitle="Professionele woningontruiming in heel Rotterdam met laagste prijs garantie. Van hoogbouw in Noord tot villa's in Hillegersberg – wij zijn 24/7 bereikbaar."
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

