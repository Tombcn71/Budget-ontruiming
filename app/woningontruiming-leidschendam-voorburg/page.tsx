import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Woningontruiming Leidschendam-Voorburg | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Professionele woningontruiming in Leidschendam, Voorburg en Stompwijk. Specialist in bezemschone oplevering (incl. gaten dichten). Laagste prijs garantie en binnen 24u beschikbaar.",
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

export default function LeidschendamVoorburgPage() {
  // FAQs
  const faqs = [
    {
      question: "Hoe snel kunnen jullie starten?",
      answer:
        "Meestal kunnen we binnen 1-3 werkdagen beginnen. Bij spoed is ontruiming vaak al binnen 24 uur mogelijk.",
    },
    {
      question: "Ontruimen jullie ook tuinen en schuren?",
      answer:
        "Ja, wij ontruimen de gehele woning inclusief tuin, schuur, garage en berging. Alles wordt bezemschoon opgeleverd.",
    },
    {
      question: "Hoe werkt de laagste prijs garantie precies?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Simpel en eerlijk.",
    },
    {
      question: "Leveren jullie ook bezemschoon op zonder pluggen en gaten?",
      answer:
        "Ja, wij zorgen dat uw huurwoning voldoet aan alle oplevervoorwaarden: volledig leeg, zonder pluggen en spijkergaten, schoon en gereed voor de nieuwe bewoner.",
    },
  ]

  // Wijken
  const wijken = [
    "Leidschendam",
    "Voorburg",
    "Stompwijk",
    "Het Centrum",
    "De Korte Akkeren",
    "Hofwijk",
  ]

  // Waarom kiezen
  const waaromKiezen = [
    "Lokale kennis van Leidschendam-Voorburg en omgeving",
    "Ervaring met verschillende woningtypes en -groottes",
    "Snel beschikbaar, ook voor spoedklussen",
    "Laagste prijs garantie",
    "Bezemschoon oplevering volgens verhuurderseisen",
  ]

  // Situaties
  const situaties = [
    {
      title: "Seniorenverhuizing Leidschendam-Voorburg",
      description:
        "Bij verhuizing naar een verzorgingstehuis of kleinere woning begeleiden wij het hele proces. Van uitzoeken en inpakken tot verhuizen en ontruimen van de oude woning.",
    },
    {
      title: "Huurwoning opleveren",
      description:
        "Wij zorgen dat uw huurwoning voldoet aan alle oplevervoorwaarden: volledig leeg, zonder pluggen en spijkergaten, schoon en gereed voor de nieuwe bewoner.",
    },
    {
      title: "Ontruiming bij verkoop",
      description:
        "Uw woning is verkocht en moet leeg? Wij ontruimen snel en grondig zodat de nieuwe eigenaar direct kan beginnen.",
    },
    {
      title: "Complete inboedelontruiming",
      description:
        "Van grote meubels tot kleine spullen op zolder – wij halen alles weg en zorgen voor milieuvriendelijke verwerking of donatie aan goede doelen.",
    },
  ]

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/leidschendam-voorburg/#service",
    "name": "Woningontruiming Leidschendam-Voorburg",
    "provider": {
      "@type": "MovingCompany",
      "name": "Budget Ontruiming",
      "url": "https://www.budgetontruiming.nl/",
      "telephone": "+31629759181"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Leidschendam-Voorburg",
      "sameAs": "https://www.wikidata.org/wiki/Q651163"
    },
    "description": "Professionele woningontruiming in Leidschendam-Voorburg. Expertise in bezemschoon opleveren conform verhuurderseisen, inclusief Stompwijk en de Korte Akkeren. Laagste prijs garantie.",
    "knowsAbout": [
      "Seniorenverhuizing Leidschendam-Voorburg",
      "Huurwoning opleveren zonder pluggen en spijkergaten",
      "Woningontruiming Stompwijk",
      "Complete inboedelontruiming Voorburg"
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
    "name": "Budget Ontruiming Leidschendam-Voorburg",
    "telephone": "+31629759181",
    "priceRange": "€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leidschendam-Voorburg",
      "addressRegion": "Zuid-Holland",
      "postalCode": "2260-2275",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.0833,
      "longitude": 4.3667
    }
  }

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
        "name": "Haaglanden",
        "item": "https://budgetontruiming.nl/regio/haaglanden"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Leidschendam-Voorburg",
        "item": "https://budgetontruiming.nl/woningontruiming-leidschendam-voorburg"
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <TopBanner />
      <Header />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Haaglanden", href: "/regio/haaglanden" },
        { label: "Leidschendam-Voorburg" }
      ]} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Leidschendam-Voorburg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Leidschendam-Voorburg, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Professionele woningontruiming in Leidschendam-Voorburg tegen de laagste prijs. Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Leidschendam-Voorburg
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Bezemschoon opleveren</span>
                  <span>|</span>
                  <span>Gaten dichten</span>
                  <span>|</span>
                  <span>Alle kernen</span>
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
            <h2 id="leidschendam-voorburg-info" className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Leidschendam-Voorburg
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In Leidschendam-Voorburg combineren we snelheid met zorgvuldigheid. Of u nu een appartement in het centrum, een rijtjeshuis in de Korte Akkeren of een villa in Voorburg heeft – wij ontruimen professioneel en tegen de scherpste prijs dankzij onze laagste prijs garantie.
            </p>

            {/* Wijken */}
            <div id="wijken-leidschendam-voorburg" className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Actief in alle kernen van Leidschendam-Voorburg:</h3>
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
                Waarom kiezen voor Budget Ontruiming in Leidschendam-Voorburg?
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
                    id={index === 1 ? "oplever-specialist" : undefined}
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
              Onze Diensten in Leidschendam-Voorburg
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
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders. Zonder pluggen en spijkergaten, volledig leeg en schoon.
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
                  Seniorenverhuizing
                </h3>
                <p className="text-muted-foreground">
                  Bij verhuizing naar een verzorgingstehuis of kleinere woning begeleiden wij het hele proces en ontruimen we de oude woning compleet.
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
        <section id="lv-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Leidschendam-Voorburg
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming in Leidschendam-Voorburg
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

        {/* GemeenteMap */}
        <GemeenteMap gemeenteNaam="Leidschendam-Voorburg" postcodes="2260-2275" />

        <Footer />
      </main>
    </>
  )
}
