import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Goedkope Woningontruiming Den Haag | Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Woningontruiming in Den Haag nodig? Wij duiken onder elke offerte! Bezemschoon opleveren conform de eisen van Staedion, Haag Wonen en Hof Wonen. Bereken direct uw prijs.",
  keywords:
    "woningontruiming den haag, ontruiming den haag, ontruiming centrum den haag, ontruiming zeeheldenkwartier, ontruiming segbroek, ontruiming schilderswijk, ontruiming transvaal, ontruiming loosduinen, ontruiming kijkduin, ontruiming leidschenveen, ontruiming ypenburg, ontruiming mariahoeve, ontruiming statenkwartier, ontruiming moerwijk, bezemschoon den haag 2490-2599, spoedontruiming den haag, ontruiming na overlijden den haag",
  openGraph: {
    title: "Ontruiming Den Haag | Alle Wijken | Laagste Prijs",
    description:
      "Ontruiming Den Haag: Centrum, Statenkwartier, Schilderswijk + 5 wijken. 2490-2599. Vindt u goedkoper? Eronder!",
    url: "https://budgetontruiming.nl/woningontruiming-den-haag",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontruiming Den Haag | Alle Wijken",
    description:
      "Ontruiming Den Haag: Centrum, Statenkwartier, Schilderswijk + 5 wijken.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/woningontruiming-den-haag",
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

export default function DenHaagPage() {
  // FAQs
  const faqs = [
    {
      question: "Hoe snel kunnen jullie een woning in Den Haag ontruimen?",
      answer:
        "In de meeste gevallen kunnen we binnen 1-2 werkdagen starten. Bij spoedeisende situaties is ontruiming binnen 24 uur mogelijk. De duur van de ontruiming hangt af van de grootte en toegankelijkheid van de woning.",
    },
    {
      question: "Werken jullie in alle wijken van Den Haag?",
      answer:
        "Ja, wij ontruimen woningen in heel Den Haag: van het Centrum tot Loosduinen, van Scheveningen tot Leidschenveen. We kennen de lokale situatie en parkeermogelijkheden in elke wijk.",
    },
    {
      question: "Wat gebeurt er met mijn inboedel?",
      answer:
        "Bruikbare spullen gaan naar lokale kringloopwinkels of goede doelen. Waardevolle items kunnen verkocht worden (de opbrengst gaat naar u). De rest wordt milieuvriendelijk afgevoerd volgens Haagse afvalregels.",
    },
    {
      question: "Voldoen jullie aan de eisen van Staedion en Haag Wonen?",
      answer:
        "Zeker. Wij hebben wekelijks te maken met de opzichters van de grote Haagse woningcorporaties zoals Staedion, Haag Wonen en Hof Wonen. Wij leveren de woning exact op volgens hun voorwaarden, zodat u zonder stress de sleutels kunt inleveren.",
    },
    {
      question: "Wat is jullie laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de beste prijs voor uw woningontruiming in Den Haag.",
    },
  ];

  // Wijken
  const wijken = [
    "Centrum & Zeeheldenkwartier",
    "Segbroek & Valkenboskwartier",
    "Schilderswijk & Transvaal",
    "Loosduinen & Kijkduin",
    "Leidschenveen & Ypenburg",
    "Mariahoeve",
    "Statenkwartier",
    "Moerwijk",
  ];

  // Waarom kiezen
  const waaromKiezen = [
    "Lokale kennis van alle Haagse wijken en hun specifieke toegankelijkheid",
    "Ervaring met zowel monumentale panden als moderne nieuwbouw",
    "Snel beschikbaar, vaak binnen 24-48 uur",
    "Laagste prijs garantie - vindt u goedkoper? Wij duiken onder die prijs!",
    "Specialisatie in bezemschoon opleveren volgens Haagse huurvoorwaarden",
  ];

  // Situaties
  const situaties = [
    {
      title: "Ontruiming na overlijden in Den Haag",
      description:
        "Het verlies van een dierbare is een emotionele periode. Wij helpen u met respect en discretie bij het ontruimen van de woning. Van het sorteren van waardevolle bezittingen tot het bezemschoon opleveren – wij nemen u alles uit handen.",
    },
    {
      title: "Huurwoning opleveren (Staedion, Haag Wonen, Hof Wonen)",
      description:
        "Wij zijn gespecialiseerd in het opleveren van woningen volgens de strenge eisen van Haagse corporaties. Of u nu huurt bij Staedion, Haag Wonen of Hof Wonen (Vestia); wij zorgen dat alle pluggen uit de muren zijn, gaten zijn gedicht en vloeren volgens protocol zijn verwijderd.",
    },
    {
      title: "Seniorenverhuizing Den Haag",
      description:
        "Een verhuizing naar een verzorgingstehuis vraagt om zorgvuldige begeleiding. Wij helpen bij het uitzoeken, inpakken en verhuizen, en ontruimen de oude woning compleet conform de eisen van de instelling.",
    },
    {
      title: "Spoedontruiming Den Haag",
      description:
        "Soms moet het snel. Bij verkoop of een nieuwe huurder kunnen wij vaak binnen 24 uur starten. Wij zijn 24/7 bereikbaar voor spoedklussen in heel regio Haaglanden.",
    },
  ];

  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.budgetontruiming.nl/den-haag/#service",
    name: "Woningontruiming Den Haag",
    provider: {
      "@type": "MovingCompany",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/woningontruiming-den-haag",
      telephone: "+31629759181",
    },
    areaServed: {
      "@type": "City",
      name: "Den Haag",
      sameAs: "https://www.wikidata.org/wiki/Q36500",
    },
    description:
      "Gespecialiseerde woningontruiming in Den Haag. Wij leveren bezemschoon op conform de eisen van Staedion, Haag Wonen en Vestia.",
    knowsAbout: [
      "Woningontruiming Den Haag",
      "Bezemschoon opleveren Staedion",
      "Seniorenverhuizing Den Haag",
      "Haagse woningcorporaties",
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
    name: "Budget Ontruiming Den Haag",
    telephone: "+31629759181",
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Den Haag",
      addressRegion: "Zuid-Holland",
      postalCode: "2490-2599",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0705,
      longitude: 4.3007,
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
        name: "Den Haag",
        item: "https://budgetontruiming.nl/woningontruiming-den-haag",
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
          { label: "Den Haag" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Professionele woningontruiming Den Haag"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
                  Goedkope Woningontruiming Den Haag, met laagste prijs
                  garantie.
                </h1>

                <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs!
                </p>

                <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
                  Vindt u het elders goedkoper voor woningontruiming in Den
                  Haag? Wij duiken onder die prijs! Zo bent u ervan verzekerd
                  dat u de laagste prijs betaalt.
                </p>

                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                  <p className="text-md sm:text-lg font-semibold text-white">
                    🏆 Laagste Prijs Garantie in Den Haag
                  </p>
                </div>

                <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
                  <span>Bezemschoon opleveren</span>
                  <span>|</span>
                  <span>Na overlijden</span>
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
            <h2
              id="den-haag-info"
              className="text-3xl font-bold text-foreground mb-6">
              Professionele Woningontruiming in Den Haag
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed mb-8">
              <p className="mb-4">
                Een woningontruiming in Den Haag vraagt om lokale kennis en
                ervaring. Of het nu gaat om een appartement in het
                Zeeheldenkwartier, een herenhuis in het Statenkwartier of een
                sociale huurwoning in de Schilderswijk – wij zorgen voor een
                professionele en respectvolle ontruiming tegen de laagste prijs.
              </p>

              {/* Blok voor Corporaties */}
              <div className="bg-primary/5 border-l-4 border-[#0077B5] p-6 my-8 rounded-r-lg not-prose">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Gespecialiseerd in Haagse corporatiewoningen
                </h3>
                <p className="text-base text-muted-foreground">
                  Wij hebben jarenlange ervaring met de strenge oplevereisen van
                  Haagse woningcorporaties zoals{" "}
                  <strong>
                    Staedion, Haag Wonen en Hof Wonen (voorheen Vestia)
                  </strong>
                  . Wij zorgen ervoor dat de woning exact volgens hun
                  protocollen wordt opgeleverd: van het vakkundig verwijderen
                  van vloeren tot het dichten van gaten in de muren. Wij
                  garanderen een goedgekeurde eindinspectie.
                </p>
              </div>
            </div>

            {/* Wijken */}
            <div
              id="den-haag-wijken"
              className="bg-muted/50 rounded-lg p-6 mb-8 not-prose">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Actief in alle wijken van Den Haag:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {wijken.map((wijk, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-foreground">
                    <span className="text-[#0077B5]">✓</span>
                    <span className="text-sm">{wijk}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Waarom Kiezen */}
          <section className="py-12 lg:py-16 bg-muted/30 mb-12 rounded-xl">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Waarom kiezen voor Budget Ontruiming in Den Haag?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {waaromKiezen.map((reden, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-6 bg-card shadow-sm">
                    <div className="flex gap-3">
                      <span className="text-[#0077B5] text-xl">✓</span>
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
                    className="border rounded-lg p-6 bg-card hover:shadow-md transition-shadow">
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
              Onze Diensten in Den Haag
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

              <div className="border rounded-lg p-6 bg-card border-[#0077B5]/20">
                <h3 className="text-xl font-bold text-[#0077B5] mb-3">
                  Bezemschoon Opleveren
                </h3>
                <p className="text-muted-foreground">
                  Woning bezemschoon opgeleverd volgens eisen van verhuurders en
                  woningcorporaties zoals Haag Wonen en Staedion.
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
                  Bij spoed vaak binnen 24 uur starten. In Den Haag 24/7
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
        </article>

        {/* FAQ Section */}
        <section id="haagse-faq" className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in Den Haag
            </h2>
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
        <GemeenteMap gemeenteNaam="Den Haag" postcodes="2490-2599" />

        <Footer />
      </main>
    </>
  );
}
