import type { Metadata } from "next"
import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GemeenteMap } from "@/components/gemeente-map"
import { AIQuoteForm } from "@/components/ai-quote-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Woningontruiming Haaglanden | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Professionele woningontruiming in regio Haaglanden. Actief in 9 gemeentes o.a. Den Haag, Delft en Zoetermeer. Laagste prijs garantie & binnen 24u beschikbaar.",
  keywords: "woningontruiming haaglanden, ontruiming haaglanden, ontruiming den haag, ontruiming delft, ontruiming zoetermeer, ontruiming rijswijk, ontruiming leidschendam-voorburg, ontruiming wassenaar, bezemschoon haaglanden, spoedontruiming haaglanden",
  openGraph: {
    title: "Ontruiming Haaglanden | 9 Gemeentes | Laagste Prijs",
    description: "Ontruiming in Haaglanden: Den Haag, Delft, Zoetermeer + 6 gemeentes. Vindt u goedkoper? Wij duiken onder die prijs!",
    url: "https://budgetontruiming.nl/regio/haaglanden",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Haaglanden | 9 Gemeentes",
    description: "Ontruiming in Haaglanden: Den Haag, Delft, Zoetermeer + 6 gemeentes.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/regio/haaglanden",
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

export default function HaaglandenPage() {
  // Gemeentes
  const gemeentes = [
    { naam: "Den Haag", slug: "den-haag", wijken: 8, postcodes: "2490-2599" },
    { naam: "Delft", slug: "delft", wijken: 7, postcodes: "2600-2629" },
    { naam: "Zoetermeer", slug: "zoetermeer", wijken: 9, postcodes: "2700-2729" },
    { naam: "Rijswijk", slug: "rijswijk", wijken: 6, postcodes: "2280-2289" },
    { naam: "Wassenaar", slug: "wassenaar", wijken: 5, postcodes: "2240-2249" },
    { naam: "Westland", slug: "westland", wijken: 7, postcodes: "2260-2275, 2670-2685" },
    { naam: "Pijnacker-Nootdorp", slug: "pijnacker-nootdorp", wijken: 5, postcodes: "2640-2649" },
    { naam: "Leidschendam-Voorburg", slug: "leidschendam-voorburg", wijken: 6, postcodes: "2260-2275" },
    { naam: "Midden-Delfland", slug: "midden-delfland", wijken: 4, postcodes: "2636-2652" },
  ]

  // FAQs
  const faqs = [
    {
      question: "In welke gemeentes van Haaglanden zijn jullie actief?",
      answer: "Wij zijn actief in alle gemeentes van Haaglanden: Den Haag, Delft, Zoetermeer, Wassenaar, Westland, Rijswijk, Pijnacker-Nootdorp, Leidschendam-Voorburg en Midden-Delfland."
    },
    {
      question: "Hoe snel kunnen jullie een woningontruiming in Haaglanden uitvoeren?",
      answer: "Meestal kunnen we binnen 1-3 werkdagen starten met de ontruiming. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! U krijgt altijd de laagste prijs voor woningontruiming in Haaglanden, gegarandeerd."
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer: "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar."
    },
    {
      question: "Werken jullie ook in villawijken zoals Wassenaar?",
      answer: "Ja, wij hebben ruime ervaring met grotere woningen en villa's in wijken zoals Wassenaar. Onze teams zijn uitgerust voor woningen van elk formaat."
    },
    {
      question: "Hoe wordt de prijs bepaald?",
      answer: "De prijs hangt af van de grootte van de woning, de hoeveelheid inboedel, de verdieping en eventuele extra diensten zoals schilderwerk. Upload foto's via onze AI tool voor een directe indicatie."
    },
  ]

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/haaglanden/#service",
    "name": "Woningontruiming Regio Haaglanden",
    "description": "Centrale service voor woningontruiming in de regio Haaglanden, inclusief Den Haag, Delft, Zoetermeer en omstreken.",
    "provider": {
      "@type": "MovingCompany",
      "name": "Budget Ontruiming",
      "url": "https://www.budgetontruiming.nl/",
      "telephone": "+31629759181"
    },
    "areaServed": gemeentes.map(g => ({
      "@type": "City",
      "name": g.naam
    })),
    "knowsAbout": [
      "Woningontruiming Den Haag",
      "Woningontruiming Delft",
      "Woningontruiming Zoetermeer",
      "Bezemschoon opleveren Haaglanden",
      "Spoedontruiming Haaglanden"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ontruimingsdiensten Haaglanden",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seniorenverhuizing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spoedontruiming" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bedrijfsontruiming" } }
      ]
    }
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Woningontruiming Haaglanden - Laagste Prijs Garantie",
    "description": "Professionele woningontruiming in heel Haaglanden. Den Haag, Delft, Rijswijk, Wassenaar en meer.",
    "url": "https://budgetontruiming.nl/regio/haaglanden"
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Budget Ontruiming Haaglanden",
    "telephone": "+31629759181",
    "priceRange": "€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Den Haag",
      "addressRegion": "Zuid-Holland",
      "postalCode": "2490-2729",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.0705,
      "longitude": 4.3007
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Haaglanden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Haaglanden
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Professionele woningontruiming in Den Haag, Delft, Zoetermeer en 6 andere gemeentes. Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Haaglanden
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>9 gemeentes</span>
                  <span>|</span>
                  <span>24/7 bereikbaar</span>
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

        {/* Gemeentes Grid */}
        <section id="gemeente-overzicht" className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
                Woningontruiming in Haaglanden
              </h2>
              <p className="text-center text-muted-foreground mb-10 text-lg">
                Klik op uw gemeente voor specifieke informatie en prijzen
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gemeentes.map((gemeente) => (
                  <Link key={gemeente.slug} href={`/woningontruiming-${gemeente.slug}`}>
                    <div className="border rounded-lg p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                      <h3 className="font-bold text-xl text-foreground mb-2">{gemeente.naam}</h3>
                      <p className="text-sm text-muted-foreground">
                        {gemeente.wijken} wijken • {gemeente.postcodes}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content - Direct in page */}
        <article className="container mx-auto px-4 py-12 lg:py-16">
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Professionele Woningontruiming in Haaglanden
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              De regio Haaglanden omvat diverse gemeentes met elk hun eigen karakter. Van de grootstedelijke
              dynamiek van Den Haag tot de studentenstad Delft, van het landelijke Midden-Delfland tot het
              moderne Zoetermeer. Bij Budget Ontruiming kennen we de regio als geen ander.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Of u nu een appartement in het centrum van Den Haag heeft, een villa in Wassenaar, een
              studentenwoning in Delft of een gezinswoning in Pijnacker-Nootdorp – wij bieden professionele
              woningontruiming met onze unieke laagste prijs garantie.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Onze diensten in Haaglanden</h3>
            <ul id="haaglanden-diensten" className="space-y-2 mb-6 text-muted-foreground">
              <li>✓ Complete woningontruiming van klein tot groot</li>
              <li>✓ Bezemschoon opleveren voor verhuurders</li>
              <li>✓ Ontruiming na overlijden met respect en zorg</li>
              <li>✓ Seniorenverhuizingen en begeleiding</li>
              <li>✓ Spoedontruimingen binnen 24 uur mogelijk</li>
              <li>✓ Inboedel taxatie en verkoop</li>
              <li>✓ Milieuvriendelijke afvalverwerking</li>
            </ul>

            <h3 id="haaglanden-expertise" className="text-2xl font-bold text-foreground mt-8 mb-4">Laagste Prijs Garantie</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Wij garanderen u de laagste prijs voor uw woningontruiming in Haaglanden. Vindt u het elders goedkoper? Wij duiken onder die prijs!
              Zo simpel is het.
            </p>
            <p className="text-lg text-muted-foreground">
              Klik hierboven op uw gemeente voor specifieke informatie, lokale prijzen en veelgestelde vragen
              over woningontruiming in uw gebied.
            </p>
          </section>

          {/* Diensten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Onze Diensten in Haaglanden
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
                  Complete ontruiming van woningen, appartementen en bedrijfspanden. Van studentenkamers tot villa's.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en woningcorporaties zoals Vestia, Staedion en Haag Wonen.
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
                  Spoedontruiming 24/7
                </h3>
                <p className="text-muted-foreground">
                  Bij spoed vaak binnen 24 uur starten. In Den Haag en omgeving 24/7 bereikbaar voor urgente situaties.
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
        <section className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde Vragen
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming in Haaglanden
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
        <GemeenteMap gemeenteNaam="Haaglanden" postcodes="2240-2729" />

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

        <Footer />
      </main>
    </>
  )
}
