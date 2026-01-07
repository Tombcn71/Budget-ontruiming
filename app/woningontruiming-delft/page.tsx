import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"

export const metadata: Metadata = {
  title: "Woningontruiming Delft | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Woningontruiming in Delft tegen de laagste prijs. Van studentenkamer bij de TU tot villa in de binnenstad. Wij regelen parkeervergunningen en leveren bezemschoon op.",
  keywords:
    "woningontruiming delft, ontruiming delft, ontruiming centrum delft, ontruiming tanthof delft, ontruiming vrijenban delft, ontruiming voorhof delft, ontruiming buitenhof delft, ontruiming wippolder delft, ontruiming hof van delft, ontruiming schieweg delft, bezemschoon delft 2600-2629, spoedontruiming delft, ontruiming na overlijden delft",
  openGraph: {
    title: "Ontruiming Delft | Alle Wijken | Laagste Prijs",
    description:
      "Ontruiming Delft: Centrum, Tanthof, Vrijenban + 5 wijken. 2600-2629. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-delft",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Delft | Alle Wijken",
    description:
      "Ontruiming Delft: Centrum, Tanthof, Vrijenban + 5 wijken.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-delft",
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

export default function DelftPage() {
  // FAQs
  const faqs = [
    {
      question: "Kunnen jullie ook kleine studentenkamers ontruimen?",
      answer:
        "Ja, wij doen ook kleinere klussen. Een studentenkamer kunnen we vaak binnen een halve dag ontruimen en bezemschoon opleveren.",
    },
    {
      question: "Hoe werkt het met parkeren in de binnenstad?",
      answer:
        "Wij kennen de Delftse binnenstad goed en regelen indien nodig een parkeervergunning of ontheffing. Ook kunnen we werken met handkarren voor smalle straatjes.",
    },
    {
      question: "Werken jullie ook in de weekenden?",
      answer:
        "Ja, voor spoedgevallen of als het beter uitkomt kunnen we ook in weekenden ontruimen. Dit plannen we graag samen in.",
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo weet u zeker dat u de beste prijs krijgt.",
    },
  ]

  // Wijken
  const wijken = [
    "Binnenstad",
    "Tanthof",
    "Voorhof",
    "Vrijenban",
    "Hof van Delft",
    "TU-wijk",
    "Schieoevers",
  ]

  // Waarom kiezen
  const waaromKiezen = [
    "Ervaring met zowel studentenwoningen als monumentale panden in de binnenstad",
    "Kennis van lokale parkeerregels en toegankelijkheid in smalle straten",
    "Flexibel beschikbaar, ook in drukke studenten-verhuisperiodes",
    "Laagste prijs garantie voor alle ontruimingen",
  ]

  // Situaties
  const situaties = [
    {
      title: "Studentenwoning ontruimen Delft",
      description:
        "Na een studententijd in Delft moet de kamer of woning vaak snel en compleet worden leeggehaald. Wij zorgen voor een snelle ontruiming en bezemschone oplevering, zodat u uw borg terugkrijgt.",
    },
    {
      title: "Ontruiming na overlijden Delft",
      description:
        "Bij het verlies van een naaste helpen wij met zorg en respect bij het ontruimen van de woning. We nemen de tijd om waardevolle herinneringen te bewaren en regelen alles verder tot bezemschoon.",
    },
    {
      title: "Gezinswoning ontruimen Delft",
      description:
        "Bij verhuizing van een gezinswoning in wijken als Tanthof, Vrijenban of Voorhof zorgen wij voor complete ontruiming: van zolder tot kelder, inclusief tuin en schuur.",
    },
    {
      title: "Bezemschoon opleveren Delft",
      description:
        "Verhuurders in Delft stellen vaak hoge eisen. Wij zorgen dat uw huurwoning aan alle voorwaarden voldoet: volledig leeg, schoon en zonder beschadigingen.",
    },
  ]

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/delft/#service",
    "name": "Woningontruiming Delft",
    "provider": {
      "@type": "MovingCompany",
      "name": "Budget Ontruiming",
      "url": "https://www.budgetontruiming.nl/",
      "telephone": "+31629759181"
    },
    "areaServed": {
      "@type": "City",
      "name": "Delft",
      "sameAs": "https://www.wikidata.org/wiki/Q690"
    },
    "description": "Professionele woningontruiming in Delft. Specialisatie in studentenwoningen, monumentale panden en bezemschone oplevering. Laagste prijs garantie.",
    "knowsAbout": [
      "Studentenwoning ontruimen Delft",
      "Ontruiming binnenstad Delft",
      "Bezemschoon opleveren Delft",
      "TU Delft wijk ontruimingen"
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
    "name": "Budget Ontruiming Delft",
    "telephone": "+31629759181",
    "priceRange": "€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delft",
      "addressRegion": "Zuid-Holland",
      "postalCode": "2600-2629",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.0116,
      "longitude": 4.3571
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
              alt="Professionele woningontruiming Delft"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Delft, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Woningontruiming in Delft tegen de laagste prijs. Van studentenkamer tot villa, wij ontruimen alles professioneel en betaalbaar. Laagste prijs gegarandeerd!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Delft
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Studentenwoningen</span>
                  <span>|</span>
                  <span>Binnenstad</span>
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
            <h2 id="delft-info" className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Delft
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Woningontruiming in Delft vraagt om begrip voor de unieke stad. Of het nu een studentenwoning nabij de TU, een karakteristiek pand in de binnenstad of een gezinswoning in Tanthof betreft – wij zorgen voor een grondige en betaalbare ontruiming met laagste prijs garantie.
            </p>

            {/* Wijken */}
            <div id="delft-wijken" className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Actief in alle wijken van Delft:</h3>
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
                Waarom kiezen voor Budget Ontruiming in Delft?
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
                  <div key={index} className="border rounded-lg p-6 bg-card">
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
              Onze Diensten in Delft
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
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en woningcorporaties. Perfect voor studentenwoningen en huurwoningen.
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
                  Studentenwoningen
                </h3>
                <p className="text-muted-foreground">
                  Specialisatie in studentenkamers en studentenwoningen. Snel en betaalbaar, zodat u uw borg terugkrijgt.
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
        <section id="delft-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Delft
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming in Delft
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
        <GemeenteMap gemeenteNaam="Delft" postcodes="2600-2629" />

        <Footer />
      </main>
    </>
  )
}
