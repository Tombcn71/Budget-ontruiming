import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Woningontruiming Zoetermeer | Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Woningontruiming Zoetermeer? Wij duiken onder elke offerte! Specialist in hoogbouw & bezemschoon opleveren in alle wijken van Zoetermeer. Bereken uw prijs.",
  keywords:
    "woningontruiming zoetermeer, ontruiming zoetermeer, ontruiming palenstein, ontruiming buytenwegh, ontruiming seghwaert, bezemschoon zoetermeer, spoedontruiming zoetermeer, ontruiming rokkeveen, woning leegruimen zoetermeer",
  openGraph: {
    title: "Woningontruiming Zoetermeer - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Zoetermeer. Rokkeveen, Oosterheem, Seghwaert. Vindt u het goedkoper? Wij duiken eronder!",
    url: "https://www.budgetontruiming.nl/woningontruiming-zoetermeer", // MET WWW
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: "https://www.budgetontruiming.nl/woningontruiming-zoetermeer", // MET WWW
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ZoetermeerPage() {
  // FAQs
  const faqs = [
    {
      question: "Hoe snel kunnen jullie een woning in Zoetermeer ontruimen?",
      answer:
        "In de meeste gevallen kunnen we binnen 1-2 werkdagen starten. Bij spoedeisende situaties is ontruiming binnen 24 uur mogelijk.",
    },
    {
      question: "Werken jullie in alle wijken van Zoetermeer?",
      answer:
        "Ja, wij ontruimen woningen in heel Zoetermeer: van Palenstein tot Buytenwegh, van Seghwaert tot Rokkeveen. We kennen de lokale situatie in elke wijk.",
    },
    {
      question: "Hebben jullie ervaring met hoogbouw in Zoetermeer?",
      answer:
        "Ja, wij hebben veel ervaring met de hoogbouw in Zoetermeer. Wij maken efficiënt gebruik van liften en trappenhuizen conform de geldende huisregels.",
    },
    {
      question: "Wat is jullie laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de beste prijs voor uw woningontruiming in Zoetermeer.",
    },
  ];

  // Wijken
  const wijken = [
    "Palenstein",
    "Buytenwegh",
    "Seghwaert",
    "Rokkeveen",
    "Driemanspolder",
    "Stadscentrum",
    "Oosterheem",
    "Meerzicht",
    "Noordhove",
  ];

  // Waarom kiezen
  const waaromKiezen = [
    "Lokale kennis van alle Zoetermeerse wijken en hun specifieke toegankelijkheid",
    "Ervaring met zowel hoogbouw als laagbouw",
    "Snel beschikbaar, vaak binnen 24-48 uur",
    "Laagste prijs garantie - vindt u goedkoper? Wij duiken onder die prijs!",
    "Specialisatie in bezemschoon opleveren volgens Zoetermeerse huurvoorwaarden",
  ];

  // Situaties
  const situaties = [
    {
      title: "Hoogbouw ontruiming Zoetermeer",
      description:
        "Zoetermeer heeft veel hoogbouw. Wij hebben ruime ervaring met het efficiënt ontruimen van appartementen op hogere verdiepingen, inclusief liftgebruik en trappenhuizen.",
    },
    {
      title: "Ontruiming na overlijden in Zoetermeer",
      description:
        "Het verlies van een dierbare is een emotionele periode. Wij helpen u met respect en discretie bij het ontruimen van de woning.",
    },
    {
      title: "Bezemschoon opleveren Zoetermeer",
      description:
        "Wij kennen de oplevervoorwaarden van alle grote Zoetermeerse woningcorporaties en zorgen dat uw woning exact volgens deze eisen wordt opgeleverd.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/zoetermeer/#service",
    name: "Woningontruiming Zoetermeer",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/",
      telephone: "+31629759181",
    },
    areaServed: {
      "@type": "City",
      name: "Zoetermeer",
      sameAs: "https://www.wikidata.org/wiki/Q1100",
    },
    description:
      "Professionele woningontruiming in Zoetermeer. Expertise in hoogbouw en bezemschone oplevering in alle wijken.",
    knowsAbout: [
      "Hoogbouw ontruimen Zoetermeer",
      "Bezemschoon opleveren Zoetermeer",
      "Spoedontruiming Zoetermeer",
      "Ontruiming na overlijden Zoetermeer",
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
        name: "Zoetermeer",
        item: "https://www.budgetontruiming.nl/woningontruiming-zoetermeer", // MET WWW
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id":
      "https://www.budgetontruiming.nl/woningontruiming-zoetermeer/#localbusiness",
    name: "Budget Ontruiming Zoetermeer",
    telephone: "+31629759181",
    priceRange: "€",
    image:
      "https://www.budgetontruiming.nl/professional-movers-carrying-boxes-in-modern-home.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zoetermeer",
      addressRegion: "Zuid-Holland",
      postalCode: "2700-2729",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0607,
      longitude: 4.494,
    },
  };

  return (
    <>
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
          { label: "Zoetermeer" },
        ]}
      />

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
                  Woningontruiming Zoetermeer
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo
                  bent u ervan verzekerd dat u de laagste prijs betaalt voor uw
                  woningontruiming in Zoetermeer.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Zoetermeer
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Bezemschoon</span>
                  <span>|</span>
                  <span>Alle wijken</span>
                  <span>|</span>
                  <span>Spoedontruiming</span>
                </div>
              </div>

              <div>
                <AIQuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Hoe Het Werkt */}
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

        {/* SEO Content */}
        <article className="container mx-auto px-4 py-12 lg:py-16">
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Professionele Woningontruiming in Zoetermeer
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Budget Ontruiming is uw specialist voor woningontruiming in{" "}
              <strong>Zoetermeer</strong>. Wij zijn actief in alle wijken van
              Zoetermeer, van <strong>Palenstein</strong> tot{" "}
              <strong>Buytenwegh</strong>, van <strong>Seghwaert</strong> tot{" "}
              <strong>Rokkeveen</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>
                Vindt u het elders goedkoper? Wij duiken onder die prijs!
              </strong>{" "}
              Dit is onze concrete garantie. Krijgt u een lagere offerte van een
              andere ontruimingsbedrijf? Stuur deze naar ons op en wij gaan
              eronder zitten. Zo weet u zeker dat u altijd de beste prijs
              betaalt voor uw woningontruiming in Zoetermeer, zonder concessies
              te doen aan kwaliteit.
            </p>
          </section>

          {/* Wijken */}
          <section id="zoetermeer-wijken" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Wijken in Zoetermeer
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wijken.map((wijk, index) => (
                <div key={index} className="border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold text-foreground">{wijk}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Waarom Kiezen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Waarom kiezen voor Budget Ontruiming in Zoetermeer?
            </h2>
            <ul className="space-y-3">
              {waaromKiezen.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Situaties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Specifieke Situaties in Zoetermeer
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {situaties.map((situatie, index) => (
                <div key={index} className="border rounded-lg p-6 bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {situatie.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {situatie.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Diensten */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Onze Diensten in Zoetermeer
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Volledige Woningontruiming
                </h3>
                <p className="text-muted-foreground">
                  Complete ontruiming van woningen en appartementen in
                  Zoetermeer. Alle inboedel wordt zorgvuldig verwijderd en
                  milieuvriendelijk verwerkt.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Na de ontruiming leveren wij uw woning bezemschoon op volgens
                  de eisen van verhuurders en woningcorporaties.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Ontruiming na Overlijden
                </h3>
                <p className="text-muted-foreground">
                  Bij overlijden van een dierbare helpen wij met respect en zorg
                  bij het ontruimen van de woning.
                </p>
              </div>
            </div>
          </section>

          {/* USPs */}
          <section className="mb-12 bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Waarom Budget Ontruiming in Zoetermeer?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-4xl">🏆</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Laagste Prijs Garantie
                  </h3>
                  <p className="text-muted-foreground">
                    Onze unieke garantie: vindt u het elders goedkoper voor een
                    vergelijkbare dienst? Stuur ons de offerte en wij gaan
                    eronder zitten.
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
                    Normaal gesproken kunnen we binnen 1-3 werkdagen starten.
                    Heeft u meer haast? Bij spoedgevallen starten we vaak al
                    binnen 24 uur.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* FAQ Section */}
        <section
          id="zoetermeer-faq"
          className="container mx-auto px-4 py-12 lg:py-16 bg-muted/30">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Veelgestelde Vragen over Woningontruiming in Zoetermeer
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GemeenteMap */}
        <GemeenteMap gemeenteNaam="Zoetermeer" postcodes="2700-2729" />

        <Footer />
      </main>
    </>
  );
}
