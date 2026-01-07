import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"

export const metadata: Metadata = {
  title: "Woningontruiming Zoetermeer | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Woningontruiming in heel Zoetermeer (van Meerzicht tot Rokkeveen). Specialist in portiekflats en eengezinswoningen. Laagste prijs garantie en binnen 24u beschikbaar bij spoed.",
  keywords:
    "woningontruiming zoetermeer, ontruiming zoetermeer, ontruiming centrum zoetermeer, ontruiming meerzicht zoetermeer, ontruiming dorp zoetermeer, ontruiming palenstein zoetermeer, ontruiming buytenwegh zoetermeer, ontruiming seghwaert zoetermeer, ontruiming rokkeveen zoetermeer, ontruiming noordhove zoetermeer, bezemschoon zoetermeer 2700-2729, spoedontruiming zoetermeer, ontruiming na overlijden zoetermeer",
  openGraph: {
    title: "Ontruiming Zoetermeer | Alle Wijken | Laagste Prijs",
    description:
      "Ontruiming Zoetermeer: Centrum, Meerzicht, Palenstein + 5 wijken. 2700-2729. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-zoetermeer",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Zoetermeer | Alle Wijken",
    description:
      "Ontruiming Zoetermeer: Centrum, Meerzicht, Palenstein + 5 wijken.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-zoetermeer",
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

export default function ZoetermeerPage() {
  // FAQs
  const faqs = [
    {
      question: "Werken jullie in alle wijken van Zoetermeer?",
      answer:
        "Ja, van Dorp tot Oosterheem, van Meerzicht tot Seghwaert – wij werken in heel Zoetermeer.",
    },
    {
      question: "Hoe snel kunnen jullie een woning in Zoetermeer ontruimen?",
      answer:
        "Een gemiddelde woning ontruimen we in 1-2 werkdagen. Starten kunnen we meestal binnen 1-3 werkdagen, bij spoed zelfs binnen 24 uur.",
    },
    {
      question: "Wat gebeurt er met mijn spullen?",
      answer:
        "Bruikbare spullen gaan naar kringloopwinkels, waardevolle items kunnen verkocht worden, en de rest wordt milieuvriendelijk afgevoerd volgens de regels van de gemeente Zoetermeer.",
    },
    {
      question: "Wat houdt de laagste prijs garantie in?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo weet u zeker dat u bij ons altijd de beste prijs krijgt.",
    },
  ]

  // Wijken
  const wijken = [
    "Zoetermeer Centrum",
    "Meerzicht",
    "Dorp",
    "Palenstein",
    "Buytenwegh",
    "Rokkeveen",
    "Noordhove",
    "Oosterheem",
    "Seghwaert",
  ]

  // Waarom kiezen
  const waaromKiezen = [
    "Kennis van alle Zoetermeerse wijken",
    "Ervaring met zowel portiekflats als eengezinswoningen",
    "Snelle beschikbaarheid, ook voor spoedklussen",
    "Laagste prijs garantie",
  ]

  // Situaties
  const situaties = [
    {
      title: "Portiekflat ontruimen Zoetermeer",
      description:
        "Zoetermeer kent veel portiekflats en galerijwoningen. Wij hebben ervaring met het ontruimen van appartementen in deze woningtypes, rekening houdend met buren en gemeenschappelijke ruimtes.",
    },
    {
      title: "Eengezinswoning ontruimen",
      description:
        "Van Meerzicht tot Rokkeveen, van Palenstein tot Noordhove – wij ontruimen eengezinswoningen compleet inclusief garage, schuur en tuin.",
    },
    {
      title: "Seniorenverhuizing Zoetermeer",
      description:
        "Bij verhuizing naar een zorginstelling of kleiner appartement begeleiden wij u volledig en ontruimen we de oude woning professioneel.",
    },
    {
      title: "Bezemschoon opleveren huurwoning",
      description:
        "Woningcorporaties in Zoetermeer stellen hoge eisen. Wij zorgen dat uw huurwoning volledig aan de oplevervoorwaarden voldoet.",
    },
  ]

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/zoetermeer/#service",
    "name": "Woningontruiming Zoetermeer",
    "provider": {
      "@type": "MovingCompany",
      "name": "Budget Ontruiming",
      "url": "https://www.budgetontruiming.nl/",
      "telephone": "+31629759181"
    },
    "areaServed": {
      "@type": "City",
      "name": "Zoetermeer",
      "sameAs": "https://www.wikidata.org/wiki/Q71696"
    },
    "description": "Professionele woningontruiming in alle wijken van Zoetermeer. Expert in portiekflats, galerijwoningen en eengezinswoningen. Laagste prijs garantie.",
    "knowsAbout": [
      "Portiekflat ontruimen Zoetermeer",
      "Seniorenverhuizing Zoetermeer",
      "Bezemschoon opleveren huurwoning Zoetermeer",
      "Woningontruiming Oosterheem en Rokkeveen"
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
    "name": "Budget Ontruiming Zoetermeer",
    "telephone": "+31629759181",
    "priceRange": "€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zoetermeer",
      "addressRegion": "Zuid-Holland",
      "postalCode": "2700-2729",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.0607,
      "longitude": 4.4940
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
              alt="Professionele woningontruiming Zoetermeer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Zoetermeer, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Woningontruiming in heel Zoetermeer met laagste prijs garantie. Van Meerzicht tot Rokkeveen, wij ontruimen snel en professioneel tegen de beste prijs.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Zoetermeer
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Portiekflats</span>
                  <span>|</span>
                  <span>Eengezinswoningen</span>
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
            <h2 id="zoetermeer-info" className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Zoetermeer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Zoetermeer is een grote stad met diverse wijken van vroege nieuwbouw tot modern. Wij bieden professionele woningontruiming in alle wijken van Zoetermeer tegen de laagste prijs, gegarandeerd.
            </p>

            {/* Wijken */}
            <div id="zoetermeer-wijken" className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Actief in alle wijken van Zoetermeer:</h3>
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
                Waarom kiezen voor Budget Ontruiming in Zoetermeer?
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
                    id={index === 0 ? "portiekflat-specialist" : undefined}
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
              Onze Diensten in Zoetermeer
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
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en woningcorporaties. Perfect voor portiekflats en huurwoningen.
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
                  Extra Diensten
                </h3>
                <p className="text-muted-foreground">
                  Vloerbedekking verwijderen, behang afstomen, gaatjes vullen, schilderwerk en inpakservice.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Portiekflats & Galerijwoningen
                </h3>
                <p className="text-muted-foreground">
                  Specialisatie in het ontruimen van portiekflats en galerijwoningen. Rekening houdend met buren en gemeenschappelijke ruimtes.
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
        <section id="zoetermeer-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Zoetermeer
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming in Zoetermeer
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
        <GemeenteMap gemeenteNaam="Zoetermeer" postcodes="2700-2729" />

        <Footer />
      </main>
    </>
  )
}
