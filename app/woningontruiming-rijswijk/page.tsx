import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Woningontruiming Rijswijk | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Woningontruiming Rijswijk? Wij duiken onder elke offerte! Snel & bezemschoon. Specialist in hoogbouw en Plaspoelpolder.",
  keywords:
    "woningontruiming rijswijk, ontruiming rijswijk, ontruiming sion rijswijk, ontruiming steenvoorde, ontruiming oud-rijswijk, ontruiming plaspoelpolder, bezemschoon rijswijk, spoedontruiming rijswijk, ontruiming na overlijden rijswijk, bedrijfsontruiming rijswijk",
  openGraph: {
    title: "Ontruiming Rijswijk | Alle Wijken | Laagste Prijs",
    description:
      "Ontruiming Rijswijk: Centrum, Sion, Steenvoorde + alle wijken. 2280-2289. Vindt u goedkoper? Wij duiken eronder!",
    url: "https://www.budgetontruiming.nl/woningontruiming-rijswijk", // MET WWW
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: "https://www.budgetontruiming.nl/woningontruiming-rijswijk", // MET WWW
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RijswijkPage() {
  // FAQs
  const faqs = [
    {
      question: "Hoe werken jullie bij hoogbouw in Rijswijk?",
      answer:
        "Wij hebben ruime ervaring met hoogbouw in Rijswijk. Wij gebruiken liften volgens de huisregels en regelen beschermingsmateriaal voor het trappenhuis om schade te voorkomen.",
    },
    {
      question:
        "Leveren jullie bezemschoon op voor woningcorporaties in Rijswijk?",
      answer:
        "Ja, wij leveren huurwoningen in Rijswijk bezemschoon op volgens de strikte oplevervoorwaarden van lokale woningcorporaties.",
    },
    {
      question: "Kunnen jullie ook in het weekend ontruimen?",
      answer:
        "Ja, voor spoedgevallen of als het beter uitkomt kunnen we ook in weekenden werken. Dit stemmen we graag met u af.",
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Rijswijk altijd verzekerd van de voordeligste prijs voor uw ontruiming.",
    },
  ];

  // Wijken
  const wijken = [
    "Rijswijk Centrum",
    "Sion",
    "Steenvoorde",
    "Oud-Rijswijk",
    "Plaspoelpolder",
    "In de Bogaard",
  ];

  // Waarom kiezen
  const waaromKiezen = [
    "Uitstekende bereikbaarheid en snelle service",
    "Kennis van alle Rijswijkse wijken en woningtypes",
    "Ervaring met zowel sociale huur als koopwoningen",
    "Laagste prijs garantie voor elke ontruiming",
    "Flexibel in planning en uitvoering",
  ];

  // Situaties
  const situaties = [
    {
      title: "Hoogbouw appartement ontruimen",
      description:
        "Rijswijk kent veel hoogbouw. Wij hebben ervaring met ontruiming van appartementen in hoogbouw, inclusief het gebruik van liften en trappenhuis volgens de huisregels.",
    },
    {
      title: "Huurwoning opleveren Rijswijk",
      description:
        "Voor woningcorporaties in Rijswijk leveren wij bezemschoon op volgens de strikte oplevervoorwaarden. Geen discussie bij de eindoplevering.",
    },
    {
      title: "Ontruiming na overlijden",
      description:
        "Met respect en zorg helpen wij bij het ontruimen van een woning na overlijden. Wij nemen alle zorgen uit handen tijdens deze moeilijke periode.",
    },
    {
      title: "Bedrijfsruimte ontruimen Rijswijk",
      description:
        "Ook bedrijfsruimtes en kantoren in Rijswijk ontruimen we professioneel. Van inventaris tot inrichting, wij regelen het.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/rijswijk/#service",
    name: "Woningontruiming Rijswijk",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/",
      telephone: "+31617638215",
    },
    areaServed: {
      "@type": "City",
      name: "Rijswijk",
      sameAs: "https://www.wikidata.org/wiki/Q652467",
    },
    description:
      "Professionele woningontruiming in Rijswijk. Expert in hoogbouw appartementen, huurwoningen en bedrijfsruimtes in Plaspoelpolder. Laagste prijs garantie.",
    knowsAbout: [
      "Hoogbouw appartement ontruimen Rijswijk",
      "Huurwoning opleveren Rijswijk",
      "Bedrijfsruimte ontruimen Plaspoelpolder",
      "Ontruiming na overlijden Rijswijk",
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
        name: "Rijswijk",
        item: "https://www.budgetontruiming.nl/woningontruiming-rijswijk", // MET WWW
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id":
      "https://www.budgetontruiming.nl/woningontruiming-rijswijk/#localbusiness",
    name: "Budget Ontruiming Rijswijk",
    telephone: "+31617638215",
    priceRange: "€",
    image:
      "https://www.budgetontruiming.nl/professional-movers-carrying-boxes-in-modern-home.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rijswijk",
      addressRegion: "Zuid-Holland",
      postalCode: "2280-2289",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0363,
      longitude: 4.325,
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
          { label: "Rijswijk" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Rijswijk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Woningontruiming Rijswijk, met laagste prijs garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Snelle en professionele woningontruiming in Rijswijk. Vindt u
                  het elders goedkoper? Wij duiken onder die prijs! Vraag nu uw
                  gratis offerte aan!
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Rijswijk
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Hoogbouw specialist</span>
                  <span>|</span>
                  <span>Bezemschoon opleveren</span>
                  <span>|</span>
                  <span>Bedrijfsruimtes</span>
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
              id="rijswijk-info"
              className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Rijswijk
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Rijswijk ligt centraal tussen Den Haag en Delft en kent diverse
              woonwijken. Van appartementen in hoogbouw tot vrijstaande woningen
              – wij ontruimen professioneel en betaalbaar met onze laagste prijs
              garantie.
            </p>

            {/* Wijken */}
            <div
              id="rijswijk-wijken"
              className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Actief in alle wijken van Rijswijk:
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
                Waarom kiezen voor Budget Ontruiming in Rijswijk?
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
                    id={index === 0 ? "hoogbouw-specialist" : undefined}
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
              Onze Diensten in Rijswijk
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
                  woningcorporaties. Perfect voor huurwoningen. Wij zorgen dat
                  uw woning voldoet aan de exacte opleverstaat van corporaties
                  zoals Rijswijk Wonen en Vidomes, zodat u de borg zonder
                  problemen terugkrijgt.
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
                  Hoogbouw Appartementen
                </h3>
                <p className="text-muted-foreground">
                  Specialisatie in het ontruimen van hoogbouw appartementen. Wij
                  gebruiken liften volgens huisregels en beschermen
                  trappenhuizen.
                </p>
              </div>

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bedrijfsruimtes
                </h3>
                <p className="text-muted-foreground">
                  Ook bedrijfsruimtes en kantoren in Rijswijk ontruimen we
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
        <section id="rijswijk-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Rijswijk
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming
              in Rijswijk
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
        <GemeenteMap gemeenteNaam="Rijswijk" postcodes="2280-2289" />

        <Footer />
      </main>
    </>
  );
}
