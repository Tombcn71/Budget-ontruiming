import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Goedkope Woningontruiming Rotterdam | Laagste Prijs Garantie | Budgetontruiming.nl",
  description:
    "Woningontruiming in Rotterdam nodig? Wij duiken onder elke offerte! Bezemschoon opleveren voor Woonstad & Havensteder. Bereken direct uw prijs.",
  keywords:
    "woningontruiming rotterdam, ontruiming rotterdam, ontruiming centrum rotterdam, ontruiming noord rotterdam, ontruiming zuid rotterdam, ontruiming west rotterdam, ontruiming oost rotterdam, ontruiming kralingen, ontruiming feijenoord, ontruiming charlois, ontruiming ijsselmonde, ontruiming prins alexander, bezemschoon rotterdam 3000-3099, spoedontruiming rotterdam, ontruiming na overlijden rotterdam",
  openGraph: {
    title: "Ontruiming Rotterdam | 10 Wijken | Laagste Prijs",
    description:
      "Ontruiming Rotterdam: Centrum, Kralingen, Feijenoord + 7 wijken. 3000-3099. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-rotterdam",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Rotterdam | 10 Wijken",
    description:
      "Ontruiming Rotterdam: Centrum, Kralingen, Feijenoord + 7 wijken.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-rotterdam",
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

export default function RotterdamPage() {
  // FAQs
  const faqs = [
    {
      question: "Werken jullie in alle Rotterdamse wijken?",
      answer:
        "Ja, wij werken in heel Rotterdam: Centrum, Zuid, Noord, Kralingen-Crooswijk, Delfshaven, Overschie, Prins Alexander en IJsselmonde. Wij voldoen aan de eisen van Woonstad Rotterdam, Havensteder en Vestia voor bezemschone oplevering.",
    },
    {
      question: "Zijn jullie 24/7 bereikbaar?",
      answer: "Voor spoedgevallen zijn wij 24/7 bereikbaar in Rotterdam.",
    },
    {
      question: "Hebben jullie ervaring met hoogbouw?",
      answer:
        "Ja, wij hebben uitgebreide ervaring met hoogbouw en gebruiken de juiste apparatuur en bescherming.",
    },
    {
      question: "Wat gebeurt er met mijn inboedel?",
      answer:
        "Bruikbare spullen gaan naar lokale kringloopwinkels of goede doelen. Waardevolle items kunnen verkocht worden (de opbrengst gaat naar u). De rest wordt milieuvriendelijk afgevoerd volgens Rotterdamse afvalregels.",
    },
    {
      question: "Wat is jullie laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de beste prijs voor uw woningontruiming in Rotterdam.",
    },
  ];

  // Wijken
  const wijken = [
    "Centrum",
    "Noord",
    "Zuid",
    "West",
    "Oost",
    "Kralingen",
    "Feijenoord",
    "Charlois",
    "IJsselmonde",
    "Prins Alexander",
  ];

  // Waarom kiezen
  const waaromKiezen = [
    "Uitgebreide kennis van alle Rotterdamse wijken",
    "24/7 bereikbaar voor spoedgevallen",
    "Ervaring met hoogbouw en monumentale panden",
    "Laagste prijs garantie",
    "Groot team voor grote projecten",
  ];

  // Situaties
  const situaties = [
    {
      title: "Hoogbouw appartementen Rotterdam",
      description:
        "Rotterdam kent veel hoogbouw. Wij hebben ruime ervaring met ontruiming van appartementen in hoge gebouwen.",
    },
    {
      title: "Ontruiming Rotterdamse wijken",
      description:
        "Van Noord tot Zuid, van Centrum tot Prins Alexander - wij werken overal in Rotterdam. Wij kennen de specifieke eisen van Woonstad Rotterdam, Havensteder en Vestia en leveren bezemschoon op volgens hun normen.",
    },
    {
      title: "Spoedontruiming Rotterdam",
      description:
        "Bij spoed zijn wij vaak binnen enkele uren beschikbaar in Rotterdam.",
    },
    {
      title: "Bedrijfsontruiming Rotterdam",
      description: "Ook voor kantoren en bedrijfspanden in Rotterdam.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/rotterdam/#service",
    name: "Woningontruiming Rotterdam",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/woningontruiming-rotterdam",
      telephone: "+31629759181",
    },
    areaServed: {
      "@type": "City",
      name: "Rotterdam",
      sameAs: "https://www.wikidata.org/wiki/Q34370",
    },
    description:
      "Professionele woningontruiming in heel Rotterdam. Specialisatie in hoogbouw, appartementen en spoedontruimingen. Laagste prijs garantie.",
    knowsAbout: [
      "Hoogbouw appartementen Rotterdam",
      "Spoedontruiming Rotterdam",
      "Bedrijfsontruiming Rotterdam",
      "Woningontruiming Hillegersberg",
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
    name: "Budget Ontruiming Rotterdam",
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
        name: "Rotterdam",
        item: "https://budgetontruiming.nl/woningontruiming-rotterdam",
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
          { label: "Rotterdam" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Rotterdam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Goedkope Woningontruiming Rotterdam, met laagste prijs
                  garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Professionele woningontruiming in heel Rotterdam met laagste
                  prijs garantie. Van hoogbouw in Noord tot villa's in
                  Hillegersberg – wij zijn 24/7 bereikbaar.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Rotterdam
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Bezemschoon opleveren</span>
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

        {/* SEO Content - Direct in page */}
        <article className="container mx-auto px-4 py-12 lg:py-16">
          <section className="prose prose-lg max-w-none mb-12">
            <h2
              id="rotterdam-info"
              className="text-3xl font-bold text-foreground mb-6">
              Woningontruiming in Rotterdam
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Rotterdam is de tweede stad van Nederland met diverse wijken zoals
              Centrum, Zuid, Noord, Kralingen-Crooswijk, Delfshaven, Overschie,
              Prins Alexander en IJsselmonde. Wij bieden professionele
              woningontruiming in heel Rotterdam tegen de laagste prijs,
              gegarandeerd. Wij voldoen aan de eisen van Woonstad Rotterdam,
              Havensteder en Vestia voor bezemschone oplevering.
            </p>

            {/* Wijken */}
            <div
              id="rotterdam-wijken"
              className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Actief in alle wijken van Rotterdam:
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
                Waarom kiezen voor Budget Ontruiming in Rotterdam?
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
              Onze Diensten in Rotterdam
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
                  woningcorporaties zoals Woonstad Rotterdam, Havensteder en
                  Vestia.
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
                  Bij spoed vaak binnen 24 uur starten. In Rotterdam 24/7
                  bereikbaar voor urgente situaties.
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

              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bedrijfsontruimingen
                </h3>
                <p className="text-muted-foreground">
                  Ook voor kantoren, winkels en horeca. Ervaring met grote
                  volumes en tijdskritische projecten.
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
                    alle eisen van woningcorporaties.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* FAQ Section */}
        <section id="rotterdam-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Rotterdam
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming
              in Rotterdam
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
        <GemeenteMap gemeenteNaam="Rotterdam" postcodes="3000-3099" />

        <Footer />
      </main>
    </>
  );
}
