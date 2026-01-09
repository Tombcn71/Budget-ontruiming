import type { Metadata } from "next";
import { TopBanner } from "@/components/top-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GemeenteMap } from "@/components/gemeente-map";
import { AIQuoteForm } from "@/components/ai-quote-form";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title:
    "Woningontruiming Albrandswaard | Rhoon & Poortugaal | Laagste Prijs Garantie",
  description:
    "Woningontruiming in Albrandswaard (Rhoon & Poortugaal) nodig? Wij duiken onder elke offerte! Bezemschoon opgeleverd. Bereken nu uw prijs.",
  keywords:
    "woningontruiming albrandswaard, ontruiming albrandswaard, ontruiming rhoon, ontruiming poortugaal, bezemschoon albrandswaard 3160-3176, spoedontruiming albrandswaard, ontruiming na overlijden albrandswaard",
  openGraph: {
    title: "Ontruiming Albrandswaard | Rhoon & Poortugaal | Laagste Prijs",
    description:
      "Ontruiming Albrandswaard: Rhoon en Poortugaal. Postcodes 3160-3176. Vindt u het goedkoper? Wij gaan eronder!",
    url: "https://www.budgetontruiming.nl/woningontruiming-albrandswaard", // MET WWW
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: "https://www.budgetontruiming.nl/woningontruiming-albrandswaard", // MET WWW
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function AlbrandswaardPage() {
  // FAQs specifiek voor Albrandswaard
  const faqs = [
    {
      question: "Werken jullie in zowel Rhoon als Poortugaal?",
      answer:
        "Ja, wij werken in de gehele gemeente Albrandswaard, inclusief alle wijken in Rhoon (zoals Portland en Ghijseland) en Poortugaal (Dorp en omliggende gebieden).",
    },
    {
      question: "Hoe snel kunnen jullie ontruimen in Albrandswaard?",
      answer:
        "Meestal kunnen we binnen 1-3 werkdagen starten. Bij spoedgevallen in Albrandswaard zijn wij vaak binnen 24 uur ter plaatse.",
    },
    {
      question: "Leveren jullie bezemschoon op voor verhuurders?",
      answer:
        "Zeker. Wij kennen de eisen van lokale verhuurders en zorgen voor een volledige bezemschone oplevering inclusief het verwijderen van vloeren en het dichten van gaatjes.",
    },
    {
      question: "Wat is jullie laagste prijs garantie?",
      answer:
        "Heel simpel: vindt u een goedkopere offerte voor uw ontruiming in Albrandswaard? Laat het ons zien en wij duiken onder die prijs. U betaalt nooit te veel.",
    },
  ];

  const situaties = [
    {
      title: "Ontruiming Rhoon & Poortugaal",
      description:
        "Wij kennen de weg in Albrandswaard. Of het nu gaat om een gezinswoning in Rhoon-Noord of een zorgkamer in Poortugaal.",
    },
    {
      title: "Huurwoning Opleveren",
      description:
        "Wij maken de woning klaar voor de eindinspectie. Volledig leeg, gaten gedicht en vloeren verwijderd.",
    },
    {
      title: "Spoedontruiming Albrandswaard",
      description:
        "Moet een woning in Albrandswaard op zeer korte termijn leeg? Wij schakelen direct.",
    },
    {
      title: "Seniorenverhuizing",
      description:
        "Zorgvuldige ontruiming van de oude woning bij verhuizing naar een zorginstelling in de regio.",
    },
  ];

  // Schema's
  // Schema's
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.budgetontruiming.nl/woningontruiming-albrandswaard/#service", // MET WWW
    name: "Woningontruiming Albrandswaard",
    provider: {
      "@type": "LocalBusiness",
      name: "Budget Ontruiming",
      url: "https://www.budgetontruiming.nl/", // MET WWW en slash
      telephone: "+31629759181",
      priceRange: "€",
      image:
        "https://www.budgetontruiming.nl/professional-movers-carrying-boxes-in-modern-home.jpg",
    },
    areaServed: {
      "@type": "City",
      name: "Albrandswaard",
      sameAs: "https://www.wikidata.org/wiki/Q36500",
    },
    description:
      "Professionele woningontruiming in Rhoon en Poortugaal. Laagste prijs garantie en bezemschone oplevering in de gehele gemeente Albrandswaard.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <TopBanner />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Rijnmond", href: "/regio/rijnmond" },
          { label: "Albrandswaard" },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section met Calculator */}
        <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/professional-movers-carrying-boxes-in-modern-home.jpg"
              alt="Woningontruiming Albrandswaard Rhoon Poortugaal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-tight">
                  Woningontruiming Albrandswaard, met laagste prijs garantie.
                </h1>
                <p className="text-lg sm:text-xl mb-6 opacity-90">
                  Wij duiken onder elke offerte in Rhoon en Poortugaal! Direct
                  een vaste prijs via onze AI-scan.
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                  <p className="text-md font-semibold">
                    🏆 Laagste Prijs Garantie in Albrandswaard
                  </p>
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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Hoe Het Werkt</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Prijs berekenen</h3>
                <p className="text-muted-foreground text-sm">
                  Bereken direct uw prijs via AI. Geen huisbezoek nodig.
                </p>
              </div>
              <div className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Datum kiezen</h3>
                <p className="text-muted-foreground text-sm">
                  Plan uw ontruiming in Albrandswaard wanneer het u uitkomt.
                </p>
              </div>
              <div className="p-6">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Ontruiming</h3>
                <p className="text-muted-foreground text-sm">
                  Wij leveren de woning bezemschoon op volgens alle eisen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">
              Professionele Woningontruiming in Rhoon en Poortugaal
            </h2>
            <p className="text-muted-foreground mb-8">
              Zoekt u een betrouwbaar bedrijf voor woningontruiming in
              Albrandswaard? Wij bieden een volledige ontzorging voor
              particulieren en bedrijven in Rhoon en Poortugaal. Met onze unieke{" "}
              <strong>laagste prijs garantie</strong> bent u verzekerd van de
              beste deal in de regio Rijnmond.
            </p>

            <div className="bg-[#0077B5]/5 border-l-4 border-[#0077B5] p-6 rounded-r-lg my-8">
              <h3 className="text-xl font-bold mb-2">
                Bezemschone oplevering gegarandeerd
              </h3>
              <p className="text-base m-0 text-muted-foreground">
                Wij zorgen dat uw woning in Albrandswaard volledig voldoet aan
                de eisen van de verhuurder of makelaar. Wij verwijderen vloeren,
                dichten gaatjes in muren en voeren alle overtollige inboedel
                milieuvriendelijk af.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 not-prose mt-12">
              {situaties.map((sit, i) => (
                <div key={i} className="border rounded-xl p-6 bg-card">
                  <h3 className="font-bold text-lg mb-2">{sit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Veelgestelde vragen Albrandswaard
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GemeenteMap gemeenteNaam="Albrandswaard" postcodes="3160-3176" />
        <Footer />
      </main>
    </>
  );
}
