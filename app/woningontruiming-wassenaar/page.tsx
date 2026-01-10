import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Woningontruiming Wassenaar | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Woningontruiming Wassenaar? Discrete & zorgvuldige ontruiming van villa's en landhuizen. Wij duiken onder elke offerte! Bereken direct uw prijs.",
  keywords:
    "woningontruiming wassenaar, ontruiming wassenaar, villa ontruimen wassenaar, landhuis ontruiming wassenaar, discrete ontruiming wassenaar, inboedel taxatie wassenaar, bezemschoon wassenaar, ontruiming na overlijden wassenaar",
  openGraph: {
    title: "Ontruiming Wassenaar | Villa's & Landhuizen | Laagste Prijs",
    description:
      "Ontruiming Wassenaar: Discrete service voor grote woningen. 2240-2245. Vindt u het goedkoper? Wij duiken eronder!",
    url: "https://www.budgetontruiming.nl/woningontruiming-wassenaar", // MET WWW
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: "https://www.budgetontruiming.nl/woningontruiming-wassenaar", // MET WWW
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WassenaarPage() {
  // FAQs
  const faqs = [
    {
      question: "Hoe discreet werken jullie?",
      answer:
        "Wij begrijpen dat privacy belangrijk is in Wassenaar. Onze medewerkers werken professioneel en discreet, zonder opvallende voertuigen of onnodige aandacht.",
    },
    {
      question: "Kunnen jullie ook grote tuinen ontruimen?",
      answer:
        "Ja, wij ontruimen ook tuinen, tuinhuizen en bijgebouwen. Tuinafval en grote objecten worden op de juiste manier afgevoerd.",
    },
    {
      question: "Werken jullie met taxateurs voor waardevolle spullen?",
      answer:
        "Absoluut. Voor antiek en waardevolle inboedel schakelen we indien gewenst een erkend taxateur in, zodat u weet wat uw bezittingen waard zijn.",
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo weet u zeker dat u bij ons altijd de beste prijs krijgt, ook voor grote panden.",
    },
  ];

  // Wijken
  const wijken = [
    "Wassenaar Dorp",
    "De Kieviet",
    "Duinrell",
    "Kerkehout",
    "Rijksstraatweg",
  ];

  // Waarom kiezen
  const waaromKiezen = [
    "Discrete en professionele aanpak passend bij Wassenaar",
    "Ervaring met grote, luxe woningen en landhuizen",
    "Zorgvuldige behandeling van waardevolle inboedel",
    "Laagste prijs garantie, ook voor grote panden",
    "Respect voor privacy en discretie",
  ];

  // Situaties
  const situaties = [
    {
      title: "Villa of landhuis ontruimen",
      description:
        "Wassenaar kent veel grote woningen. Wij hebben ervaring met het ontruimen van villa's, landhuizen en panden met meerdere verdiepingen, inclusief kelders en zolders.",
    },
    {
      title: "Ontruiming bij verkoop",
      description:
        "Bij verkoop van uw woning in Wassenaar zorgen wij voor discrete en snelle ontruiming, zodat de nieuwe eigenaar een schone woning aantreft.",
    },
    {
      title: "Seniorenverhuizing uit grote woning",
      description:
        "Verkleinen naar een appartement of verhuizen naar een zorginstelling? Wij begeleiden het hele proces en ontruimen de grote woning professioneel.",
    },
    {
      title: "Inboedel taxeren en verkopen",
      description:
        "Bij waardevolle inboedel werken we samen met taxateurs en veilinghuizen. Zo haalt u het maximale uit uw bezittingen.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/wassenaar/#service",
    name: "Woningontruiming Wassenaar",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/",
      telephone: "+31617638215",
    },
    areaServed: {
      "@type": "City",
      name: "Wassenaar",
      sameAs: "https://www.wikidata.org/wiki/Q501443",
    },
    description:
      "Discrete woningontruiming in Wassenaar. Gespecialiseerd in grote villa's, landhuizen en taxatie van waardevolle inboedel. Laagste prijs garantie.",
    knowsAbout: [
      "Villa ontruiming Wassenaar",
      "Discrete woningontruiming",
      "Inboedel taxatie en verkoop",
      "Landhuis ontruimen Rijksstraatweg",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.budgetontruiming.nl", // MET WWW
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Haaglanden",
        item: "https://www.budgetontruiming.nl/regio/haaglanden", // MET WWW
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wassenaar",
        item: "https://www.budgetontruiming.nl/woningontruiming-wassenaar", // MET WWW
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id":
      "https://www.budgetontruiming.nl/woningontruiming-wassenaar/#localbusiness",
    name: "Budget Ontruiming Wassenaar",
    telephone: "+31617638215",
    priceRange: "€€", // Aangepast naar segment
    image:
      "https://www.budgetontruiming.nl/professional-movers-carrying-boxes-in-modern-home.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wassenaar",
      addressRegion: "Zuid-Holland",
      postalCode: "2240-2249",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.1458,
      longitude: 4.4014,
    },
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
          { label: "Wassenaar" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Wassenaar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Wassenaar, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Discrete en professionele woningontruiming in Wassenaar.
                  Specialist in villa's en landhuizen. Vindt u het elders
                  goedkoper? Wij duiken onder die prijs!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Wassenaar
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Villa's & Landhuizen</span>
                  <span>|</span>
                  <span>Discrete service</span>
                  <span>|</span>
                  <span>Taxatie mogelijk</span>
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
              id="wassenaar-info"
              className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Wassenaar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Wassenaar staat bekend om zijn ruime villa's en landhuizen. Wij
              bieden discrete en professionele ontruiming van woningen van elk
              formaat. Of het nu gaat om een landhuis aan de Rijksstraatweg of
              een appartement in het dorp – met onze laagste prijs garantie
              betaalt u altijd de beste prijs.
            </p>

            {/* Wijken */}
            <div
              id="wassenaar-wijken"
              className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Actief in alle wijken van Wassenaar:
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
          <section
            id="discretie-garantie"
            className="py-12 lg:py-16 bg-muted/30 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Waarom kiezen voor Budget Ontruiming in Wassenaar?
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
              Onze Diensten in Wassenaar
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
                  Complete ontruiming van villa's, landhuizen en appartementen.
                  Milieuvriendelijke verwerking volgens gemeentelijke
                  richtlijnen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en
                  nieuwe eigenaren. Perfect voor verkoop en verhuur.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Ontruiming na Overlijden
                </h3>
                <p className="text-muted-foreground">
                  Met respect en zorg helpen bij het ontruimen na overlijden.
                  Discreet en zorgvuldig, passend bij Wassenaar.
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
                  Inboedel Taxatie & Verkoop
                </h3>
                <p className="text-muted-foreground">
                  Voor waardevolle inboedel werken we samen met erkende
                  taxateurs en veilinghuizen. Zo haalt u het maximale uit uw
                  bezittingen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Tuin & Bijgebouwen
                </h3>
                <p className="text-muted-foreground">
                  Ook het ontruimen van grote tuinen, tuinhuizen en bijgebouwen
                  behoort tot onze service. Alles wordt netjes afgevoerd.
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
                    gaan eronder. Geen verborgen kosten, ook voor grote panden.
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
                    Discrete & Professioneel
                  </h3>
                  <p className="text-muted-foreground">
                    Privacy en discretie staan voorop. Professionele aanpak
                    zonder opvallende voertuigen of onnodige aandacht.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* FAQ Section */}
        <section id="wassenaar-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Wassenaar
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming
              in Wassenaar
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
        <GemeenteMap gemeenteNaam="Wassenaar" postcodes="2240-2249" />

        <Footer />
      </main>
    </>
  );
}
