import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Woningontruiming Maassluis | Historische Havenstad | Laagste Prijs",
  description:
    "Woningontruiming Maassluis? Wij duiken onder elke offerte! Snel en vakkundig bezemschoon. Bereken direct uw prijs.",
  keywords:
    "woningontruiming maassluis, ontruiming maassluis, ontruiming centrum maassluis, ontruiming steendijkpolder, ontruiming koningshoek, bezemschoon maassluis 3140-3144, spoedontruiming maassluis, ontruiming na overlijden maassluis",
  openGraph: {
    title: "Ontruiming Maassluis | Laagste Prijs",
    description:
      "Ontruiming Maassluis: Centrum, Steendijkpolder, Koningshoek + wijken. 3140-3144. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-maassluis",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Maassluis",
    description:
      "Ontruiming Maassluis: Centrum, Steendijkpolder, Koningshoek + wijken.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-maassluis",
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

export default function MaassluisPage() {
  // FAQs
  const faqs = [
    {
      question: "Hebben jullie ervaring met historische panden in Maassluis?",
      answer:
        "Ja, wij hebben ruime ervaring met de specifieke logistiek en zorg die karakteristieke en historische woningen in het centrum van Maassluis vereisen.",
    },
    {
      question: "Werken jullie ook in de Steendijkpolder en Koningshoek?",
      answer:
        "Zeker, wij zijn actief in heel Maassluis, van de oudere wijken rond de haven tot de modernere buurten zoals Steendijkpolder en Koningshoek.",
    },
    {
      question: "Hoe snel kunnen jullie een woning in Maassluis ontruimen?",
      answer:
        "Meestal kunnen we binnen 1-3 werkdagen starten. Bij spoedgevallen in Maassluis kunnen we vaak binnen 24 uur beginnen.",
    },
    {
      question: "Wat is de laagste prijs garantie in Maassluis?",
      answer:
        "Vindt u een goedkopere offerte voor uw woningontruiming in Maassluis? Wij duiken onder die prijs! Zo bent u altijd het voordeligst uit.",
    },
  ];

  // Wijken
  const wijken = ["Centrum", "Steendijkpolder", "Koningshoek"];

  // Waarom kiezen
  const waaromKiezen = [
    "Expertise in de logistieke uitdagingen van historische panden in de havenstad",
    "Volledige dekking van zowel karakteristieke binnenstadswoningen als nieuwbouw in Koningshoek",
    "Bezemschone oplevering conform de eisen van lokale woningcorporaties",
    "Laagste prijs garantie: Wij duiken onder elke offerte in Maassluis en omstreken",
    "Lokale kennis van alle wijken en snelle service",
  ];

  // Situaties
  const situaties = [
    {
      title: "Historisch pand ontruimen Maassluis",
      description:
        "Maassluis heeft een prachtig historisch centrum met veel karakteristieke panden. Wij hebben ervaring met de zorgvuldige ontruiming van deze historische woningen in de binnenstad.",
    },
    {
      title: "Huurwoning bezemschoon opleveren",
      description:
        "Voor woningcorporaties in Maassluis leveren wij bezemschoon op volgens de strikte oplevervoorwaarden. Geen discussie bij de eindoplevering.",
    },
    {
      title: "Ontruiming na overlijden",
      description:
        "Met respect en zorg helpen wij bij het ontruimen na overlijden. Wij nemen alle zorgen uit handen tijdens deze moeilijke periode.",
    },
    {
      title: "Spoedontruiming Maassluis",
      description:
        "Moet het snel? In Maassluis kunnen we vaak binnen 24-48 uur starten met de ontruiming van uw woning.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/maassluis/#service",
    name: "Woningontruiming Maassluis",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/",
      telephone: "+31629759181",
    },
    areaServed: {
      "@type": "City",
      name: "Maassluis",
      sameAs: "https://www.wikidata.org/wiki/Q511487",
    },
    description:
      "Professionele woningontruiming in Maassluis. Specialist in de ontruiming van historische panden in de binnenstad en moderne woningen in Steendijkpolder. Laagste prijs garantie.",
    knowsAbout: [
      "Woningontruiming Maassluis Centrum",
      "Historisch pand ontruimen Maassluis",
      "Huurwoning bezemschoon opleveren Maassluis",
      "Ontruiming na overlijden Maassluis",
    ],
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Budget Ontruiming Maassluis",
    telephone: "+31629759181",
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maassluis",
      addressRegion: "Zuid-Holland",
      postalCode: "3140-3149",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9233,
      longitude: 4.25,
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
        item: "https://budgetontruiming.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rijnmond",
        item: "https://budgetontruiming.nl/regio/rijnmond",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Maassluis",
        item: "https://budgetontruiming.nl/woningontruiming-maassluis",
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
        items={[
          { label: "Home", href: "/" },
          { label: "Rijnmond", href: "/regio/rijnmond" },
          { label: "Maassluis" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Maassluis"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Maassluis, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Woningontruiming in de historische havenstad Maassluis.
                  Ervaring met karakteristieke panden en modern gemaakt tegen de
                  laagste prijs.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Maassluis
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Historische panden</span>
                  <span>|</span>
                  <span>Havenstad</span>
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

        {/* SEO Content - Direct in page */}
        <article className="container mx-auto px-4 py-12 lg:py-16">
          <section className="prose prose-lg max-w-none mb-12">
            <h2
              id="maassluis-info"
              className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Maassluis
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Maassluis is een historische havenstad met karakteristieke panden
              in het centrum en moderne woningen in nieuwere wijken. Van
              historische binnenstadswoningen tot nieuwbouw in Koningshoek – wij
              bieden professionele woningontruiming tegen de laagste prijs,
              gegarandeerd.
            </p>

            {/* Wijken */}
            <div
              id="maassluis-wijken"
              className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Actief in alle wijken van Maassluis:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {wijken.map((wijk, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-foreground">
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
                Waarom kiezen voor Budget Ontruiming in Maassluis?
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
                    id={index === 0 ? "historische-panden-expert" : undefined}
                    className="border rounded-lg p-6 bg-card">
                    <h3 className="font-bold text-lg text-foreground mb-3">
                      {situatie.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {situatie.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Diensten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Onze Diensten in Maassluis
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
                  bedrijfspanden. Milieuvriendelijke verwerking volgens
                  gemeentelijke richtlijnen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en
                  woningcorporaties. Perfect voor huurwoningen.
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
                  Spoedontruiming 24 uur
                </h3>
                <p className="text-muted-foreground">
                  Bij spoed vaak binnen 24 uur starten. Ook in weekenden
                  beschikbaar voor spoedgevallen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Historische Panden
                </h3>
                <p className="text-muted-foreground">
                  Specialisatie in het ontruimen van historische panden in het
                  centrum van Maassluis. Met respect voor de karakteristieke
                  architectuur en zorgvuldige logistiek.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Extra Diensten
                </h3>
                <p className="text-muted-foreground">
                  Vloerbedekking verwijderen, behang afstomen, gaatjes vullen,
                  schilderwerk en inpakservice.
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
        <section id="maassluis-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Maassluis
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming
              in Maassluis
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
        <GemeenteMap gemeenteNaam="Maassluis" postcodes="3140-3149" />

        <Footer />
      </main>
    </>
  );
}
