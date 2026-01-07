import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"

export const metadata: Metadata = {
  title: "Woningontruiming Goeree-Overflakkee | Middelharnis & Ouddorp",
  description:
    "Specialist in woningontruiming op Goeree-Overflakkee. Van vakantiehuizen in Ouddorp tot woningen in Middelharnis. Laagste prijs garantie & eiland-dekking.",
  keywords:
    "woningontruiming goeree-overflakkee, ontruiming middelharnis, ontruiming ouddorp, ontruiming dirksland, vakantiehuis ontruimen goeree, huis ontruimen goeree-overflakkee, bezemschoon opleveren eiland",
  openGraph: {
    title: "Woningontruiming Goeree-Overflakkee - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming op Goeree-Overflakkee. Alle kernen bereikbaar.",
    url: "https://budgetontruiming.nl/woningontruiming-goeree-overflakkee",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Goeree-Overflakkee - Laagste Prijs Garantie",
    description: "Professionele woningontruiming op het eiland Goeree-Overflakkee.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-goeree-overflakkee",
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

export default function GoereeOverflakkeePage() {
  // FAQs
  const faqs = [
    {
      question: "Werken jullie in alle kernen van Goeree-Overflakkee?",
      answer:
        "Ja, wij werken op het gehele eiland: van Middelharnis, Sommelsdijk en Dirksland tot Ouddorp, Stellendam en Oude-Tonge.",
    },
    {
      question: "Ontruimen jullie ook vakantiehuizen op Goeree-Overflakkee?",
      answer:
        "Zeker. Wij hebben ruime ervaring met het ontruimen en bezemschoon opleveren van vakantiewoningen op recreatieparken, met name in de regio Ouddorp en Stellendam.",
    },
    {
      question: "Hoe snel kunnen jullie een woning op het eiland ontruimen?",
      answer:
        "Meestal kunnen we binnen 1-3 werkdagen starten. Ondanks de eilandlocatie zijn we snel beschikbaar voor ontruimingen op Goeree-Overflakkee.",
    },
    {
      question: "Geldt de laagste prijs garantie ook op het eiland?",
      answer:
        "Absoluut. Ondanks de eilandlocatie garanderen wij de laagste prijs. Vindt u het elders op Goeree-Overflakkee goedkoper? Wij duiken onder die prijs!",
    },
  ]

  // Wijken
  const wijken = [
    "Middelharnis",
    "Oude-Tonge",
    "Dirksland",
    "Sommelsdijk",
    "Stellendam",
    "Ouddorp",
  ]

  // Waarom kiezen
  const waaromKiezen = [
    "Expertise in vakantieparken en recreatiewoningen (focus op Ouddorp/Stellendam)",
    "Lokale kennis van de dorpskernen en lokale verhuurders op het eiland",
    "Volledige ontruiming bij verhuizing naar het vasteland",
    "Laagste prijs garantie: Wij duiken onder elke offerte op Voorne-Putten",
    "Eiland-dekking: Wij komen overal op Goeree-Overflakkee",
  ]

  // Situaties
  const situaties = [
    {
      title: "Vakantiehuis ontruimen Ouddorp",
      description:
        "Ouddorp en Stellendam kennen veel vakantiewoningen op recreatieparken. Wij hebben ervaring met het ontruimen en bezemschoon opleveren van vakantiehuizen volgens parkreglementen.",
    },
    {
      title: "Huurwoning bezemschoon opleveren",
      description:
        "Voor woningcorporaties op Goeree-Overflakkee leveren wij bezemschoon op volgens de strikte oplevervoorwaarden. Geen discussie bij de eindoplevering.",
    },
    {
      title: "Ontruiming na overlijden",
      description:
        "Met respect en zorg helpen wij bij het ontruimen na overlijden. Wij nemen alle zorgen uit handen tijdens deze moeilijke periode.",
    },
    {
      title: "Verhuizing naar vasteland",
      description:
        "Bij verhuizing van het eiland naar het vasteland ontruimen wij de oude woning compleet. Van Middelharnis tot Ouddorp, wij regelen het.",
    },
  ]

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/goeree-overflakkee/#service",
    "name": "Woningontruiming Goeree-Overflakkee",
    "provider": {
      "@type": "MovingCompany",
      "name": "Budget Ontruiming",
      "url": "https://www.budgetontruiming.nl/",
      "telephone": "+31629759181"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Goeree-Overflakkee",
      "sameAs": "https://www.wikidata.org/wiki/Q653634"
    },
    "description": "Professionele woningontruiming op heel Goeree-Overflakkee. Expertise in vakantiewoningen in Ouddorp en Stellendam, en permanente woningen in Middelharnis, Sommelsdijk en Oude-Tonge.",
    "knowsAbout": [
      "Vakantiehuis ontruimen Ouddorp",
      "Woningontruiming Middelharnis",
      "Bezemschoon opleveren Sommelsdijk",
      "Ontruiming na overlijden Goeree-Overflakkee"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Budget Ontruiming Goeree-Overflakkee",
    "telephone": "+31629759181",
    "priceRange": "€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Middelharnis",
      "addressRegion": "Zuid-Holland",
      "postalCode": "3240-3259",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7500,
      "longitude": 4.1667
    }
  }

  return (
    <>
      {/* Schema's direct in page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <TopBanner />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Goeree-Overflakkee"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Goeree-Overflakkee, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Woningontruiming op het eiland Goeree-Overflakkee. Van Middelharnis tot Ouddorp – wij ontruimen permanent bewoonde en vakantiewoningen tegen de laagste prijs.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie op het Eiland
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Vakantiehuizen</span>
                  <span>|</span>
                  <span>Eiland-dekking</span>
                  <span>|</span>
                  <span>Bezemschoon</span>
                </div>
              </div>

              <div>
                <AIQuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Hoe Het Werkt - Direct in page voor SEO */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Hoe Het Werkt
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              In 3 eenvoudige stappen naar een ontruimde woning zonder gedoe
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Prijs berekenen
                </h3>
                <p className="text-muted-foreground">
                  Ons slimme AI formulier berekent direct jouw prijs. Een woningbezoek is niet nodig. 
                  Goedkoper gevonden? Wij betalen het verschil.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Datum kiezen
                </h3>
                <p className="text-muted-foreground">
                  Kies de datum wanneer jij de woning ontruimd wil hebben. Meestal binnen 1-3 werkdagen 
                  beschikbaar, bij spoed binnen 24 uur.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ontruiming
                </h3>
                <p className="text-muted-foreground">
                  Ons professionele team voert de ontruiming snel en zorgvuldig uit op het afgesproken 
                  moment. Bezemschoon opgeleverd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content - Direct in page */}
        <article className="container mx-auto px-4 py-12 lg:py-16">
          <section className="prose prose-lg max-w-none mb-12">
            <h2 id="goeree-overflakkee-info" className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming op Goeree-Overflakkee
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Goeree-Overflakkee is een eilandgemeente met diverse kernen. Van vakantiewoningen in Ouddorp tot permanente woningen in Middelharnis – wij bieden professionele woningontruiming tegen de laagste prijs, gegarandeerd.
            </p>

            {/* Wijken */}
            <div id="eiland-kernen" className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Actief in alle kernen van Goeree-Overflakkee:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {wijken.map((wijk, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <span className="text-primary">✓</span>
                    <span className="text-sm">{wijk}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Waarom Kiezen */}
          <section className="py-12 lg:py-16 bg-muted/30 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Waarom kiezen voor Budget Ontruiming op Goeree-Overflakkee?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {waaromKiezen.map((reden, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-card">
                    <div className="flex gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <p className="text-foreground leading-relaxed">{reden}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Situaties */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Wanneer heeft u een woningontruiming nodig?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {situaties.map((situatie, index) => (
                  <div
                    key={index}
                    id={index === 0 ? "vakantiehuis-specialist" : undefined}
                    className="border rounded-lg p-6 bg-card"
                  >
                    <h3 className="font-bold text-lg text-foreground mb-3">{situatie.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{situatie.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Diensten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Onze Diensten op Goeree-Overflakkee
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Van eerste prijsindicatie tot bezemschone oplevering - alles uit één hand.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Volledige Woningontruiming
                </h3>
                <p className="text-muted-foreground">
                  Complete ontruiming van woningen, appartementen en bedrijfspanden. Milieuvriendelijke verwerking volgens gemeentelijke richtlijnen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en woningcorporaties. Perfect voor huurwoningen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Ontruiming na Overlijden
                </h3>
                <p className="text-muted-foreground">
                  Met respect en zorg helpen bij het ontruimen na overlijden. Discreet en zorgvuldig.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Spoedontruiming 24 uur
                </h3>
                <p className="text-muted-foreground">
                  Bij spoed vaak binnen 24 uur starten. Ook in weekenden beschikbaar voor spoedgevallen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Vakantiewoningen
                </h3>
                <p className="text-muted-foreground">
                  Specialisatie in het ontruimen van vakantiehuizen op recreatieparken in Ouddorp en Stellendam. Bezemschoon opleveren volgens parkreglementen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Extra Diensten
                </h3>
                <p className="text-muted-foreground">
                  Vloerbedekking verwijderen, behang afstomen, gaatjes vullen, schilderwerk en inpakservice.
                </p>
              </div>
            </div>
          </section>

          {/* USPs */}
          <section className="mb-12 bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Waarom kiezen voor Budget Ontruiming?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-4xl">🏆</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Laagste Prijs Garantie
                  </h3>
                  <p className="text-muted-foreground">
                    Vindt u het elders goedkoper? Stuur ons de offerte en wij gaan eronder. Geen verborgen kosten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Snel & Flexibel
                  </h3>
                  <p className="text-muted-foreground">
                    Binnen 1-3 werkdagen beschikbaar. Bij spoed binnen 24 uur. Ook avond- en weekendwerk mogelijk.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">♻️</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Milieuvriendelijk
                  </h3>
                  <p className="text-muted-foreground">
                    Materialen gescheiden en gerecycled. Bruikbare spullen naar kringloop. WEEE-richtlijnen voor elektronica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    All-in Ontzorging
                  </h3>
                  <p className="text-muted-foreground">
                    Van ontruiming tot oplevering. Eén aanspreekpunt. Kennen alle eisen van verhuurders en woningcorporaties.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* FAQ Section */}
        <section id="goeree-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming op Goeree-Overflakkee
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming op het eiland
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* GemeenteMap */}
        <GemeenteMap gemeenteNaam="Goeree-Overflakkee" postcodes="3240-3259" />

        <Footer />
      </main>
    </>
  )
}
