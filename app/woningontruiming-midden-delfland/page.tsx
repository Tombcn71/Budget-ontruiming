import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Woningontruiming Midden-Delfland | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Woningontruiming Midden-Delfland? Wij duiken onder elke offerte! Lokale experts in ontruimen. Bereken direct uw prijs.",
  keywords:
    "woningontruiming midden-delfland, ontruiming maassluis, ontruiming schipluiden, ontruiming maasland, huis ontruimen midden-delfland, bezemschoon opleveren maassluis, boerderij ontruimen, spoedontruiming midden-delfland",
  openGraph: {
    title: "Woningontruiming Midden-Delfland - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Midden-Delfland. Maassluis, Schipluiden, Maasland en Den Hoorn.",
    url: "https://budgetontruiming.nl/woningontruiming-midden-delfland",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Midden-Delfland - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Midden-Delfland. Vindt u goedkoper? Wij duiken onder die prijs!!",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-midden-delfland",
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

export default function MiddenDelflandPage() {
  // FAQs
  const faqs = [
    {
      question: "Komen jullie ook in de kleinere kernen zoals Den Hoorn?",
      answer:
        "Ja, wij werken in heel Midden-Delfland: Maassluis, Schipluiden, Maasland én Den Hoorn. Geen enkele locatie is te afgelegen.",
    },
    {
      question: "Kunnen jullie ook grote schuren en bijgebouwen ontruimen?",
      answer:
        "Absoluut. We hebben ervaring met het ontruimen van boerderijen en panden met grote bijgebouwen. Alles wordt grondig ontruimd en opgeruimd.",
    },
    {
      question: "Hoe snel kunnen jullie er zijn?",
      answer:
        "In de meeste gevallen kunnen we binnen 2-3 werkdagen starten met de ontruiming. Bij spoed vaak nog sneller.",
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u ook in Midden-Delfland verzekerd van de voordeligste prijs voor uw woningontruiming.",
    },
  ];

  // Wijken
  const wijken = ["Maassluis", "Schipluiden", "Maasland", "Den Hoorn"];

  // Waarom kiezen
  const waaromKiezen = [
    "Bekend met het landelijke karakter van Midden-Delfland",
    "Persoonlijke benadering, passend bij de kleinschaligheid",
    "Flexibel en snel beschikbaar",
    "Laagste prijs garantie voor complete gemoedsrust",
    "Ervaring met zowel oude als nieuwe woningen",
  ];

  // Situaties
  const situaties = [
    {
      title: "Boerderij of grote woning ontruimen",
      description:
        "Midden-Delfland kent veel grotere woningen en oude boerderijen. Wij hebben ervaring met het ontruimen van grote panden inclusief bijgebouwen, schuren en grote tuinen.",
    },
    {
      title: "Ontruiming na overlijden",
      description:
        "In de kleine gemeenschap van Midden-Delfland werken we discreet en respectvol. Wij helpen u met alle aspecten van de ontruiming na het verlies van een dierbare.",
    },
    {
      title: "Verhuizing naar zorginstelling",
      description:
        "Bij verhuizing vanuit een woning in Midden-Delfland naar een verzorgingshuis helpen wij met de volledige verhuizing en ontruiming.",
    },
    {
      title: "Huurwoning bezemschoon opleveren",
      description:
        "Ook in Midden-Delfland gelden strikte oplevervoorwaarden. Wij zorgen dat uw huurwoning volledig aan de eisen voldoet.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/midden-delfland/#service",
    name: "Woningontruiming Midden-Delfland",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/",
      telephone: "+31629759181",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Midden-Delfland",
        sameAs: "https://www.wikidata.org/wiki/Q610443",
      },
    ],
    description:
      "Professionele woningontruiming in Midden-Delfland. Expertise in boerderijen, grote panden met bijgebouwen en bezemschone oplevering in Schipluiden, Maasland en Den Hoorn.",
    knowsAbout: [
      "Boerderij ontruimen Midden-Delfland",
      "Grote schuur of bijgebouw ontruimen",
      "Woningontruiming Schipluiden en Maasland",
      "Seniorenverhuizing Den Hoorn",
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
    name: "Budget Ontruiming Midden-Delfland",
    telephone: "+31629759181",
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Midden-Delfland",
      addressRegion: "Zuid-Holland",
      postalCode: "2636-2652",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.975,
      longitude: 4.3167,
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
        name: "Haaglanden",
        item: "https://budgetontruiming.nl/regio/haaglanden",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Midden-Delfland",
        item: "https://budgetontruiming.nl/woningontruiming-midden-delfland",
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
          { label: "Haaglanden", href: "/regio/haaglanden" },
          { label: "Midden-Delfland" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Midden-Delfland"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Midden-Delfland, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Woningontruiming in Midden-Delfland: Maassluis, Schipluiden en
                  Maasland. Persoonlijke service tegen de laagste prijs
                  gegarandeerd.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Midden-Delfland
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Boerderijen</span>
                  <span>|</span>
                  <span>Bijgebouwen</span>
                  <span>|</span>
                  <span>Persoonlijke service</span>
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
              id="midden-delfland-info"
              className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Midden-Delfland
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Midden-Delfland kent een mix van karakteristieke dorpswoningen en
              moderne nieuwbouw. Of het nu gaat om een woning in Maassluis,
              Schipluiden of Maasland – wij bieden professionele ontruiming
              tegen de laagste prijs, gegarandeerd.
            </p>

            {/* Wijken */}
            <div
              id="midden-delfland-kernen"
              className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Actief in alle kernen van Midden-Delfland:
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
                Waarom kiezen voor Budget Ontruiming in Midden-Delfland?
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
                    id={index === 0 ? "boerderij-specialist" : undefined}
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
              Onze Diensten in Midden-Delfland
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
                  Complete ontruiming van woningen, boerderijen en
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
                  woningcorporaties. Perfect voor huurwoningen. Wij zorgen voor
                  een oplevering die naadloos aansluit bij de eisen van Wonen
                  Midden-Delfland, zodat de eindinspectie zonder problemen
                  verloopt
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Ontruiming na Overlijden
                </h3>
                <p className="text-muted-foreground">
                  Met respect en zorg helpen bij het ontruimen na overlijden.
                  Discreet en respectvol, passend bij de kleine gemeenschap.
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
                  Boerderijen & Bijgebouwen
                </h3>
                <p className="text-muted-foreground">
                  Specialisatie in het ontruimen van boerderijen en grote panden
                  met bijgebouwen, schuren en grote tuinen. Alles wordt grondig
                  ontruimd.
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
                    Persoonlijke Aanpak
                  </h3>
                  <p className="text-muted-foreground">
                    Passend bij de kleinschaligheid van Midden-Delfland.
                    Persoonlijke benadering en aandacht voor detail.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* FAQ Section */}
        <section
          id="midden-delfland-faq"
          className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Midden-Delfland
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming
              in Midden-Delfland
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
        <GemeenteMap gemeenteNaam="Midden-Delfland" postcodes="2636-2652" />

        <Footer />
      </main>
    </>
  );
}
