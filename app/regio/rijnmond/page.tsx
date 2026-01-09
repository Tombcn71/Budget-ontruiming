import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Woningontruiming Rijnmond | Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Woningontruiming in regio Rijnmond? Wij duiken onder elke offerte! Snel, vakkundig en bezemschoon opgeleverd. Bereken direct uw prijs online.",
  keywords:
    "woningontruiming rijnmond, ontruiming rijnmond, ontruiming rotterdam, ontruiming schiedam, ontruiming vlaardingen, ontruiming capelle aan den ijssel, ontruiming ridderkerk, ontruiming barendrecht, bezemschoon rijnmond, spoedontruiming rijnmond",
  openGraph: {
    // ... rest
    url: "https://www.budgetontruiming.nl/regio/rijnmond", // Voeg www toe
    // ... rest
  },
  alternates: {
    canonical: "https://www.budgetontruiming.nl/regio/rijnmond", // Voeg www toe
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
};

export default function RijnmondPage() {
  // Gemeentes
  const gemeentes = [
    {
      naam: "Rotterdam",
      slug: "rotterdam",
      wijken: 10,
      postcodes: "3000-3099",
    },
    { naam: "Schiedam", slug: "schiedam", wijken: 5, postcodes: "3110-3125" },
    {
      naam: "Vlaardingen",
      slug: "vlaardingen",
      wijken: 5,
      postcodes: "3130-3137",
    },
    {
      naam: "Capelle aan den IJssel",
      slug: "capelle-aan-den-ijssel",
      wijken: 5,
      postcodes: "2900-2907",
    },
    {
      naam: "Barendrecht",
      slug: "barendrecht",
      wijken: 4,
      postcodes: "2990-2995",
    },
    {
      naam: "Ridderkerk",
      slug: "ridderkerk",
      wijken: 4,
      postcodes: "2980-2989",
    },
    {
      naam: "Albrandswaard",
      slug: "albrandswaard",
      wijken: 2,
      postcodes: "3160-3161",
    },
    {
      naam: "Lansingerland",
      slug: "lansingerland",
      wijken: 3,
      postcodes: "2650-2665",
    },
    {
      naam: "Krimpen aan den IJssel",
      slug: "krimpen-aan-den-ijssel",
      wijken: 3,
      postcodes: "2920-2925",
    },
    {
      naam: "Nissewaard",
      slug: "nissewaard",
      wijken: 8,
      postcodes: "3200-3209",
    },
    { naam: "Maassluis", slug: "maassluis", wijken: 3, postcodes: "3140-3149" },
    {
      naam: "Goeree-Overflakkee",
      slug: "goeree-overflakkee",
      wijken: 6,
      postcodes: "3240-3259",
    },
    {
      naam: "Voorne aan Zee",
      slug: "voorne-aan-zee",
      wijken: 7,
      postcodes: "3230-3249",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "In welke gemeentes van Rijnmond zijn jullie actief?",
      answer:
        "Wij zijn actief in alle gemeentes van Rijnmond: Rotterdam, Schiedam, Vlaardingen, Maassluis, Ridderkerk, Capelle aan den IJssel, Krimpen aan den IJssel, Barendrecht, Albrandswaard, Lansingerland, Nissewaard, Voorne aan Zee en Goeree-Overflakkee.",
    },
    {
      question: "Hebben jullie ervaring met hoogbouw in Rotterdam?",
      answer:
        "Ja, wij hebben uitgebreide ervaring met hoogbouw appartementen in Rotterdam en andere Rijnmond gemeentes. We hebben de juiste apparatuur en expertise voor alle verdiepingen.",
    },
    {
      question:
        "Hoe snel kunnen jullie een woningontruiming in Rijnmond uitvoeren?",
      answer:
        "Meestal kunnen we binnen 1-3 werkdagen starten met de ontruiming. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen.",
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! U krijgt altijd de laagste prijs voor woningontruiming in Rijnmond, gegarandeerd.",
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer:
        "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar.",
    },
    {
      question: "Werken jullie ook op de eilanden zoals Goeree-Overflakkee?",
      answer:
        "Ja, wij zijn volledig actief op Goeree-Overflakkee en Voorne aan Zee. Ondanks de eilandlocatie garanderen wij de laagste prijs en snelle service.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/rijnmond/#service",
    name: "Woningontruiming Regio Rijnmond",
    description:
      "Centrale ontruimingsservice voor de regio Rijnmond, inclusief Rotterdam, de Drechtsteden en de eilanden.",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/",
      telephone: "+31629759181",
      openingHours: "Mo-Sa 07:00-22:00",
    },
    areaServed: gemeentes.map((g) => ({
      "@type": "City",
      name: g.naam,
    })),
    knowsAbout: [
      "Woningontruiming Rotterdam",
      "Hoogbouw ontruiming Rijnmond",
      "Bedrijfsontruiming Rijnmond",
      "Bezemschoon opleveren Rijnmond",
      "Spoedontruiming 24/7 Rijnmond",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diensten Rijnmond",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Hoogbouw Ontruiming" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Bedrijfsontruiming" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Spoedontruiming 24/7" },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.budgetontruiming.nl/regio/rijnmond/#webpage", // Voeg @id en www toe
    name: "Woningontruiming Rijnmond - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in heel Rijnmond...",
    url: "https://www.budgetontruiming.nl/regio/rijnmond", // Voeg www toe
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Budget Ontruiming Rijnmond",
    telephone: "+31629759181",
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rotterdam",
      addressRegion: "Zuid-Holland",
      postalCode: "3000-3099",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9244,
      longitude: 4.4777,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.budgetontruiming.nl", // Voeg www toe
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rijnmond",
        item: "https://www.budgetontruiming.nl/regio/rijnmond", // Voeg www toe
      },
    ],
  };

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <TopBanner />
      <Header />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Rijnmond" }]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Rijnmond"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Rijnmond
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Professionele woningontruiming in Rotterdam, Schiedam,
                  Vlaardingen en 10 andere gemeentes. 24/7 bereikbaar. Vindt u
                  het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Rijnmond
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>13 gemeentes</span>
                  <span>|</span>
                  <span>24/7 bereikbaar</span>
                  <span>|</span>
                  <span>Hoogbouw specialist</span>
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
                  Ons slimme AI formulier berekent direct jouw prijs. Een
                  woningbezoek is niet nodig. Goedkoper gevonden? Wij betalen
                  het verschil.
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
                  Kies de datum wanneer jij de woning ontruimd wil hebben.
                  Meestal binnen 1-3 werkdagen beschikbaar, bij spoed binnen 24
                  uur.
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
                  Ons professionele team voert de ontruiming snel en zorgvuldig
                  uit op het afgesproken moment. Bezemschoon opgeleverd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gemeentes Grid */}
        <section id="rijnmond-gemeentes" className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
                Woningontruiming in Rijnmond
              </h2>
              <p className="text-center text-muted-foreground mb-10 text-lg">
                Klik op uw gemeente voor specifieke informatie en prijzen
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gemeentes.map((gemeente) => (
                  <Link
                    key={gemeente.slug}
                    href={`/woningontruiming-${gemeente.slug}`}>
                    <div className="border rounded-lg p-6 bg-card hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                      <h3 className="font-bold text-xl text-foreground mb-2">
                        {gemeente.naam}
                      </h3>
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
              Professionele Woningontruiming in Rijnmond
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              De regio Rijnmond omvat diverse gemeentes rondom Rotterdam. Van de
              havenstad Rotterdam tot de historische kernen van Schiedam en
              Vlaardingen, van het eiland Goeree-Overflakkee tot de Hoeksche
              Waard. Bij Budget Ontruiming kennen we de regio als geen ander.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Of u nu een hoogbouw appartement in Rotterdam heeft, een herenhuis
              in Schiedam, een gezinswoning in Nissewaard of een vakantiehuis op
              Voorne aan Zee – wij bieden professionele woningontruiming met
              onze unieke laagste prijs garantie.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
              Onze diensten in Rijnmond
            </h3>
            <ul
              id="rijnmond-diensten"
              className="space-y-2 mb-6 text-muted-foreground">
              <li>✓ Complete woningontruiming van klein tot groot</li>
              <li>✓ Hoogbouw specialisten (ervaring met alle verdiepingen)</li>
              <li>✓ Bezemschoon opleveren voor verhuurders</li>
              <li>✓ Ontruiming na overlijden met respect en zorg</li>
              <li>✓ Seniorenverhuizingen en begeleiding</li>
              <li>✓ Spoedontruimingen - 24/7 bereikbaar</li>
              <li>✓ Bedrijfsontruimingen en kantoorpanden</li>
              <li>✓ Milieuvriendelijke afvalverwerking</li>
            </ul>

            <h3
              id="rijnmond-expertise"
              className="text-2xl font-bold text-foreground mt-8 mb-4">
              Laagste Prijs Garantie
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Wij garanderen u de laagste prijs voor uw woningontruiming in
              Rijnmond. Vindt u het elders goedkoper? Wij duiken onder die
              prijs! Zo simpel is het.
            </p>
            <p className="text-lg text-muted-foreground">
              Klik hierboven op uw gemeente voor specifieke informatie over
              woningontruiming in uw gebied. Van Rotterdam tot
              Goeree-Overflakkee, wij staan voor u klaar.
            </p>
          </section>

          {/* Diensten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Onze Diensten in Rijnmond
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Van eerste prijsindicatie tot bezemschone oplevering - alles uit
              één hand.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Volledige Woningontruiming
                </h3>
                <p className="text-muted-foreground">
                  Complete ontruiming van woningen, appartementen en
                  bedrijfspanden. Van studentenkamers tot villa's.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en
                  woningcorporaties zoals Vestia, Staedion en Haag Wonen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Ontruiming na Overlijden
                </h3>
                <p className="text-muted-foreground">
                  Met respect en zorg helpen bij het ontruimen na overlijden.
                  Discreet en zorgvuldig.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Spoedontruiming 24/7
                </h3>
                <p className="text-muted-foreground">
                  Bij spoed vaak binnen 24 uur starten. In Rotterdam en omgeving
                  24/7 bereikbaar voor urgente situaties.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Hoogbouw Specialist
                </h3>
                <p className="text-muted-foreground">
                  Uitgebreide ervaring met hoogbouw appartementen in Rotterdam
                  en andere Rijnmond gemeentes. We hebben de juiste apparatuur
                  voor alle verdiepingen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bedrijfsontruiming
                </h3>
                <p className="text-muted-foreground">
                  Ook bedrijfsruimtes en kantoren in Rijnmond ontruimen we
                  professioneel. Van inventaris tot inrichting, wij regelen het.
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
                    Vindt u het elders goedkoper? Stuur ons de offerte en wij
                    gaan eronder. Geen verborgen kosten.
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
                    Binnen 1-3 werkdagen beschikbaar. Bij spoed binnen 24 uur.
                    Ook avond- en weekendwerk mogelijk.
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
                    Materialen gescheiden en gerecycled. Bruikbare spullen naar
                    kringloop. WEEE-richtlijnen voor elektronica.
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
                    Van ontruiming tot oplevering. Eén aanspreekpunt. Kennen
                    alle eisen van verhuurders en woningcorporaties.
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
              Alles wat u moet weten over woningontruiming in Rijnmond
            </p>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GemeenteMap */}
        <GemeenteMap gemeenteNaam="Rijnmond" postcodes="2900-3259" />

        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Rijnmond" }]}
        />
        <Footer />
      </main>
    </>
  );
}
