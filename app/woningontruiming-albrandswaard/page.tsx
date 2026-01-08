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
import AlbrandswaardSchema from "@/components/AlbrandswaardSchema"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Woningontruiming Albrandswaard | Rhoon & Poortugaal | Laagste Prijs",
  description:
    "Specialist in woningontruiming in Albrandswaard (Rhoon en Poortugaal). Discreet ontruimen na overlijden & bezemschone oplevering. Laagste prijs garantie.",
  keywords:
    "woningontruiming albrandswaard, ontruiming albrandswaard, ontruiming rhoon, ontruiming poortugaal, bezemschoon albrandswaard 3161-3175, spoedontruiming albrandswaard, ontruiming na overlijden albrandswaard",
  openGraph: {
    title: "Ontruiming Albrandswaard | Laagste Prijs",
    description: "Ontruiming Albrandswaard: Rhoon, Poortugaal, Barendrecht-Zuid. 3161-3175. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-albrandswaard",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Albrandswaard",
    description: "Ontruiming Albrandswaard: Rhoon, Poortugaal, Barendrecht-Zuid.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-albrandswaard",
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
  title: "Woningontruiming Albrandswaard - Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Professionele woningontruiming in Albrandswaard. Poortugaal en Rhoon. Kleinschalig met persoonlijke service. Vindt u goedkoper? Wij duiken onder die prijs!!",
  keywords:
    "woningontruiming albrandswaard, ontruiming albrandswaard, huis ontruimen poortugaal, ontruiming rhoon, bezemschoon opleveren albrandswaard, woning leeghalen poortugaal, spoedontruiming rhoon",
  openGraph: {
    title: "Woningontruiming Albrandswaard - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Albrandswaard. Poortugaal en Rhoon.",
    url: "https://budgetontruiming.nl/woningontruiming-albrandswaard",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Albrandswaard - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in Albrandswaard. Poortugaal en Rhoon.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-albrandswaard",
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

export default function AlbrandswaardPage() {
  const data = getGemeenteData("albrandswaard")!
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://budgetontruiming.nl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rijnmond",
        "item": "https://budgetontruiming.nl/regio/rijnmond"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Albrandswaard",
        "item": "https://budgetontruiming.nl/woningontruiming-albrandswaard"
      }
    ]
  }

  return (
    <>
      <AlbrandswaardSchema />
      <GemeenteStructuredData data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TopBanner />
      <Header />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Rijnmond", href: "/regio/rijnmond" },
        { label: "Albrandswaard" }
      ]} />
      <main>
        <GemeenteHero
          gemeenteNaam="Albrandswaard"
          subtitle="Persoonlijke woningontruiming in Albrandswaard. Poortugaal en Rhoon krijgen onze volledige aandacht met lokale kennis en de laagste prijs garantie."
        />
        <HowItWorks />
        <GemeenteSeoContent data={data} />

        <GemeenteMap gemeenteNaam={data.naam} postcodes={data.postcodes} />
      </main>
      <Footer />
    </>
  )
}
