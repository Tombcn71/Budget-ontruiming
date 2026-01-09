import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { HeroAI } from "@/components/hero-ai";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Woningontruiming Haaglanden & Rijnmond | Laagste Prijs Garantie | Budget Ontruiming",
  description:
    "Woningontruiming in Haaglanden of Rijnmond? Wij duiken onder elke offerte! Snel, vakkundig en bezemschoon opgeleverd. Bereken direct uw prijs online.",
  keywords:
    "woningontruiming haaglanden, woningontruiming rijnmond, ontruiming den haag, ontruiming rotterdam, bezemschoon, spoedontruiming, laagste prijs garantie",
  openGraph: {
    title: "Woningontruiming Haaglanden & Rijnmond - Laagste Prijs Garantie",
    description:
      "Professionele woningontruiming in Den Haag, Rotterdam en 20+ gemeentes. Vindt u het elders goedkoper? Wij duiken onder die prijs!",
    url: "https://www.budgetontruiming.nl", // WWW FIX
    type: "website",
    locale: "nl_NL",
    siteName: "Budget Ontruiming",
  },
  alternates: {
    canonical: "https://www.budgetontruiming.nl", // WWW FIX
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // FAQs
  const faqs = [
    {
      question: "In welke regio's zijn jullie actief?",
      answer:
        "Wij zijn actief in heel Zuid-Holland, met name in de regio's Haaglanden (Den Haag, Delft, Zoetermeer e.o.) en Rijnmond (Rotterdam, Schiedam, Vlaardingen e.o.). In totaal bedienen wij meer dan 22 gemeentes.",
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer:
        "Vindt u het elders goedkoper? Wij duiken onder die prijs! Dit is geen marketingpraatje maar een concrete garantie.",
    },
    {
      question: "Hoe snel kunnen jullie starten met de ontruiming?",
      answer:
        "Meestal kunnen we binnen 1-3 werkdagen starten. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen.",
    },
    {
      question: "Wat kost een woningontruiming?",
      answer:
        "De prijs hangt af van verschillende factoren: type woning, grootte, hoeveelheid inboedel, verdieping en eventuele extra diensten. Upload foto's via onze AI tool voor een directe prijsindicatie.",
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer:
        "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar.",
    },
    {
      question: "Hoe werkt de AI prijscalculator?",
      answer:
        "Upload minimaal 1 foto van uw woning. Onze AI analyseert de foto's en bepaalt de hoeveelheid inboedel. Op basis daarvan krijgt u binnen 2 minuten een prijsindicatie per email.",
    },
    {
      question: "Werken jullie ook op hogere verdiepingen?",
      answer:
        "Ja, wij hebben ruime ervaring met hoogbouw. Is er een lift aanwezig? Dan krijgt u 50% korting op de trapkosten.",
    },
    {
      question: "Wat gebeurt er met mijn spullen?",
      answer:
        "Alle materialen worden milieuvriendelijk verwerkt en gescheiden voor recycling. Alles wordt verantwoord afgevoerd volgens de geldende richtlijnen.",
    },
  ];

  // Gemeentes voor kaart
  const gemeentes = [
    "Den Haag",
    "Rotterdam",
    "Delft",
    "Zoetermeer",
    "Schiedam",
    "Vlaardingen",
    "Rijswijk",
    "Wassenaar",
    "Westland",
    "Leidschendam-Voorburg",
    "Midden-Delfland",
    "Pijnacker-Nootdorp",
    "Capelle aan den IJssel",
    "Barendrecht",
    "Ridderkerk",
    "Albrandswaard",
    "Lansingerland",
    "Krimpen aan den IJssel",
    "Nissewaard",
    "Maassluis",
    "Goeree-Overflakkee",
    "Voorne aan Zee",
  ];

  // Schema's
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Budget Ontruiming",
    image: "https://www.budgetontruiming.nl/logo.png", // WWW FIX
    "@id": "https://www.budgetontruiming.nl", // WWW FIX
    url: "https://www.budgetontruiming.nl", // WWW FIX
    telephone: "+31629759181",
    email: "info@budgetontruiming.nl",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.0705,
      longitude: 4.3007,
    },
    areaServed: gemeentes.map((gemeente) => ({
      "@type": "City",
      name: gemeente,
    })),
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Budget Ontruiming - Woningontruiming Haaglanden & Rijnmond",
    description:
      "Professionele woningontruiming met laagste prijs garantie in Zuid-Holland",
    url: "https://budgetontruiming.nl",
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Hoe werkt woningontruiming bij Budget Ontruiming",
    description:
      "In 3 eenvoudige stappen naar een ontruimde woning zonder gedoe",
    totalTime: "PT24H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "2490",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Prijs berekenen",
        text: "Ons slimme AI formulier berekent direct jouw prijs. Een woningbezoek is niet nodig. Goedkoper gevonden? Wij betalen het verschil.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Datum kiezen",
        text: "Kies de datum wanneer jij de woning ontruimd wil hebben. Meestal binnen 1-3 werkdagen beschikbaar, bij spoed binnen 24 uur.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Ontruiming",
        text: "Ons professionele team voert de ontruiming snel en zorgvuldig uit op het afgesproken moment. Bezemschoon opgeleverd.",
      },
    ],
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
    ],
  };

  return (
    <>
      {/* Schema's direct in page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        <TopBanner />
        <Header />

        {/* JOUW ORIGINELE HERO - NIET AANGEPAST */}
        <section id="prijscalculator">
          <HeroAI />
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
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Professionele Woningontruiming in Haaglanden en Rijnmond
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Budget Ontruiming is uw specialist voor woningontruiming in
              Zuid-Holland. Wij zijn actief in de regio's{" "}
              <strong>Haaglanden</strong> (Den Haag, Delft, Zoetermeer,
              Rijswijk, Wassenaar, Westland, Pijnacker-Nootdorp,
              Leidschendam-Voorburg en Midden-Delfland) en{" "}
              <strong>Rijnmond</strong> (Rotterdam, Schiedam, Vlaardingen,
              Capelle aan den IJssel, Barendrecht, Ridderkerk, Albrandswaard,
              Lansingerland, Krimpen aan den IJssel, Nissewaard, Maassluis,
              Goeree-Overflakkee en Voorne aan Zee).
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>
                Vindt u het elders goedkoper? Wij duiken onder die prijs!
              </strong>{" "}
              Dit is onze concrete garantie. Krijgt u een lagere offerte van een
              andere ontruimingsbedrijf? Stuur deze naar ons op en wij gaan
              eronder zitten. Zo weet u zeker dat u altijd de beste prijs
              betaalt voor uw woningontruiming.
            </p>
          </section>

          {/* Regio's */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Woningontruiming Haaglanden
              </h3>
              <p className="text-muted-foreground mb-4">
                In de regio Haaglanden verzorgen wij professionele
                woningontruimingen in 9 gemeentes. Van het drukke centrum van
                Den Haag tot de rustige wijken van Wassenaar.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-den-haag"
                    className="hover:text-primary underline">
                    Den Haag
                  </a>{" "}
                  - Alle wijken en postcodes (2500-2599)
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-delft"
                    className="hover:text-primary underline">
                    Delft
                  </a>{" "}
                  - Historisch centrum en nieuwbouw
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-zoetermeer"
                    className="hover:text-primary underline">
                    Zoetermeer
                  </a>{" "}
                  - Alle woonwijken en hoogbouw
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-wassenaar"
                    className="hover:text-primary underline">
                    Wassenaar
                  </a>{" "}
                  - Villa's en grotere woningen
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-westland"
                    className="hover:text-primary underline">
                    Westland
                  </a>{" "}
                  - Naaldwijk, Monster, 's-Gravenzande
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-rijswijk"
                    className="hover:text-primary underline">
                    Rijswijk
                  </a>{" "}
                  - Dichtbij Den Haag
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-pijnacker-nootdorp"
                    className="hover:text-primary underline">
                    Pijnacker-Nootdorp
                  </a>{" "}
                  - Voorsteden Den Haag
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-leidschendam-voorburg"
                    className="hover:text-primary underline">
                    Leidschendam-Voorburg
                  </a>{" "}
                  - Grensgebied
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-midden-delfland"
                    className="hover:text-primary underline">
                    Midden-Delfland
                  </a>{" "}
                  - Maasland, Schipluiden
                </li>
              </ul>
              <a
                href="/regio/haaglanden"
                className="text-primary font-semibold hover:underline">
                → Meer over Haaglanden
              </a>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Woningontruiming Rijnmond
              </h3>
              <p className="text-muted-foreground mb-4">
                De Rijnmond regio met 13 gemeentes. Van hoogbouw in Rotterdam
                tot dijkwoningen in Voorne aan Zee.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-rotterdam"
                    className="hover:text-primary underline">
                    Rotterdam
                  </a>{" "}
                  - Alle wijken (3000-3099)
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-schiedam"
                    className="hover:text-primary underline">
                    Schiedam
                  </a>{" "}
                  - Centrum en wijken
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-vlaardingen"
                    className="hover:text-primary underline">
                    Vlaardingen
                  </a>{" "}
                  - Haven en woongebieden
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-capelle-aan-den-ijssel"
                    className="hover:text-primary underline">
                    Capelle a/d IJssel
                  </a>{" "}
                  - Voorsteden
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-barendrecht"
                    className="hover:text-primary underline">
                    Barendrecht
                  </a>{" "}
                  - Groeiende gemeente
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-ridderkerk"
                    className="hover:text-primary underline">
                    Ridderkerk
                  </a>{" "}
                  - IJsselmonde
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-nissewaard"
                    className="hover:text-primary underline">
                    Nissewaard
                  </a>{" "}
                  - Spijkenisse e.o.
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-lansingerland"
                    className="hover:text-primary underline">
                    Lansingerland
                  </a>{" "}
                  - Berkel, Bleiswijk
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-albrandswaard"
                    className="hover:text-primary underline">
                    Albrandswaard
                  </a>{" "}
                  - Rhoon, Poortugaal
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-krimpen-aan-den-ijssel"
                    className="hover:text-primary underline">
                    Krimpen a/d IJssel
                  </a>{" "}
                  - Lek-gebied
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-maassluis"
                    className="hover:text-primary underline">
                    Maassluis
                  </a>{" "}
                  - Havenstad
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-goeree-overflakkee"
                    className="hover:text-primary underline">
                    Goeree-Overflakkee
                  </a>{" "}
                  - Eiland
                </li>
                <li>
                  •{" "}
                  <a
                    href="/woningontruiming-voorne-aan-zee"
                    className="hover:text-primary underline">
                    Voorne aan Zee
                  </a>{" "}
                  - Kustgebied
                </li>
              </ul>
              <a
                href="/regio/rijnmond"
                className="text-primary font-semibold hover:underline">
                → Meer over Rijnmond
              </a>
            </div>
          </div>

          {/* Diensten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Onze Diensten
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
                  Spoedontruiming 24 uur
                </h3>
                <p className="text-muted-foreground">
                  Bij spoed vaak binnen 24 uur starten. In Rotterdam en Den Haag
                  24/7 bereikbaar.
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
        <section className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Veelgestelde Vragen
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alles wat u moet weten over woningontruiming met Budget Ontruiming
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

        {/* JOUW KAART COMPONENT - NIET VERGETEN! */}
        <GemeenteMap
          gemeenteNaam="Haaglanden & Rijnmond"
          postcodes="2500-2599, 3000-3099"
        />

        <Footer />
      </main>
    </>
  );
}
