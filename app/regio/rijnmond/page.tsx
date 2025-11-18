import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegioHero } from "@/components/regio-hero"
import { HowItWorks } from "@/components/how-it-works"
import { GemeenteLinks } from "@/components/gemeente-links"
import { RegioFaq } from "@/components/regio-faq"
import { getGemeentesByRegio } from "@/lib/gemeente-data"
import { WebPageSchema, BreadcrumbSchema, FAQSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Woningontruiming Rijnmond - Laagste Prijs Garantie",
  description:
    "Professionele woningontruiming in heel Rijnmond. Rotterdam, Schiedam, Vlaardingen, Nissewaard en meer. Vindt u goedkoper? Wij duiken onder die prijs!",
  keywords: [
    "woningontruiming Rijnmond",
    "ontruiming Rotterdam",
    "ontruiming Schiedam",
    "bezemschoon opleveren Rijnmond",
  ],
  openGraph: {
    title: "Woningontruiming Rijnmond - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in heel Rijnmond. Rotterdam, Schiedam, Vlaardingen, Nissewaard en meer.",
    url: "https://budgetontruiming.nl/regio/rijnmond",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Rijnmond - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in heel Rijnmond.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/regio/rijnmond",
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
}

export default function RijnmondPage() {
  const gemeentes = getGemeentesByRegio("Rijnmond")

  const faqs = [
    {
      question: "In welke gemeentes van Rijnmond zijn jullie actief?",
      answer: "Wij zijn actief in alle gemeentes van Rijnmond: Rotterdam, Schiedam, Vlaardingen, Maassluis, Ridderkerk, Capelle aan den IJssel, Krimpen aan den IJssel, Barendrecht, Albrandswaard, Lansingerland, Nissewaard, Voorne aan Zee en Goeree-Overflakkee."
    },
    {
      question: "Hebben jullie ervaring met hoogbouw in Rotterdam?",
      answer: "Ja, wij hebben uitgebreide ervaring met hoogbouw appartementen in Rotterdam en andere Rijnmond gemeentes. We hebben de juiste apparatuur en expertise voor alle verdiepingen."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! U krijgt altijd de laagste prijs voor woningontruiming in Rijnmond, gegarandeerd."
    },
  ]

  return (
    <>
      {/* SEO Structured Data */}
      <WebPageSchema 
        title="Woningontruiming Rijnmond - Laagste Prijs Garantie"
        description="Professionele woningontruiming in heel Rijnmond. Rotterdam, Schiedam, Vlaardingen, Nissewaard en meer."
        url="https://budgetontruiming.nl/regio/rijnmond"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://budgetontruiming.nl" },
        { name: "Rijnmond", url: "https://budgetontruiming.nl/regio/rijnmond" }
      ]} />
      <FAQSchema faqs={faqs} />
      
      <Header />
      <main>
        <RegioHero 
          regio="Rijnmond"
          subtitle="Professionele woningontruiming in Rotterdam, Schiedam, Vlaardingen en 10 andere gemeentes. 24/7 bereikbaar. Vindt u het elders goedkoper? Wij duiken onder die prijs!"
          badgeText="🏆 Laagste Prijs Garantie in Rotterdam, Schiedam, Vlaardingen en omstreken"
        />
        <HowItWorks />
        <GemeenteLinks gemeentes={gemeentes} regio="Rijnmond" />
        
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Professionele Woningontruiming in Rijnmond
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  De regio Rijnmond omvat diverse gemeentes rondom Rotterdam. Van de havenstad Rotterdam 
                  tot de historische kernen van Schiedam en Vlaardingen, van het eiland Goeree-Overflakkee 
                  tot de Hoeksche Waard. Bij Budget Ontruiming kennen we de regio als geen ander.
                </p>
                <p className="mb-4">
                  Of u nu een hoogbouw appartement in Rotterdam heeft, een herenhuis in Schiedam, een 
                  gezinswoning in Nissewaard of een vakantiehuis op Voorne aan Zee – wij bieden professionele 
                  woningontruiming met onze unieke laagste prijs garantie.
                </p>
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Onze diensten in Rijnmond</h3>
                <ul className="space-y-2 mb-6">
                  <li>✓ Complete woningontruiming van klein tot groot</li>
                  <li>✓ Hoogbouw specialisten (ervaring met alle verdiepingen)</li>
                  <li>✓ Bezemschoon opleveren voor verhuurders</li>
                  <li>✓ Ontruiming na overlijden met respect en zorg</li>
                  <li>✓ Seniorenverhuizingen en begeleiding</li>
                  <li>✓ Spoedontruimingen - 24/7 bereikbaar</li>
                  <li>✓ Bedrijfsontruimingen en kantoorpanden</li>
                  <li>✓ Milieuvriendelijke afvalverwerking</li>
                </ul>
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Laagste Prijs Garantie</h3>
                <p className="mb-4">
                  Wij garanderen u de laagste prijs voor uw woningontruiming in Rijnmond. Vindt u het elders goedkoper? 
                  Wij duiken onder die prijs! Zo simpel is het.
                </p>
                <p>
                  Klik hierboven op uw gemeente voor specifieke informatie over woningontruiming in uw gebied. 
                  Van Rotterdam tot Goeree-Overflakkee, wij staan voor u klaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RegioFaq regio="Rijnmond" />
      </main>
      <Footer />
    </>
  )
}

